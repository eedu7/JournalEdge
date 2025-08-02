import React from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/app/(app)/_layout/_components/AppSidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>{children}</main>
        </SidebarProvider>
    );
}
