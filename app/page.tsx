import ParallaxBackground from "@/components/background/parallaxbackground";
import SocialMediaIcons from "@/components/ui/socialmediaicons";

export default function Home() {
  return (
    <ParallaxBackground>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
          Thomas Young
        </h1>
        <SocialMediaIcons size={28} />
      </div>
    </ParallaxBackground>
  );
}
