import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AddSymbolForm } from "@/app/(app)/symbols/_components/AddSymbolForm";

export const AddSymbolFormDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="cursor-pointer">
                    <PlusIcon />
                    Add Symbol
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle className="hidden">Add Symbols</DialogTitle>
                <AddSymbolForm />
            </DialogContent>
        </Dialog>
    );
};
