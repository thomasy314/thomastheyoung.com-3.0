"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { CameraControls, Html, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import modelData, { ModelData } from "@/config/modelsconfig";
import { IconPointFilled } from "@tabler/icons-react";

function Loader() {
  return <Html className="animate-bounce" center>Loading.</Html>
}

/*
  TODO: Add more model options
*/

export default function ModelViewer() {
  const [curModel, setCurModel] = useState<ModelData>(modelData[2]);

  const selectionList = modelData.map((info, i) => [
    <div key={i} onClick={() => setCurModel(info)} className="flex flex-row list-none p-2 w-inherit gap-0 justify-center items-center cursor-pointer">
      <IconPointFilled color={info.bulletColor} />
      {info.name}
    </div>
  ]);

  const lights = curModel.lights?.map((lightProps, i) => {
    return <directionalLight key={i} {...lightProps} />
  })

  const Camera = () => {
    const camera = useThree(state => state.camera);

    useEffect(() => {
      camera.position.set(...curModel.startPosition)
    }, [camera.position])

    return <PerspectiveCamera makeDefault position={curModel.startPosition} />;
  }

  return (
    <div className='flex flex-col relative justify-center items-center h-screen overflow-hidden'>
      <div className="flex flex-col items-center" >
        <h2 className="font-display text-4xl md:text-6xl mt-20">{curModel.name}</h2>
        <h3>{curModel.subtitle}</h3>
      </div>
      <div className="flex flex-col md:flex-row w-full h-full justify-center items-center">

        <div className="absolute top-0 w-full h-full flex-wrap z-10">
          <Canvas>
            <Camera />
            <CameraControls />
            <ambientLight intensity={.5} />
            {lights}
            <pointLight position={[0, -20, 0]} intensity={20} decay={0.75} />
            <Suspense fallback={<Loader />}>
              <curModel.model />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <div className="absolute bottom-10 flex flex-col md:flex-row items-center justify-center w-1/2 opacity-0 z-20">
        {selectionList}
      </div>
      <div className="absolute bottom-10 flex flex-col md:flex-row items-center justify-center w-1/2 z-0">
        {selectionList}
      </div>
    </div>
  );
}