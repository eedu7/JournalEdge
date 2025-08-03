import React from "react";

import { AddSymbolForm } from "@/app/(app)/symbols/_components/AddSymbolForm";

export default function SymbolsPage() {
    return (
        <div className="flex h-full flex-col space-y-8">
            <div>
                <h1 className="text-lg font-bold">Symbols</h1>
            </div>
            <main className="flex-1">
                <AddSymbolForm />
            </main>
        </div>
    );
}
