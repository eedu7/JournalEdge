import React, { Suspense } from "react";

import { HydrateClient, trpc } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary";

import { AddSymbolForm } from "@/app/(app)/symbols/_components/AddSymbolForm";
import { SymbolsDataTableView } from "@/app/(app)/symbols/_components/SymbolsDataTableView";

export default function SymbolsPage() {
    void trpc.symbols.getMany.prefetch();
    return (
        <div className="flex h-full flex-col space-y-8">
            <div>
                <h1 className="text-lg font-bold">Symbols</h1>
            </div>
            <main className="flex-1">
                <AddSymbolForm />
                <HydrateClient>
                    <ErrorBoundary fallback={<div>Something went wrong...</div>}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <SymbolsDataTableView />
                        </Suspense>
                    </ErrorBoundary>
                </HydrateClient>
            </main>
        </div>
    );
}
