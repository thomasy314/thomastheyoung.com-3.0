import { BouncyBoiText } from "@/components/animation/textanimation";
import ParallaxBackground from "@/components/background/parallaxbackground";
import SocialMediaIcons from "@/components/ui/socialmediaicons";

export default function Home() {
  return (
    <ParallaxBackground disable>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
          <BouncyBoiText text="Thomas Young" />
        </h1>
        <SocialMediaIcons size={28} />
      </div>
    </ParallaxBackground>
  );
}
