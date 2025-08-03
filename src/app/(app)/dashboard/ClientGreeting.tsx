"use client";

import React from "react";

import { trpc } from "@/trpc/client";

export const ClientGreeting = () => {
    const [data] = trpc.hello.useSuspenseQuery({ text: "Batman" });
    if (!data) return null;

    const greeting = data.greeting;
    return (
        <div className="px-8 py-4">
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <p>{greeting}</p>
        </div>
    );
};
