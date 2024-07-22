'use client'

import Link from "next/link";
import './sidenav.css';
import { NavigationInfo } from "@/config/navigationconfig";
import { IconMenu2, IconX } from "@tabler/icons-react";
import SocialMediaIcons from "../ui/socialmediaicons";

type SideNavProps = {
    className?: string
    sideNavItemInfo: NavigationInfo[]
}

const uncheckSideBar = () => {
    const sideBarCheckbox = document.getElementById('sidebar-active') as HTMLInputElement;
    if (sideBarCheckbox) {
        sideBarCheckbox.checked = false;
    }
}

const SideNav = ({ sideNavItemInfo, className }: SideNavProps) => {

    const sideNavItems = sideNavItemInfo.map((item, i) => {
        return (
            <Link href={item.href} onClick={uncheckSideBar} key={i} className="text-foreground text-lg p-5 rounded-lg dark:text-foreground hover:underline group">
                {item.name}
            </Link>
        )
    });

    return (
        <>
            <nav className={`side-nav fixed md:static ${className}`} aria-label="Sidebar">
                <input type="checkbox" id="sidebar-active" className="hidden" />
                <label htmlFor="sidebar-active" className="open-sidebar-button block md:hidden p-2">
                    <IconMenu2 className="cursor-pointer" />
                </label>


                <div className="sidebar-container">
                    <label htmlFor="sidebar-active" className="close-sidebar-button block md:hidden p-2">
                        <IconX className="cursor-pointer" />
                    </label>
                    <div className="links-container h-5/6">
                        {sideNavItems}
                    </div>
                    <SocialMediaIcons />
                </div>
            </nav>
        </>
    )
}


export default SideNav;