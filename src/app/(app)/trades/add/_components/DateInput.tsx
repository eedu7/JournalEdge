"use client";

import * as React from "react";

import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

function formatDateToDDMMYYYY(date: Date | undefined): string {
    if (!date) return "";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

function parseDDMMYYYYToDate(str: string): Date | null {
    const [dd, mm, yyyy] = str.split("-");
    const date = new Date(`${yyyy}-${mm}-${dd}`);
    return isNaN(date.getTime()) ? null : date;
}

export type DateInputProps = {
    value: string;
    onChange: (val: string) => void;
};

export function DateInput({ value, onChange }: DateInputProps) {
    const [open, setOpen] = React.useState(false);
    const parsedDate = parseDDMMYYYYToDate(value);
    const [month, setMonth] = React.useState<Date | undefined>(parsedDate || new Date());

    return (
        <div className="relative flex gap-2">
            <Input
                placeholder="dd-mm-yyyy"
                value={value}
                onChange={(e) => {
                    const newValue = e.target.value;
                    onChange(newValue);
                    const parsed = parseDDMMYYYYToDate(newValue);
                    if (parsed) {
                        setMonth(parsed);
                    }
                }}
                onKeyDown={(e) => {
                    if (e.key === "ArrowDown") {
                        e.preventDefault();
                        setOpen(true);
                    }
                }}
                className="bg-background pr-10"
            />
            <Popover
                open={open}
                onOpenChange={setOpen}
            >
                <PopoverTrigger asChild>
                    <Button
                        type="button"
                        variant="ghost"
                        className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                    >
                        <CalendarIcon className="size-3.5" />
                        <span className="sr-only">Select date</span>
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="end"
                    alignOffset={-8}
                    sideOffset={10}
                >
                    <Calendar
                        mode="single"
                        selected={parsedDate || undefined}
                        captionLayout="dropdown"
                        month={month}
                        onMonthChange={setMonth}
                        onSelect={(date) => {
                            if (!date) return;
                            onChange(formatDateToDDMMYYYY(date));
                            setOpen(false);
                        }}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
