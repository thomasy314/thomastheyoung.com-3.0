import { AmanitaMuscaria } from "@/components/models/amanitamuscaria"
import { MorchellaEsculenta } from "@/components/models/morchellaesculenta"
import { PleurotusDjamor } from "@/components/models/pleurotusdjamor"
import { DirectionalLightProps } from "@react-three/fiber"
import { ReactNode } from "react"

export type ModelData = {
    commonName: string,
    genus: string,
    species: string,
    model: (props: JSX.IntrinsicElements['group']) => ReactNode,
    startPosition: [number, number, number],
    color: string,
    lights: DirectionalLightProps[]
}

const modelData: ModelData[] = [
    {
        commonName: "Pink Oyster Mushroom",
        genus: "Pleurotus",
        species: "djamor",
        model: PleurotusDjamor,
        startPosition: [0, 0, 30],
        color: "#f88379",
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
        commonName: "Yellow Morel",
        genus: "Morchella",
        species: "esculenta",
        model: MorchellaEsculenta,
        startPosition: [0, 0, 100],
        color: "#ba9561",
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
        commonName: "Fly Agaric",
        genus: "Amanita",
        species: "muscaria",
        model: AmanitaMuscaria,
        startPosition: [0, 0, 30],
        color: "#E93123",
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
    }
]

export default modelData;