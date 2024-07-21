'use client'

import Link from "next/link";
import './sidenav.css';
import { MenuIcon, XIcon } from "lucide-react";
import { NavigationInfo } from "@/config/navigationconfig";

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
        <nav className={`side-nav fixed md:static ${className}`} aria-label="Sidebar">
            <input type="checkbox" id="sidebar-active" className="hidden" />
            <label htmlFor="sidebar-active" className="open-sidebar-button block md:hidden p-2">
                <MenuIcon />
            </label>


            <div className="sidebar-container">
                <label htmlFor="sidebar-active" className="close-sidebar-button block md:hidden p-2">
                    <XIcon />
                </label>
                <div className="links-container">
                    {sideNavItems}
                </div>
            </div>
        </nav>
    )
}


export default SideNav;