import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

type SocialMediaIconsProps = {
    size?: number,
    className?: string
}

export default function SocialMediaIcons({size, className}: SocialMediaIconsProps) {
    return (
        <div className={`flex flex-row justify-center gap-x-2 w-full ${className}`}>
            <a href="https://www.linkedin.com/in/thomasy314/" target="_blank">
                <IconBrandLinkedin size={size} />
            </a>
            <a href="https://www.instagram.com/clustermush/" target="_blank">
                <IconBrandInstagram size={size} />
            </a>
            <a href="https://github.com/thomasy314" target="_blank">
                <IconBrandGithub size={size} />
            </a>
        </div>
    )
}