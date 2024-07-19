import { WaveText } from "@/components/animation/textanimation";
import HillsBackground from "@/components/background/hillsbackground";

export default function Home() {
  return (
    <>
      <HillsBackground>
        <div className="flex justify-center items-center w-full h-full">
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            Thomas Young
          </h1>
        </div>
      </HillsBackground>
    </>
  );
}
