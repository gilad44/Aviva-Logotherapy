import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type Butterfly3DProps = {
  position: [number, number, number];
  isAnimating: boolean;
  targetPosition?: [number, number, number];
};

const Butterfly3D = ({
  position,
  isAnimating,
  targetPosition,
}: Butterfly3DProps) => {
  const meshRef = useRef<THREE.Group>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const [modelLoaded, setModelLoaded] = useState(false);

  // Try to load the model with error handling
  let gltf: any;
  try {
    gltf = useGLTF("/3dModels/flappinf butterfly.glb");
    if (!modelLoaded) setModelLoaded(true);
  } catch (error) {
    console.warn("3D model failed to load, using fallback");
  }

  // Animation state
  const animationRef = useRef({
    time: 0,
    hoverAmplitude: 0.03,
    rotationSpeed: 0.02,
    flightSpeed: 3,
  });

  // Set up animation mixer for built-in animations
  useEffect(() => {
    if (gltf && gltf.animations && gltf.animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(gltf.scene);

      // Play all animations
      gltf.animations.forEach((clip: THREE.AnimationClip) => {
        if (mixerRef.current) {
          const action = mixerRef.current.clipAction(clip);
          action.play();
        }
      });
    }
  }, [gltf]);

  useFrame((_state, delta) => {
    if (!meshRef.current) return;

    const anim = animationRef.current;
    anim.time += delta;

    // Update animation mixer
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }

    // Gentle hovering animation
    meshRef.current.position.y =
      position[1] + Math.sin(anim.time * 1.5) * anim.hoverAmplitude;

    // Slow rotation for natural movement
    // meshRef.current.rotation.y += anim.rotationSpeed * delta;

    // Flying animation when transitioning
    if (isAnimating && targetPosition) {
      const currentPos = meshRef.current.position;
      const target = new THREE.Vector3(...targetPosition);
      const direction = target.clone().sub(currentPos);

      if (direction.length() > 0.01) {
        direction.normalize();
        const speed = anim.flightSpeed * delta;
        currentPos.add(direction.multiplyScalar(speed));

        // Rotate towards target with smooth interpolation
        const angle = Math.atan2(direction.x, direction.z);
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
          meshRef.current.rotation.y,
          angle,
          delta * 4
        );

        // Add some vertical movement during flight
        meshRef.current.position.y += Math.sin(anim.time * 8) * 0.01;
      }
    }
  });

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.position.set(...position);
    }
  }, [position]);

  // Fallback if model doesn't load
  if (!gltf || !modelLoaded) {
    return (
      <group ref={meshRef}>
        <mesh>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
      </group>
    );
  }

  return (
    <>
     
      <group ref={meshRef}>
        <primitive object={gltf.scene} scale={[0.4, 0.4, 0.4]} />
      </group>
    </>
  );
};

// Preload the model
try {
  useGLTF.preload("/3dModels/flappinf butterfly.glb");
} catch {
  console.warn("Failed to preload 3D model");
}

export default Butterfly3D;
