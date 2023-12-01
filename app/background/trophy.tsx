import { Vector2 } from "three";

export const Trophy = () => {
  const topPoints = [];
  const bottomPoints = [];
  for (let i = 0; i < 10; i++) {
    bottomPoints.push(new Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2));
    topPoints.push(new Vector2(Math.cos(i * 0.2) * 10 + 5, i));
  }
  return (
    <group>
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[10, 2, 10]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[0, 7, 0]}>
        <cylinderGeometry args={[2.5, 2, 10, 20, 20]} />
        <meshStandardMaterial color="#FFEF28" metalness={2} />
      </mesh>
      <mesh position={[0, 17, 0]} scale={[0.5, 0.5, 0.5]}>
        <latheGeometry args={[bottomPoints, 20]} />
        <meshStandardMaterial color="#FFEF28" metalness={2} />
      </mesh>
      <mesh position={[0, 21, 0]} scale={[0.5, 0.5, 0.5]}>
        <latheGeometry args={[topPoints, 20]} />
        <meshStandardMaterial color="#FFEF28" metalness={2} />
      </mesh>
      <mesh position={[0, 26, 0]}>
        <cylinderGeometry args={[0.5, 2, 2, 20, 20]} />
        <meshStandardMaterial color="#FFEF28" metalness={2} />
      </mesh>
      <mesh position={[0, 30.5, 0]} scale={[0.5, 0.5, 0.5]}>
        <ringGeometry args={[4, 8, 40, 20]} />
        <meshStandardMaterial color="#FFEF28" metalness={2} />
      </mesh>
      <mesh
        position={[0, 30.5, 0]}
        scale={[0.5, 0.5, 0.5]}
        rotation={[0, Math.PI, 0]}
      >
        <ringGeometry args={[4, 8, 40, 20]} />
        <meshStandardMaterial color="#FFEF28" metalness={2} />
      </mesh>
    </group>
  );
};
