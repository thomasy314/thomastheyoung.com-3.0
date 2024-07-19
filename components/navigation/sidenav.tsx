import Link from "next/link";

type SideNavProps = {
    className?: string
    sideNavItemInfo: SideNavItemProps[]
}

// TODO: There is probably a better place for this
export type SideNavItemProps = {
    name: string,
    href: string
}

const SideNav = ({ sideNavItemInfo, className }: SideNavProps) => {

    const sideNavItems = sideNavItemInfo.map((item, i) => {
        return (
            <Link href={item.href} key={i} className="text-foreground p-2 rounded-lg dark:text-foreground hover:underline group">
                {item.name}
            </Link>
        )
    });

    return (
        <aside className={`top-0 left-0 z-40 h-screen transition-transform -translate-x-full bg-sidebar sm:translate-x-0 dark:bg-sidebar ${className}`} aria-label="Sidebar">
            <div className="flex flex-col justify-center items-center h-full overflow-y-auto bg-sidebar dark:bg-sidebar">
                {sideNavItems}
            </div>
        </aside>
    )
}


export default SideNav;