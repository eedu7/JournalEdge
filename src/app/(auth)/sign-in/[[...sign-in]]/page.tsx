import { SignIn } from "@clerk/nextjs";

export const metadata: Metadata = {
    title: "Sign In to Your Account | JournalEdge",
    description:
        "Welcome back to JournalEdge. Log in to continue tracking your trades, analyzing performance, and growing as a trader.",
};

export default function SignInPage() {
    return <SignIn />;
}
