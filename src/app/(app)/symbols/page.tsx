import React, { Suspense } from "react";

import { HydrateClient, trpc } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary";

import { AddSymbolFormDialog } from "@/app/(app)/symbols/_components/AddSymbolFormDialog";
import { SymbolsDataTableView } from "@/app/(app)/symbols/_components/SymbolsDataTableView";

export default function SymbolsPage() {
    void trpc.symbols.getMany.prefetch();
    return (
        <div className="flex h-full flex-col space-y-4">
            <div>
                <h1 className="text-lg font-bold">Symbols</h1>
            </div>
            <main className="flex-1 space-y-4">
                <div className="flex justify-end">
                    <AddSymbolFormDialog />
                </div>
                <HydrateClient>
                    {/*TODO: Add a loading state*/}
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
