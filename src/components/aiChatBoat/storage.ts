const STORAGE_KEY = "ai-chat";

export function saveMessages(messages: any[]) {
    const data = {
        messages,
        timestamp: Date.now(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function loadMessages() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    try {
        const parsed = JSON.parse(raw);

        const isValid =
            Date.now() - parsed.timestamp < 1000 * 60 * 60; // 1 hour

        return isValid ? parsed.messages : [];
    } catch {
        return [];
    }
}

export function clearMessages() {
    localStorage.removeItem(STORAGE_KEY);
}