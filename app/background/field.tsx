export const Field = () => {
  return (
    <group>
      <mesh rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow>
        <planeGeometry args={[200, 100, 1, 1]} />
        <meshStandardMaterial color="#707070" />
      </mesh>
      <mesh position={[0, 5.5, 50]}>
        <boxGeometry args={[200, 11, 1]} />
        <meshStandardMaterial color="#707070" />
      </mesh>
      <mesh position={[0, 5.5, -50]}>
        <boxGeometry args={[200, 11, 1]} />
        <meshStandardMaterial color="#707070" />
      </mesh>
      <mesh position={[-99.5, 5.5, 0]}>
        <boxGeometry args={[1, 11, 100]} />
        <meshStandardMaterial color="#707070" />
      </mesh>
      <mesh position={[99.5, 5.5, 0]}>
        <boxGeometry args={[1, 11, 100]} />
        <meshStandardMaterial color="#707070" />
      </mesh>
    </group>
  );
};
