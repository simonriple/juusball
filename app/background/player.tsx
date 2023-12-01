import { Vector3 } from "@react-three/fiber";

export const Player = ({
  position,
  team,
}: {
  position: Vector3;
  team: "white" | "black";
}) => {
  return (
    <group position={position ?? [-10, 10, 0]}>
      <mesh position={[0, 3, 0]} castShadow>
        <sphereGeometry args={[1.75, 20, 20]} />
        <meshStandardMaterial color={team} />
      </mesh>
      <mesh position={[0, -1, 0]} castShadow>
        <capsuleGeometry args={[1.8, 4, 20, 20]} />
        <meshStandardMaterial color={team} />
      </mesh>
      <mesh position={[0, -6, 0]} castShadow>
        <cylinderGeometry args={[1.5, 1, 4, 20, 1]} />
        <meshStandardMaterial color={team} />
      </mesh>
      <mesh
        position={[0, -8.8, 0]}
        rotation={[0, Math.PI * 0.25, 0]}
        castShadow
      >
        <cylinderGeometry args={[2, 1.8, 2, 4, 4]} />
        <meshStandardMaterial color={team} />
      </mesh>
    </group>
  );
};
