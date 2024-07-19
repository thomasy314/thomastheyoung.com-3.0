"use client"

import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import './background.css';
import { BackgroundSvg, hillsSvgs } from '@/Images/hills/HillsSvgs';
import ColorManager from './colors';

/*
    It would be really cool to make these into react components instead of using background images
*/

const getElementPosX = (background: HTMLElement): number[] => {
    const hillsBackgroundPositionXStr = background.style.backgroundPositionX.replace(/%/g, '').split(', ');
    return hillsBackgroundPositionXStr?.map((xVal: string, i: number) => parseInt(xVal));
}

const getElementPosY = (background: HTMLElement): number[] => {
    const hillsBackgroundPositionYStr = background.style.backgroundPositionY.replace(/%/g, '').split(', ');
    return hillsBackgroundPositionYStr?.map((yVal: string, i: number) => parseInt(yVal));
}

const formatBackgroundPosArray = (backgroundPosArr: number[]): string => {
    return backgroundPosArr.map(val => `${val}%`).join(', ');
}

type HillsBackgroundProps = {}

export default function HillsBackground({ children }: PropsWithChildren<HillsBackgroundProps>) {

    const hillsRef = useRef<HTMLDivElement>(null);

    const [backgroundPosX, setBackgroundPosX] = useState([0, 50, 50, 1000, 0, 250, 250, 0]);
    const [backgroundPosY, setBackgroundPosY] = useState([40, 50, 50, 30, 30, 30, 30, 40]);

    const speedXMultiplier: number = 1 / 1;
    const speedYMultiplier: number = 1 / 50;

    const speedModX: number[] = [1, 0.3, 0.3, 0.1, 0.1, 0.05, 0.05, 0.02];
    const speedModY: number[] = [1, 0.3, 0.3, 0.1, 0.1, 0.05, 0.05, 0.02];

    const colorManager = new ColorManager();

    const yMargin = 30;
    const minY = backgroundPosY[0] - yMargin;
    const maxY = backgroundPosY[0] + yMargin;

    const move = (movementX: number, movementY: number) => {
        const speedX = -movementX * speedXMultiplier;
        const speedY = -movementY * speedYMultiplier;


        if (!isFinite(speedX) || Number.isNaN(speedX) || !isFinite(speedY) || Number.isNaN(speedY)) {
            return;
        }

        setBackgroundPosX(oldX => {
            return oldX.map((x: number, i: number) => x + (speedX * speedModX[i]));
        });

        setBackgroundPosY(oldY => {
            return oldY.map((y: number, i: number) => {
                const newY = y + (speedY * speedModY[i])
                const yCeil = Math.min(maxY, newY);
                const yFloor = Math.max(minY, yCeil);
                return yFloor;
            });

        });
    };

    const loadBackground = (backgroundSvgs: BackgroundSvg, palette: string[]) => {
        const promises: any = [];
        const formattedHills: string[] = new Array(Object.keys(hillsSvgs).length);

        Object.entries(backgroundSvgs).map(([layerName, layerSvg]: [string, any], index: number) => {
            const layerColor: string = palette[index + 1];
            const layerPromise: Promise<any> = fetch(layerSvg.src)
                .then((res: any) => res.text())
                .then((text: string) => {
                    const formattedSvg: string = text.replace('\n', '').replaceAll(/fill="#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g, `fill="${layerColor}`);
                    const backgroundUrl = `url('data:image/svg+xml;base64,${btoa(formattedSvg)}')`;
                    formattedHills[index] = backgroundUrl;
                });
            promises.push(layerPromise);
        });

        Promise.all(promises).then((values) => {
            if (hillsRef.current) {
                hillsRef.current.style.backgroundColor = `${palette[0]}`;
                hillsRef.current.style.backgroundImage = formattedHills.join(', ');
            }
        });
    }

    useEffect(() => {
        loadBackground(hillsSvgs, colorManager.getRandomColor());
        if (hillsRef.current) {
            setBackgroundPosX(getElementPosX(hillsRef.current));
            setBackgroundPosY(getElementPosY(hillsRef.current));

            const mouseMoveListener = hillsRef.current.addEventListener('mousemove', event => move(event.movementX, event.movementY));
        }


        return () => {
            if (hillsRef.current) {
                hillsRef.current.removeEventListener('mousemove', event => move(event.movementX, event.movementY));
            }
        }

    }, []);

    const style = {
        "backgroundPositionX": formatBackgroundPosArray(backgroundPosX),
        "backgroundPositionY": formatBackgroundPosArray(backgroundPosY)
    }

    return (
        <div style={hillsRef && style} ref={hillsRef} className="hills-background">
            {children}
        </div>
    )
}