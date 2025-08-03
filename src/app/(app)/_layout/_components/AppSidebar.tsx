import React from "react";

import { Sidebar, SidebarContent, SidebarFooter } from "@/components/ui/sidebar";
import { AppSidebarFooter } from "@/app/(app)/_layout/_components/AppSidebarFooter";
import { AppSidebarHeader } from "@/app/(app)/_layout/_components/AppSidebarHeader";
import { AppSidebarNavigation } from "@/app/(app)/_layout/_components/AppSidebarNavigation";

export default function AppSidebar() {
    return (
        <Sidebar
            variant="sidebar"
            collapsible="icon"
        >
            <AppSidebarHeader />
            <SidebarContent>
                <AppSidebarNavigation />
            </SidebarContent>
            <SidebarFooter>
                <AppSidebarFooter />
            </SidebarFooter>
        </Sidebar>
    );
}
