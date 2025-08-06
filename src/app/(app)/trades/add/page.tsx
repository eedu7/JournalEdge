import React from "react";
import type { Metadata } from "next";

import { trpc } from "@/trpc/server";

import { AddTradeForm } from "@/app/(app)/trades/add/_components/AddTradeForm";

export const metadata: Metadata = {
    title: "Add Trade",
    description: "Add a new trade.",
};

export default function AddTradePage() {
    void trpc.symbols.getMany.prefetch();

    return (
        <div className="flex h-full flex-col space-y-4">
            <div>
                <h1 className="text-lg font-bold">Add Trades</h1>
            </div>
            <main className="flex-1 space-y-4">
                <AddTradeForm />
            </main>
        </div>
    );
}
