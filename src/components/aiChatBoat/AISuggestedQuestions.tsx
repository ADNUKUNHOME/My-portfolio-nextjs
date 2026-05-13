type Props = {
    onSelect: (question: string) => void;
};

const questions = [
    "Can I hire Adnan as a junior full stack developer?",
    "What projects has Adnan built?",
    "How did Adnan learn full stack development?",
];

export default function AISuggestedQuestions({
    onSelect,
}: Props) {
    return (
        <div className="flex flex-wrap gap-2 px-3 py-2">
            {questions.map((q) => (
                <button
                    key={q}
                    onClick={() => onSelect(q)}
                    className="text-xs px-3 py-2 rounded-full 
                    bg-white/10 text-white/80 
                    hover:bg-white/20 transition cursor-pointer"
                >
                    {q}
                </button>
            ))}
        </div>
    );
}