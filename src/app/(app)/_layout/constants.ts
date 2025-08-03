import { CandlestickChartIcon, LayoutDashboardIcon, LucideIcon } from "lucide-react";

interface SidebarItem {
    label: string;
    href: string;
    icon: LucideIcon;
    activeColor: string;
    interactiveIconClass: string;
}

export const sidebarItems: SidebarItem[] = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboardIcon,
        activeColor: "text-blue-600",
        interactiveIconClass: "hover:text-blue-500 active:text-blue-600 focus:text-blue-600",
    },
    {
        label: "Trades",
        href: "/trades",
        icon: CandlestickChartIcon,
        activeColor: "text-green-600",
        interactiveIconClass: "hover:text-green-500 active:text-green-600 focus:text-green-600",
    },
];
