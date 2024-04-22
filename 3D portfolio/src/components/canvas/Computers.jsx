import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from "../Loader";

const Computers = (isMobile) => {
  // GLTF (GL Transmission Format) stores 3D model info
  const computer = useGLTF('../../public/desktop_pc/scene.gltf');
  return (
    <>
      {/* the model here */}
      <mesh>
        <hemisphereLight intensity={3} groundColor="black" />
        <pointLight intensity={3} />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          intensity={1}
          penumbra={1}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive
          object={computer.scene}
          scale={isMobile.isMobile ? 0.38 : 0.72}
          position={isMobile.isMobile ? [0, -2, -1] : [0, -3.25, -1.5]}
          // scale={0.72}
          // position={[0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
          receiveShadow
        />
      </mesh>
    </>
  )
}

const ComputerCanvas = () => {

  // checking if the site is opened in mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // get the mediaQuery matches a particular width
    const mediaQuery = window.matchMedia("(max-width:500px)");

    // set initial value of isMobile variable
    setIsMobile(mediaQuery.matches);

    // define call function to handle changes to media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    // add a event listener that changes screen size
    mediaQuery.addEventListener('change',
      handleMediaQueryChange);

      // remove listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);

  return (
    <>
      {/* canvas */}
      <Canvas
        frameloop="demand"
        shadows
        camera={{
          position: [20, 3, 5],
          fov:25
        }}
        gl={{
          preserveDrawingBuffer: true
        }}
      >

        {/* controls */}
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  )
}
export default ComputerCanvas;

