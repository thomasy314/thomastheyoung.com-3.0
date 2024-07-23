import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconMushroom } from "@tabler/icons-react";

type SocialMediaIconsProps = {
    size?: number,
    className?: string
}

export default function SocialMediaIcons({size, className}: SocialMediaIconsProps) {
    return (
        <div className={`flex flex-row justify-center gap-x-2 w-full ${className}`}>
            <a href="https://www.linkedin.com/in/thomasy314/" target="_blank">
                <IconBrandLinkedin aria-label="Thomas Young Linkedin" size={size} />
            </a>
            <a href="https://github.com/thomasy314" target="_blank">
                <IconBrandGithub aria-label="Thomas Young Github" size={size} />
            </a>
            <a href="https://www.instagram.com/clustermush/" target="_blank">
                <IconBrandInstagram aria-label="Cluster Mush Instagram" size={size} />
            </a>
            <a href="https://www.clustermush.com/" target="_blank">
                <IconMushroom aria-label="Cluster Mush Icon" size={size} />
            </a>
        </div>
    )
}