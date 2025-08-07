import React, { Suspense } from "react";
import Link from "next/link";

import { HydrateClient, trpc } from "@/trpc/server";
import { PlusIcon } from "lucide-react";
import { ErrorBoundary } from "react-error-boundary";

import { Button } from "@/components/ui/button";
import { TradesDataTable } from "@/app/(app)/trades/_components/TradesDataTable";

export const TradePageView = () => {
    void trpc.trades.getMany.prefetch();
    return (
        <div className="flex h-full flex-col space-y-4">
            <div>
                <h1 className="text-lg font-bold">Trades</h1>
            </div>
            <main className="flex-1 space-y-4">
                <div className="flex justify-end">
                    <Button asChild>
                        <Link href="/trades/add">
                            <PlusIcon className="h-4 w-4" />
                            <span>Add Trade</span>
                        </Link>
                    </Button>
                </div>
                <HydrateClient>
                    {/*TODO: Add a loading state*/}
                    <ErrorBoundary fallback={<div>Something went wrong...</div>}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <TradesDataTable />
                        </Suspense>
                    </ErrorBoundary>
                </HydrateClient>
            </main>
        </div>
    );
};
