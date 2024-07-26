import { AmanitaMuscaria } from "@/components/models/amanitamuscaria"
import { FlammulinaFiliformis } from "@/components/models/flammulinafiliformis"
import { GameboyKeycap } from "@/components/models/gameboykeycap"
import { MorchellaEsculenta } from "@/components/models/morchellaesculenta"
import { PleurotusDjamor } from "@/components/models/pleurotusdjamor"
import { DirectionalLightProps } from "@react-three/fiber"
import { ReactNode } from "react"

export type ModelData = {
    name: string,
    subtitle: string,
    model: (props: JSX.IntrinsicElements['group']) => ReactNode,
    startPosition: [number, number, number],
    bulletColor: string,
    lights: DirectionalLightProps[]
}

const modelData: ModelData[] = [
    {
        name: "Pink Oyster Mushroom",
        subtitle: "Pleurotus djamor",
        model: PleurotusDjamor,
        startPosition: [0, 0, 40],
        bulletColor: "#f88379",
        lights: [
            {
                position: [5, 3, 5]
            },
            {
                position: [-8, 3, 3],
                intensity: 0.25
            },
            {
                position: [-8, 3, -5],
                intensity: 0.5
            }
        ]
    }, {
        name: "Yellow Morel",
        subtitle: "Morchella esculenta",
        model: MorchellaEsculenta,
        startPosition: [0, 0, 100],
        bulletColor: "#ba9561",
        lights: [
            {
                position: [5, 3, 5]
            },
            {
                position: [-8, 3, 3],
                intensity: 0.25
            },
            {
                position: [-8, 3, -5],
                intensity: 0.5
            }
        ]
    },
    {
        name: "Fly Agaric",
        subtitle: "Amanita muscaria",
        model: AmanitaMuscaria,
        startPosition: [0, 0, 50],
        bulletColor: "#E93123",
        lights: [
            {
                position: [5, 10, 5] // front right top
            },
            {
                position: [-5, 10, 5] // front left top
            },
            {
                position: [5, 0, -5] // back right top
            },
            {
                position: [-5, 0, -5] // back left top
            },
        ]
    },
    {
        name: "Enoki",
        subtitle: "Flamulina filiformis",
        model: FlammulinaFiliformis,
        startPosition: [0, 0, 6],
        bulletColor: "#FFFFFF",
        lights: [
            {
                position: [5, 7, 5], // front right top
            },
            {
                position: [-5, 7, 5], // front left top
            },
            {
                position: [5, 0, -5] // back right top
            },
            {
                position: [-5, 0, -5] // back left top
            },
        ]
    },
    {
        name: "Gameboy Keycap",
        subtitle: "",
        model: GameboyKeycap,
        startPosition: [0, 0, 50],
        bulletColor: "#EFBE00",
        lights: [
            {
                position: [5, 3, 5]
            },
            {
                position: [-8, 3, 3],
                intensity: 0.25
            },
            {
                position: [-8, 3, -5],
                intensity: 0.5
            }
        ]
    },

]

modelData.sort((a, b) => a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase()));

export default modelData;