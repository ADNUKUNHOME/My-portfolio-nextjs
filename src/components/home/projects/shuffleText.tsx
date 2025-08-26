import { useEffect, useState } from "react";

export default function useShuffleText(text: string, trigger: boolean, duration = 600) {
    const [displayText, setDisplayText] = useState(text);

    useEffect(() => {
        if (!trigger) return;

        let i = 0;
        const chars = "AFHHIGURIO/JNFDB";
        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((char, idx) =>
                        idx < i ? char : chars[Math.floor(Math.random() * chars.length)]
                    )
                    .join("")
            );

            i += 1;
            if (i > text.length) {
                clearInterval(interval);
                setDisplayText(text);
            }
        }, duration / text.length);

        return () => clearInterval(interval);
    }, [trigger, text, duration]);

    return displayText;
}