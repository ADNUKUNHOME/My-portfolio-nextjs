import { MotionH1 } from "@/lib/motion"

const MyName = () => {
    return (
        <div>
            {/* Desktop version */}
            <MotionH1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="hidden sm:block absolute top-28 w-full text-center font-extrabold tracking-tight
                   [font-size:clamp(2rem,10vw,6rem)] whitespace-nowrap 
                   bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent 
                   animate-gradient-x"
            >
                MUHAMMAD ADNAN K
            </MotionH1>

            {/* Mobile version */}
            <MotionH1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="block sm:hidden absolute top-28 w-full text-center font-extrabold tracking-tight
                   text-[15vw] leading-tight 
                   bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent 
                   animate-gradient-x"
            >
                MUHAMMAD <br /> ADNAN K
            </MotionH1>
        </div>
    )
}

export default MyName
