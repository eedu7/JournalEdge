import React from "react";

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export const AppSidebarAssets = () => {
    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton disabled>Assets</SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuSub>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton href="/symbols">Symbols</SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                    </SidebarMenuSub>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
};
