"use client"

import { PropsWithChildren, useEffect } from 'react';
import './layeredbackground.css';
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

type LayeredBackgroundProps = {
}

export default function LayeredBackground({ children }: PropsWithChildren<LayeredBackgroundProps>) {

    const layeredBackgroundId = "layered-background";

    const loadBackground = (backgroundConfig: BackgroundConfig, palette: string[]) => {
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
            const layeredBackground = document.getElementById(layeredBackgroundId);
            if (layeredBackground) {
                layeredBackground.style.backgroundColor = `${palette[0]}`;
                layeredBackground.style.backgroundImage = newBackgroundData.map(val => val.backgroundUrl).join(', ');
                layeredBackground.style.backgroundPositionX = formatBackgroundPosArrayPX(newBackgroundData.map(val => val.backgroundPosX));
                layeredBackground.style.backgroundPositionY = formatBackgroundPosArrayRelativeToPos("bottom", newBackgroundData.map(val => `calc(min(-50px, -5vw) - ${val.backgroundPosY}px)`));
                layeredBackground.style.opacity = "1";
            }
        });
    }

    useEffect(() => {
        loadBackground(backgroundConfig, color);
    }, []);

    return (
        <div id={layeredBackgroundId}>
            {children}
        </div>
    )
}