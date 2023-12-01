import { Background } from "./background/background";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex flex-col place-items-center">
        <h1 className="text-6xl font-black ">JUUSBALL</h1>
        <h2 className="text-9xl font-black">2023</h2>
        <p className="text-3xl font-bold">The winner takes it all</p>
      </div>
      <div className="top-0 left-0 absolute w-full h-full -z-1">
        <Background />
      </div>
    </main>
  );
}
