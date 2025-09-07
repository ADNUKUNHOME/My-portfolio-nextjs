import { MotionButton, MotionDiv, MotionSpan } from "@/lib/motion";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

type MenuButtonProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
};

const MenuButton: React.FC<MenuButtonProps> = ({ setOpen, open }) => {
    const navItems = ["Home", "About", "Projects", "Education", "Skills", "Blogs", "Contact"];
    return (
        <>
            {
                !open && (
                    <MotionButton
                        onClick={() => setOpen((prev) => !prev)}
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-12 h-12 flex flex-col justify-center items-center bg-[#e8e8e3] hover:bg-[#e8e8e3] rounded-full z-[10000]"
                    >
                        <MotionSpan
                            className="w-7 h-1 bg-[#1f1c19] rounded"
                        />
                        <MotionSpan
                            className="w-7 h-1 bg-[#1f1c19] rounded"
                        />
                    </MotionButton>
                )
            }

            {
                open && (
                    <AnimatePresence>
                        {open && (
                            <MotionDiv
                                className="fixed inset-0 z-[10000]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <MotionDiv
                                    initial={{ x: "100%" }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "100%" }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="absolute top-0 right-0 w-full h-full bg-linear-to-r from-white/20 via-black/70 to-white/20 backdrop-blur-2xl flex flex-col items-start justify-center pl-8 md:pl-20 lg:pl-50 space-y-3"
                                >
                                    {/* Cancel Button */}
                                    <div className="w-100 h-100 absolute -top-30 -right-30 bg-white/30 rounded-full" />
                                    <div className="w-100 h-100 absolute -top-20 -right-30 bg-white/10 rounded-full" />
                                    <MotionButton
                                        whileHover={{ rotate: 180 }}
                                        transition={{ duration: 0.5 }}
                                        onClick={() => setOpen(false)}
                                        className="absolute top-6 right-6 w-15 h-15 rounded-full bg-white hover:bg-white flex items-center justify-center"
                                    >
                                        <MotionSpan
                                            initial={{ rotate: 0 }}
                                            animate={{ rotate: 45 }}
                                            className="absolute w-7 h-0.5 bg-black rounded"
                                        />
                                        <MotionSpan
                                            initial={{ rotate: 0 }}
                                            animate={{ rotate: -45 }}
                                            className="absolute w-7 h-0.5 bg-black rounded"
                                        />
                                    </MotionButton>

                                    {/* Menu Items */}
                                    {navItems.map((item, i) => (
                                        <MotionDiv
                                            key={item}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 * i, duration: 0.4 }}
                                        >
                                            <Link
                                                href={item === "Home" ? "/" : item === "Blogs" ? "/blogs" : `#${item.toLowerCase()}`}
                                                className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-300 tracking-tighter relative group"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    if (item === "Home") {
                                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                                    } else if (item === "Blogs") {
                                                        window.location.href = "/blogs";
                                                    } else {
                                                        window.location.hash = item.toLowerCase();
                                                    }
                                                    setOpen(false);
                                                }}

                                            >
                                                {item}
                                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 transition-all duration-500 group-hover:w-full"></span>
                                            </Link>
                                        </MotionDiv>
                                    ))}
                                </MotionDiv>
                            </MotionDiv>
                        )}
                    </AnimatePresence>
                )
            }
        </>
    );
};

export default MenuButton;
