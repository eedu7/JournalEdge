import React from "react";
import Link from "next/link";

import { PlusIcon } from "lucide-react";

import { AddSymbolFormDialog } from "@/app/(app)/symbols/_components/AddSymbolFormDialog";
import { SymbolsDataTableView } from "@/app/(app)/symbols/_components/SymbolsDataTableView";

export const TradePageView = () => {
    return (
        <div className="flex h-full flex-col space-y-4">
            <div>
                <h1 className="text-lg font-bold">Trades</h1>
            </div>
            <main className="flex-1 space-y-4">
                <div className="flex justify-end">
                    <Link
                        href="/trades/add"
                        className="flex items-center gap-1 rounded-tl rounded-tr border-b-black p-2 hover:border-b hover:bg-zinc-100"
                    >
                        <PlusIcon className="h-4 w-4" />
                        <span>Add Trade</span>
                    </Link>
                </div>
                {/*<HydrateClient>*/}
                {/*    /!*TODO: Add a loading state*!/*/}
                {/*    <ErrorBoundary fallback={<div>Something went wrong...</div>}>*/}
                {/*        <Suspense fallback={<div>Loading...</div>}>*/}
                {/*            <SymbolsDataTableView />*/}
                {/*        </Suspense>*/}
                {/*    </ErrorBoundary>*/}
                {/*</HydrateClient>*/}
            </main>
        </div>
    );
};
