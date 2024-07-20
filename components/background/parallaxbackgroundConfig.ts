import hills1 from '@/Images/hills/hills1.svg';
import hills2 from '@/Images/hills/hills2.svg';
import hills3 from '@/Images/hills/hills3.svg';
import lupin from '@/Images/hills/lupin.svg';
import cloudsFront from '@/Images/hills/cloudsFront.svg';
import hills4Top from '@/Images/hills/hills4Top.svg';
import hills4Bottom from '@/Images/hills/hills4Bottom.svg';
import cloudsBack from '@/Images/hills/cloudsBack.svg';

export type BackgroundConfigLayerData = {
    svg: any,
    backgroundUrl: string,
    backgroundPosX: number,
    backgroundPosY: number,
    layer: number
}

export type BackgroundConfig = {
    globalParallaxSettings: {
        speedXMultiplier: number,
        speedYMultiplier: number,
        yMargin: number,
        layerSpeedModFunction: (layer: number) => number
    },
    backgroundLayerData: BackgroundConfigLayerData[]
}

export const backgroundConfig: BackgroundConfig = {
    globalParallaxSettings: {
        speedXMultiplier: 1 / 10,
        speedYMultiplier: 1 / 25,
        yMargin: 100,
        layerSpeedModFunction: (layer: number) => 1 / layer
    },
    backgroundLayerData: [
        {
            svg: hills1,
            backgroundUrl: "",
            backgroundPosX: 0,
            backgroundPosY: 100,
            layer: 1
        },
        {
            svg: hills2,
            backgroundUrl: "",
            backgroundPosX: 0,
            backgroundPosY: 100,
            layer: 2
        },
        {
            svg: lupin,
            backgroundUrl: "",
            backgroundPosX: 0,
            backgroundPosY: 100,
            layer: 2
        },
        {
            svg: hills3,
            backgroundUrl: "",
            backgroundPosX: 0,
            backgroundPosY: 100,
            layer: 3
        },
        {
            svg: cloudsFront,
            backgroundUrl: "",
            backgroundPosX: 0,
            backgroundPosY: 100,
            layer: 3
        },
        {
            svg: hills4Top,
            backgroundUrl: "",
            backgroundPosX: 0,
            backgroundPosY: 100,
            layer: 4
        },
        {
            svg: hills4Bottom,
            backgroundUrl: "",
            backgroundPosX: 0,
            backgroundPosY: 100,
            layer: 4
        },
        {
            svg: cloudsBack,
            backgroundUrl: "",
            backgroundPosX: 0,
            backgroundPosY: 100,
            layer: 5
        },
    ]
}