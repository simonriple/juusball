import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { PointLight } from "three";

export const Lights = () => {
  const ref = useRef<PointLight>(null);
  useFrame((t) => {
    ref.current?.position.set(
      Math.sin(t.clock.elapsedTime) * 20,
      35,
      Math.cos(t.clock.elapsedTime) * 20
    );
  });
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight
        castShadow
        intensity={1000}
        position={[0, 40, 0]}
        angle={Math.PI * 0.4}
        color="white"
      />
      <spotLight
        castShadow
        intensity={1000}
        position={[0, 0, 20]}
        angle={Math.PI * 0.4}
        color="white"
      />
      <pointLight
        ref={ref}
        intensity={1000}
        color="yellow"
        position={[0, 35, 0]}
        castShadow
      />
    </>
  );
};
