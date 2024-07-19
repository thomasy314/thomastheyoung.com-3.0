import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react";
import { SideNavItemProps } from "./sidenav";
import Link from "next/link";

type MobileSideBarProps = {
    sideNavItemInfo: SideNavItemProps[],
    className?: string
}

    /*
        TODO: 
            1. duplicate code that needs to be pulled out
            2. maybe try to reuse the sidenav component
    */
const MobileSideBar = ({ className, sideNavItemInfo }: MobileSideBarProps) => {

    const sideNavItems = sideNavItemInfo.map((item, i) => {
        return (
            <Link href={item.href} key={i} className="text-foreground p-2 rounded-lg dark:text-foreground hover:underline group">
                {item.name}
            </Link>
        )
    });

    return (
        <div className={`${className} fixed bg-sidebar my-2 items-center bg-white/0 right-0`}>
            <Sheet>
                <SheetTrigger className={`flex w-full bg-sidebar bg-white/0 justify-center`}>
                    <MenuIcon size={30} />
                </SheetTrigger>
                <SheetContent side="right" className="flex w-screen !max-w-none justify-center align-center test">
                    <SheetHeader className="flex justify-center">
                        <SheetDescription className="flex items-center flex-col">
                            {sideNavItems}
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileSideBar;
