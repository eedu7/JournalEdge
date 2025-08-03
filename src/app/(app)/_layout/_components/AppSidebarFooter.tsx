"use client";

import React from "react";

import { useClerk } from "@clerk/nextjs";
import { ChevronUp, User2 } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";

export const AppSidebarFooter = () => {
    const { openUserProfile, user, signOut } = useClerk();
    const { state } = useSidebar();
    return (
        <SidebarFooter className="m-0 p-0">
            <SidebarGroup className="m-0 p-0">
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <SidebarMenuButton className={cn(state === "expanded" ? "p-2" : "p-0")}>
                                        <User2 /> {user?.fullName}
                                        <ChevronUp className="ml-auto" />
                                    </SidebarMenuButton>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    side="top"
                                    // className="w-52"
                                    className="w-[--radix-popper-anchor-width]"
                                >
                                    <DropdownMenuItem
                                        onClick={() => openUserProfile()}
                                        className="cursor-pointer"
                                    >
                                        <span>Profile</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => signOut()}
                                        className="cursor-pointer"
                                    >
                                        <span>Sign out</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarFooter>
    );
};
