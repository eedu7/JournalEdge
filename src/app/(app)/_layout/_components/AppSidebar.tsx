import React from "react";
import Link from "next/link";

import { sidebarItems } from "@/app/(app)/_layout/constants";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { AppSidebarHeader } from "@/app/(app)/_layout/_components/AppSidebarHeader";

export default function AppSidebar() {
    return (
        <Sidebar
            variant="sidebar"
            collapsible="icon"
        >
            <AppSidebarHeader />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sidebarItems.map((item, index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton asChild>
                                        <Link
                                            href={item.href}
                                            prefetch={false}
                                        >
                                            <item.icon />
                                            <span>{item.label}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
