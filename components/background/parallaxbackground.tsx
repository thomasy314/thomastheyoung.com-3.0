"use client"

import { CSSProperties, PropsWithChildren, useEffect, useRef, useState } from 'react';
import './parallaxbackground.css';
import ColorManager from './colors';
import { BackgroundConfig, BackgroundConfigLayerData, backgroundConfig } from '@/config/backgroundconfig';

// Format background array with pixels (px)
const formatBackgroundPosArrayPX = (backgroundPosArr: number[]): string => {
    return backgroundPosArr.map(val => `${val}px`).join(', ');
}

// FOrmat background array relative to a position
const formatBackgroundPosArrayRelativeToPos = (position: "top" | "bottom" | "right" | "left", offsetArr: number[] | string[]): string => {
    return offsetArr.map(val => `${position} ${val}`).join(', ');
}

const colorManager = new ColorManager();
const color: string[] = colorManager.getRandomColor();

type ParallaxBackgroundProps = {
    disable?: boolean
}

export default function ParallaxBackground({ disable, children }: PropsWithChildren<ParallaxBackgroundProps>) {

    const backgroundDivRef = useRef<HTMLDivElement>(null);

    const [backgroundPosX, setBackgroundPosX] = useState([0]);
    const [backgroundPosY, setBackgroundPosY] = useState([0]);
    const [parallaxOn, setParallaxOn] = useState(false);

    const move = (movementX: number, movementY: number, on: boolean) => {
        if (on == false || disable) return;

        const speedX = -movementX * backgroundConfig.parallaxSettings.speedXMultiplier;
        const speedY = -movementY * backgroundConfig.parallaxSettings.speedYMultiplier;


        if (!isFinite(speedX) || Number.isNaN(speedX) || !isFinite(speedY) || Number.isNaN(speedY)) {
            return;
        }

        setBackgroundPosX(oldX => {
            return oldX.map((x: number, i: number) => {
                const layer = backgroundConfig.backgroundLayerData[i].layer;
                const speedModX = backgroundConfig.parallaxSettings.layerSpeedModFunction(layer);
                return x + (speedX * speedModX)
            });
        });

        setBackgroundPosY(oldY => {
            return oldY.map((y: number, i: number) => {
                const layer = backgroundConfig.backgroundLayerData[i].layer;
                const speedModY = backgroundConfig.parallaxSettings.layerSpeedModFunction(layer);

                const minY = backgroundConfig.backgroundLayerData[i].backgroundPosY - backgroundConfig.parallaxSettings.yMargin;
                const maxY = backgroundConfig.backgroundLayerData[i].backgroundPosY + backgroundConfig.parallaxSettings.yMargin;

                const newY = y + (speedY * speedModY)
                const yCeil = Math.min(maxY, newY);
                const yFloor = Math.max(minY, yCeil);
                return yFloor;
            });

        });
    };

    const loadBackground = (backgroundConfig: BackgroundConfig, palette: string[]/*, backgroundSvgs: BackgroundSvg, palette: string[]*/) => {
        const promises: any = [];

        backgroundConfig.backgroundLayerData.forEach((data, index) => {
            const layerColor: string = palette[index + 1];
            const layerPromise: Promise<any> =
                fetch(data.svg.src)
                    .then((res: any) => res.text())
                    .then((text: string) => {
                        const formattedSvg: string = text.replace('\n', '').replaceAll(/fill="#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g, `fill="${layerColor}`);
                        const backgroundUrl = `url('data:image/svg+xml;base64,${btoa(formattedSvg)}')`;
                        data.backgroundUrl = backgroundUrl;
                        return data;
                    });
            promises.push(layerPromise);
        })

        Promise.all(promises).then((newBackgroundData: BackgroundConfigLayerData[]) => {
            if (backgroundDivRef.current) {
                backgroundDivRef.current.style.backgroundColor = `${palette[0]}`;
                backgroundDivRef.current.style.backgroundImage = newBackgroundData.map(val => val.backgroundUrl).join(', ');
                setBackgroundPosX(newBackgroundData.map(val => val.backgroundPosX));
                setBackgroundPosY(newBackgroundData.map(val => val.backgroundPosY));
                setParallaxOn(true);
                backgroundDivRef.current.style.opacity = "1";
            }
        });
    }

    useEffect(() => {
        loadBackground(backgroundConfig, color);
    }, []);

    const style: CSSProperties = backgroundDivRef.current ?
        {
            backgroundPositionX: formatBackgroundPosArrayPX(backgroundPosX),
            backgroundPositionY: formatBackgroundPosArrayRelativeToPos("bottom", backgroundPosY.map(val => `calc(min(-50px, -5vw) - ${val}px)`))
        }
        :
        {}

    return (
        <div onMouseMove={event => move(event.movementX, event.movementY, parallaxOn)} style={style} ref={backgroundDivRef} className="parallax-background">
            {children}
        </div>
    )
}