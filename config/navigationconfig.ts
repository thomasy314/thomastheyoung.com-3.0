
export type NavigationInfo = {
    name: string,
    href: string
}

export const sidebarRoutes: NavigationInfo[] = [
    {
        name: "art",
        href: "/"
    },
    {
        name: "models",
        href: "/models"
    },
    {
        name: "projects",
        href: "/projects"
    },
    {
        name: "about",
        href: "/about"
    },
]