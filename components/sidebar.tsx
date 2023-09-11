import Link from "next/link";
import { Button } from "./ui/button";
import { links } from "@/lib/data";

export default function Sidebar() {
    return (
        <nav className="items-center h-full shadow-md bg-stone-50 text-stone-800 dark:text-stone-200 dark:bg-neutral-800 p-2">
            <ul className="flex flex-col space-y-2">
                {links.map(link => (
                    <li key={link.slug}>
                        <Link href={`/${link.slug}`} className="flex h-14 w-full items-center justify-center bg-gray-300 hover:bg-gray-400 dark:bg-neutral-950 rounded-lg p-2 text-center shadow-sm hover:shadow-lg dark:hover:bg-neutral-900 transition">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )    
}