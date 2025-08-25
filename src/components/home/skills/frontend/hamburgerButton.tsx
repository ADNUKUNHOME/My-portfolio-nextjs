import { motion } from "framer-motion";

type MenuButtonProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuButton: React.FC<MenuButtonProps> = ({ setOpen }) => {
    return (
        <motion.button
            onClick={() => setOpen((prev) => !prev)}
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="relative w-12 h-12 flex flex-col justify-center items-center bg-[#e8e8e3] rounded-full space-y-1 z-[10000]"
        >
            <motion.span
                animate={{ rotate: 0, y: 0 }}
                className="w-7 h-1 bg-[#1f1c19] rounded"
            />
            <motion.span
                animate={{ rotate: 0, y: 0 }}
                className="w-7 h-1 bg-[#1f1c19] rounded"
            />
        </motion.button>
    );
};

export default MenuButton;
