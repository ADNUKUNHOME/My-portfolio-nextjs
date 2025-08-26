import { Separator } from "@/components/ui/separator"

const SkillsCard = ({
  type,
  description,
  skills,
}: {
  type?: string;
  description?: string;
  skills: string[];
}) => {

  const isBackend = type === "backend";

  return (
    <div className="flex flex-col gap-4">
      {
        description &&
        <p className={`text-sm md:text-base lg:text-lg font-medium mb-5 max-w-md ${isBackend ? "text-[#1f1c19]" : "text-gray-400"}`}>
          {description}
        </p>
      }
      {
        skills.map((skill, index) => (
          <div className="flex flex-col" key={index}>
            <p className={`text-xl md:text-2xl lg:text-3xl font-bold ${isBackend ? "text-[#1f1c19]" : "text-gray-300"}`}><span className="text-base  lg:text-lg text-gray-500 mr-5">0{index + 1}</span>{skill}</p>
            <Separator className={`max-w-md ${isBackend ? "bg-[#1f1c19]" : "bg-gray-300"}`} />
          </div>
        ))
      }
    </div>
  )
}

export default SkillsCard
