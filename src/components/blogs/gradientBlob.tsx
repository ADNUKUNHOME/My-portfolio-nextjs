import {motion} from 'framer-motion';

const GradientBlob = () => {
  return (
    <div>
        <motion.div
            className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full blur-3xl"
            style={{
            background:
                "radial-gradient(circle, rgba(56,189,248,0.3), rgba(147,51,234,0.25), transparent)",
            }}
            animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
            className="absolute -bottom-40 -right-40 w-[36rem] h-[36rem] rounded-full blur-3xl"
            style={{
            background:
                "radial-gradient(circle, rgba(16,185,129,0.3), rgba(59,130,246,0.25), transparent)",
            }}
            animate={{ x: [0, -40, 40, 0], y: [0, 30, -30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
    </div>
  )
}

export default GradientBlob
