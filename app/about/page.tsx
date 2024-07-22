import ParallaxBackground from "@/components/background/parallaxbackground";
import SocialMediaIcons from "@/components/ui/socialmediaicons";


export default function AboutMe() {
    return (
        <ParallaxBackground disable>
            <div className="flex flex-col justify-top items-center w-full h-full bg-white/50 backdrop-blur-md py-20">
                <h1 className="font-display text-9xl">Hello!</h1>
                <div className="w-3/4 xl:w-1/2 text-justify pt-5">
                    <p>
                        My name is Thomas Young, a software engineer, amateur mycologist, and artist living in Oakland, CA. Throughout my life, I've spent as much time as possible diving into anything and everything that piques my curiosity.
                    </p>
                    <br />
                    <p>
                        My latest adventure is Cluster Mush, a business where I create fungal artwork and pair it with educational material on my website. Each piece is accompanied by a page where the new owner can read about the cultural significance and historical context, along with insights from scientific journals on their new mushroom piece. This has been a wild ride, especially since I had no prior experience with running a business, 3D modeling complex organic shapes, and had only started learning about fungi a year before starting the business.
                    </p>
                    <br />
                    <p>
                        Before Cluster Mush, I worked on the AWS GameSparks service, providing backend infrastructure for game developers so they could focus more on the creative aspects of game development. I helped create the GameSparks Unity game engine plugin, developed a demo game to showcase the service to potential customers, perspective hires, and on Twitch live streams, and led the implementation of the billing and customer metering pipeline, which processed billable user events for AWS billing.
                    </p>
                    <br />
                    <p>
                        Now that Cluster Mush is up and running smoothly, I'm looking to re-enter the world of software development. I'm excited to bring the solid technical foundation I built at AWS and the strong research and self-taught skills I've gained from running Cluster Mush into new and exciting projects.
                    </p>
                    <SocialMediaIcons size={28} className="pt-10" />
                </div>
            </div>
        </ParallaxBackground>
    )
}