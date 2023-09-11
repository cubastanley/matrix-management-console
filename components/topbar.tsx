import Image from "next/image"
import DashboardLogo from "@/public/vercel.svg";

export default function Topbar() {
    return (
        <>
            <div className="z-[999] p-4 shadow-md bg-stone-100 text-stone-900 dark:bg-stone-900 dark:text-stone-100 h-16">
                <div className="flex items-center w-full justify-between">
                    <a href="/dashboard" className="text-xl font-extrabold">
                        [m]<span className=" font-normal text-lg">{" "}Matrix</span>
                    </a>
                    <h1 className="text-lg font-bold">Admin Console</h1>
                </div>
            </div>
        </>
    )
}