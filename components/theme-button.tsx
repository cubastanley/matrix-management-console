"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeButton() {

    const { setTheme, resolvedTheme } = useTheme();
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) return null;

    return(
        <button className="flex items-center justify-center h-8 w-8 rounded-md border-2 border-neutral-400 bg-neutral-200 hover:bg-neutral-300 text-neutral-500 drop-shadow-sm dark:bg-neutral-600 dark:text-neutral-300 dark:border-neutral-500 transition" onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
            {resolvedTheme === 'dark' ? (<Moon />) : (<Sun />)}
        </button>
    )

}