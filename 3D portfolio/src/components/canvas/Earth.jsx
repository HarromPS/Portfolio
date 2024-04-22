import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  // GLTF (GL Transmission Format) stores 3D model info
  const earth = useGLTF('../../public/planet/scene.gltf');
  return (
    <>
      <primitive
        object={earth.scene}
        scale={2.3}
        position-y={0}
        rotation-y={0}    // rotate only to x axis
        receiveShadow
      />
    </>
  )
}
const EarthCanvas = () => {
  return (
    <>
      <Canvas
        frameloop="demand"
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 5]
        }}
        gl={{
          preserveDrawingBuffer: true
        }}
      >

        {/* controls */}
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate={true}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  )
}

export default EarthCanvas;