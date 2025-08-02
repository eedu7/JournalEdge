import { Metadata } from "next";

import { SignUp } from "@clerk/nextjs";

export const metadata: Metadata = {
    title: "Create Your Account | JournalEdge",
    description:
        "Join JournalEdge and start tracking your trades, improving your strategies, and mastering the markets. Sign up now to get started.",
};

export default function SignUpPage() {
    return <SignUp />;
}
