import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from "../Loader";

const Ball = (props) => {
  // texture variable
  const [decal] = useTexture([props.icon]);
  return (
    <>
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0,0,0,0.5]}/>
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1,1]}></icosahedronGeometry>
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading  />
            <Decal
              map={decal}
              position={[0,0,1]}
              rotation={[2*Math.PI,0,6.25]}
            />
        </mesh>
      </Float>
    </>
  )
}
const BallCanvas = (props) => {
  return (
    <>
      <Canvas
        frameloop="demand"
        gl={{
          preserveDrawingBuffer: true
        }}
      >

        {/* controls */}
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
          />
        </Suspense>
        <Ball icon={props.icon} />
        <Preload all />
      </Canvas>
    </>
  )
}

export default BallCanvas;