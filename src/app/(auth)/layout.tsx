import React from "react";

interface AuthenticationLayoutProps {
    children: React.ReactNode;
}

export default function AuthenticationLayout({ children }: AuthenticationLayoutProps) {
    return (
        <div className="flex min-h-screen">
            <main className="grid flex-1 place-items-center">{children}</main>
        </div>
    );
}
