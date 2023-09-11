import Sidebar from "@/components/sidebar";
import ThemeButton from "@/components/theme-button";
import Topbar from "@/components/topbar";
import { ReactNode } from "react";

export default function DashboardLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <div className="flex flex-col h-screen selection:bg-neutral-400 dark:selection:bg-neutral-800 bg-neutral-50 dark:bg-neutral-700 relative">
            <Topbar />
            <main className="flex h-full">
                    <div className="hidden md:w-48 md:flex md:flex-col md:inset-y-0">
                        <Sidebar />
                    </div>
                    <div className="">
                        <div className="text-gray-800 dark:text-gray-50 p-2">
                            {children}
                        </div>
                    </div>
                    <div className="fixed bottom-4 right-4">
                        <ThemeButton />
                    </div>
            </main>
        </div>
    )
}