import { PlayerLine } from "./player-line";

export const Players = () => {
  return (
    <>
      <PlayerLine position={[45, 10, 0]} players={5} team="white" />
      <PlayerLine position={[-20, 10, 0]} players={5} team="white" />
      <PlayerLine position={[-70, 10, 0]} players={3} team="white" />
      <PlayerLine position={[-90, 10, 0]} players={1} team="white" />

      <PlayerLine position={[-45, 10, 0]} players={5} team="black" />
      <PlayerLine position={[20, 10, 0]} players={5} team="black" />
      <PlayerLine position={[70, 10, 0]} players={3} team="black" />
      <PlayerLine position={[90, 10, 0]} players={1} team="black" />
    </>
  );
};
