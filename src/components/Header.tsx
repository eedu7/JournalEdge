"use client";

import React from "react";
import Link from "next/link";

import { UserButton, useUser } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const Header = () => {
    const { isSignedIn, user } = useUser();

    return (
        <header className="mx-auto flex w-full max-w-7xl items-center justify-between">
            <div>
                <Link href="/">
                    <h1 className="text-lg font-bold">JournelEdge</h1>
                </Link>
            </div>
            {!isSignedIn ? (
                <div className="space-x-2">
                    <Button
                        variant="link"
                        asChild
                    >
                        <Link href="/sign-in">Login</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/sign-up">Sign Up</Link>
                    </Button>
                </div>
            ) : (
                <UserButton />
            )}
        </header>
    );
};
