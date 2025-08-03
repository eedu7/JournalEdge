import React, { Suspense } from "react";

import { ClientGreeting } from "@/app/(app)/dashboard/ClientGreeting";
import { HydrateClient, trpc } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary";

export default function DashboardPage() {
    void trpc.hello.prefetch({ text: "Batman" });
    return (
        <div>
            <HydrateClient>
                <div>
                    <ErrorBoundary fallback={<div>Something Went Wrong</div>}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <ClientGreeting />
                        </Suspense>
                    </ErrorBoundary>
                </div>
            </HydrateClient>
        </div>
    );
}
