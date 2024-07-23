import { BouncyBoiText } from "@/components/animation/textanimation";
import LayeredBackground from "@/components/background/layeredbackground";
import SocialMediaIcons from "@/components/ui/socialmediaicons";

export default function Home() {
  return (
    <LayeredBackground>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
          <BouncyBoiText text="Thomas Young" />
        </h1>
        <SocialMediaIcons size={28} />
      </div>
    </LayeredBackground>
  );
}
