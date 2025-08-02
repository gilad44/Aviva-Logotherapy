import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Butterfly3D from "./Butterfly3D";

type ButterflySceneProps = {
  position: [number, number, number];
  isAnimating: boolean;
  rotation: [number, number, number];
  canvasTop?: string;
  canvasLeft?: string;
};

const ButterflyScene = ({
  position,
  isAnimating,
  rotation,
  canvasTop = "-2.1rem",
  canvasLeft = "-14rem",
}: ButterflySceneProps) => {
  return (
    <div
      className="butterfly-indicator"
      style={{
        width: "100%",
        height: "200%",
        position: "absolute",
        top: canvasTop,
        left: canvasLeft,
        pointerEvents: "none",
        // zIndex: 1,
        padding: 0,
      }}
    >
      <Canvas
        // orthographic
        camera={{ position: [0, 0, 8] }}
        style={{
          // marginTop: "2.5rem",
          // marginLeft: "-5.5rem",
          // position: "relative",
          // zIndex: -1,
          height: "100%",
          width: "100%",
          // backgroundColor: "red",
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <pointLight position={[-5, -5, -5]} intensity={0.4} />
        {/* <axesHelper position={[0, 0, 0]} args={[6]} /> */}
        {/* <mesh>
          <boxGeometry args={[9, 9, 9]} />
          <meshStandardMaterial color="orange" />
        </mesh> */}
        <Butterfly3D
          position={position}
          rotation={rotation}
          isAnimating={isAnimating}
          // targetPosition={targetPosition}
        />

        <Environment preset="sunset" />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ButterflyScene;
