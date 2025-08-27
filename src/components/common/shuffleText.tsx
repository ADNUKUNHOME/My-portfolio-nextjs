import { useEffect, useState } from "react";

const ShuffleText = ({ text }: { text: string }) => {
    const [displayed, setDisplayed] = useState(text);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayed((prev) =>
                text
                    .split("")
                    .map((char, idx) => {
                        if (idx < iteration) return text[idx];
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 2; // speed (smaller = slower)
        }, 30);

        return () => clearInterval(interval);
    }, [text]);

    return <span>{displayed}</span>;
};

export default ShuffleText;