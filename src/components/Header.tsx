import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const Header = () => {
    return (
        <header className="mx-auto flex w-full max-w-7xl items-center justify-between">
            <div>
                <h1 className="text-lg font-bold">JournelEdge</h1>
            </div>
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
        </header>
    );
};
