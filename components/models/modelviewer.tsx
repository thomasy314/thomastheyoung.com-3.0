"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { CameraControls, Html, PerspectiveCamera } from "@react-three/drei";
import React, { Suspense, useEffect, useState } from "react";
import modelData, { ModelData } from "@/config/modelsconfig";
import { IconPointFilled } from "@tabler/icons-react";

function Loader() {
  return <Html className="animate-bounce" center>Loading.</Html>
}

export default function ModelViewer() {
  const [curModel, setCurModel] = useState<ModelData>(modelData[0]);
  const [modelSelectScrollLoc, setModelSelectScrollLoc] = useState<string>("-3rem");


  const selectionList = modelData.map((info, i) => [
    <div key={i} onClick={() => setCurModel(info)} className="flex flex-row ml-2 md:ml-auto mr-auto md:mr-2 p-0.5 py-2 pr-2 cursor-pointer">
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

  const modelSelectStyle = {
    top: modelSelectScrollLoc
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
              <curModel.model rotation={[0, 0.7, 0]} />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <div className="flex flex-col absolute bottom-10 md:right-10 z-30 h-40 w-30 bg-white rounded-2xl">
        <div onScroll={event => event.target} className="flex flex-col justify-center items-right h-inherit w-inherit overflow-y-scroll pt-10">
          {selectionList}
        </div>
      </div>
    </div>
  );
}