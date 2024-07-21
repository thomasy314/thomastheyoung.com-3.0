import { AmanitaMuscaria } from "@/components/models/amanitamuscaria"
import { MorchellaEsculenta } from "@/components/models/morchellaesculenta"
import { PleurotusDjamor } from "@/components/models/pleurotusdjamor"
import { ReactNode } from "react"

export type ModelData = {
    commonName: string,
    genus: string,
    species: string,
    model: (props: JSX.IntrinsicElements['group']) => ReactNode,
    startPosition: [number, number, number],
    color: string
}

const modelData: ModelData[] = [
    {
        commonName: "Pink Oyster Mushroom",
        genus: "Pleurotus",
        species: "djamor",
        model: PleurotusDjamor,
        startPosition: [0, 0, 30],
        color: "#f88379"
    }, {
        commonName: "Yellow Morel",
        genus: "Morchella",
        species: "esculenta",
        model: MorchellaEsculenta,
        startPosition: [0, 0, 100],
        color: "#ba9561"
    },
    {
        commonName: "Fly Agaric",
        genus: "Amanita",
        species: "muscaria",
        model: AmanitaMuscaria,
        startPosition: [0, 0, 30],
        color: "#E93123"
    }

]

export default modelData;