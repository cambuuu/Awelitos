"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function TitleScroller() {
    const pathname = usePathname();
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Clear any existing interval
        if (intervalRef.current) clearInterval(intervalRef.current);

        const startScrolling = () => {
            // Get the current title set by Next.js metadata
            const baseTitle = document.title;

            // If title is empty or very short, maybe don't scroll? 
            // But user asked for it to move.

            const spacer = "   ***   ";
            const fullTitle = baseTitle + spacer;
            let offset = 0;

            intervalRef.current = setInterval(() => {
                offset = (offset + 1) % fullTitle.length;
                const scrolledTitle = fullTitle.substring(offset) + fullTitle.substring(0, offset);
                document.title = scrolledTitle;
            }, 200);
        };

        // Wait a bit for Next.js to update the document.title after navigation
        const timer = setTimeout(startScrolling, 1000);

        return () => {
            clearTimeout(timer);
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [pathname]);

    return null;
}
