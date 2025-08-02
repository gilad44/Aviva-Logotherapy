import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";

type Butterfly3DProps = {
  position: [number, number, number];
  isAnimating: boolean;
  targetPosition?: [number, number, number];
  rotation: [number, number, number];
};
const Butterfly3D = ({
  position,
  isAnimating,
  // targetPosition,

  rotation = [-Math.PI / 2, -Math.PI / 4, -Math.PI / 2],
}: Butterfly3DProps) => {
  const { scene, animations } = useGLTF(
    "public/3dModels/flappingButterfly.glb"
  );
  const scalingFactor = 1;
  const groupRef = useRef(null);
  const [flailTime, setFlailTime] = useState(0);

  const { actions, names } = useAnimations(animations, groupRef);
  useEffect(() => {
    if (isAnimating && actions && names.length > 0) {
      setFlailTime(0);
      names.forEach((name) => {
        actions[name].timeScale = 2.5;
        actions[name]?.play();
      });
    } else if (actions && names.length > 0) {
      names.forEach((name) => {
        actions[name]?.stop();
      });
    }
  }, [isAnimating, actions, names]);

  useFrame((_, delta) => {
    if (isAnimating && groupRef.current) {
      setFlailTime((t) => t + delta);
      if (Math.floor(flailTime * 10) !== Math.floor((flailTime - delta) * 10))
        // groupRef.current.rotation.x = rotation[0] + Math.sin(flailTime - 10);
        groupRef.current.position.y =
          position[1] + 2 + Math.sin(flailTime * 20);
      groupRef.current.position.z = position[2] + Math.sin(flailTime * 2) * 2;
      groupRef.current.rotation.z =
        rotation[2] + Math.sin(flailTime * -Math.PI);
    } else if (groupRef.current) {
      // Reset to base position when not animating
      groupRef.current.rotation.x = rotation[0];
      groupRef.current.position.y = position[1];
      groupRef.current.position.z = position[2];
    }
  });
  return (
    <>
      <group
        scale={scalingFactor}
        ref={groupRef}
        rotation={rotation}
        position={position}
      >
        <primitive object={scene} scale={[4, 4, 4]} />
        <ambientLight intensity={2} />
      </group>
    </>
  );
};

export default Butterfly3D;
