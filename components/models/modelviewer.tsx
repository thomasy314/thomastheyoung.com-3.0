"use client";

import { Canvas } from "@react-three/fiber";
import { CameraControls, Html } from "@react-three/drei";
import { Suspense } from "react";
import { Pleurotus } from "./pleurotusdjamor";

function Loader() {
  return <Html className="animate-bounce" center>loaded.</Html>
}

/*
  TODO: 
    1. Add the ability to dynamicly set what model is being viewed
    2. Add more model options
*/
export default function ModelViewer() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h2>Pleurotus djamor</h2>
      <div className="block border border-black w-3/4 h-3/4">
        <Canvas camera={{ position: [-20, 0, 0] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[-5, 3, -5]} />
          <directionalLight position={[-5, 3, 5]} />
          <directionalLight position={[5, -3, -5]} intensity={0.5} />
          <directionalLight position={[5, -3, 5]} intensity={0.5} />
          <CameraControls />
          <Suspense fallback={<Loader />}>
            <Pleurotus />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

