import { CandlestickChartIcon, LayoutDashboardIcon, LucideIcon } from "lucide-react";

interface SidebarItem {
    label: string;
    href: string;
    icon: LucideIcon;
}

export const sidebarItems = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboardIcon,
    },
    {
        label: "Trades",
        href: "/trades",
        icon: CandlestickChartIcon,
    },
];
