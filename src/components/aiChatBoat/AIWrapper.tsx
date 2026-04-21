"use client";

import { useState } from "react";
import AIChatModal from "./AIChatModal";
import AIOrb from "./AIorb";

export default function AIWrapper() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <AIOrb onClick={() => setOpen(true)} />
            <AIChatModal isOpen={open} onClose={() => setOpen(false)} />
        </>
    );
}