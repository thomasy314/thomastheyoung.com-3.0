"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { CameraControls, Html, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import modelData, { ModelData } from "@/config/modelsconfig";
import { IconPointFilled } from "@tabler/icons-react";

function Loader() {
  return <Html className="animate-bounce" center>loaded.</Html>
}

/*
  TODO: Add more model options
*/

export default function ModelViewer() {
  const [curModel, setCurModel] = useState<ModelData>(modelData[0]);

  const selectionList = modelData.map((info, i) => [
    <li key={i} onClick={() => setCurModel(info)} className="list-none p-2 cursor-pointer">
      <IconPointFilled color={info.color} />
      {info.commonName}
    </li>
  ])

  const Camera = () => {
    const camera = useThree(state => state.camera);

    useEffect(() => {
      camera.position.set(...curModel.startPosition)
    }, [camera.position])

    return <PerspectiveCamera makeDefault position={curModel.startPosition} />;
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen py-20'>
      <h2>{curModel.commonName}</h2>
      <h3>{`${curModel.genus} ${curModel.species}`}</h3>
      <div className="flex flex-col md:flex-row w-full h-full justify-center items-center">

        <div className="block border border-black w-full md:w-3/4 h-full flex-wrap">
          <Canvas>
            <Camera />
            <CameraControls />
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 0, 0]} />
            <directionalLight position={[-5, 3, 5]} />
            <directionalLight position={[5, -3, -5]} intensity={0.5} />
            <directionalLight position={[5, -3, 5]} intensity={0.5} />
            <Suspense fallback={<Loader />}>
              <curModel.model />
            </Suspense>
          </Canvas>
        </div>
        <ul className="w-full md:w-1/12">
          {selectionList}
        </ul>
      </div>
    </div>
  );
}