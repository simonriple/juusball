"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Field } from "./field";
import { Lights } from "./lights";
import { Players } from "./players";
import { Trophy } from "./trophy";

export const Background = () => {
  const searchParams = useSearchParams();

  const rotate = searchParams.get("rotate");
  return (
    <Canvas shadows camera={{ position: [0, 40, 100] }}>
      <Lights />
      <Suspense fallback={null}>
        <Trophy />
        <Players />
        <Field />
      </Suspense>
      <OrbitControls target={[0, 20, 0]} autoRotate={Boolean(rotate)} />
    </Canvas>
  );
};
