"use client";

import React from "react";

import { PanelLeftIcon } from "lucide-react";

import { SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";

export const AppSidebarHeader = () => {
    const { toggleSidebar } = useSidebar();

    return (
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton
                        onClick={toggleSidebar}
                        className="cursor-pointer"
                    >
                        <PanelLeftIcon />
                        <span>JournaleEdge</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
    );
};
