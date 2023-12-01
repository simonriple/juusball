import { Vector3, useFrame } from "@react-three/fiber";
import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { Group, Object3DEventMap } from "three";
import { Player } from "./player";

export const PlayerLine = ({
  position,
  players,
  team,
}: {
  position: Vector3;
  players: number;
  team: "white" | "black";
}) => {
  const searchParams = useSearchParams();

  const rotate = searchParams.get("rotate");
  const [spinning, setSpinning] = useState(false);
  const [acceleration, setAcceleration] = useState(
    rotate ? Math.random() * 0.1 : 0
  );
  const ref = useRef<Group<Object3DEventMap>>(null);

  useFrame((t) => {
    if (acceleration > 0) {
      if (team === "white") {
        ref.current?.rotateZ(acceleration);
      } else {
        ref.current?.rotateZ(acceleration * -1);
      }
      if (spinning) {
        setAcceleration((a) => a + t.clock.getDelta());
      } else if (!rotate) {
        setAcceleration((a) => a - t.clock.getDelta());
      }
    }
  });

  const playersPositions = Array.from(
    { length: Math.ceil(players / 2) - 1 },
    (_, i) => (i + 1) * 20
  );

  return (
    <group
      onPointerLeave={() => setSpinning(false)}
      onPointerEnter={() => {
        setSpinning(true);
        setAcceleration((v) => v + 0.001);
      }}
    >
      <mesh
        position={position ?? [-10, 10, 0]}
        rotation={[-Math.PI * 0.5, 0, 0]}
        castShadow
      >
        <cylinderGeometry args={[1, 1, 100, 20, 20]} />
        <meshStandardMaterial color="grey" metalness={2} />
      </mesh>

      <group ref={ref} position={position ?? [-10, 10, 0]}>
        <Player position={[0, 0, 0]} team={team} />
        {playersPositions.map((playerPosition) => (
          <>
            <Player
              key={playerPosition}
              position={[0, 0, playerPosition]}
              team={team}
            />
            <Player
              key={-playerPosition}
              position={[0, 0, -playerPosition]}
              team={team}
            />
          </>
        ))}
      </group>
    </group>
  );
};
