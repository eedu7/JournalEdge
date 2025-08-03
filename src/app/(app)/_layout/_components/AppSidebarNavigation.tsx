"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarItems } from "@/app/(app)/_layout/constants";

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";

export const AppSidebarNavigation = () => {
    const pathName = usePathname();
    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    {sidebarItems.map((item, index) => (
                        <SidebarMenuItem key={index}>
                            <SidebarMenuButton
                                asChild
                                className={cn(pathName === item.href && item.activeColor, item.interactiveIconClass)}
                            >
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
    );
};
