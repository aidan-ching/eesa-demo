import { FaPlus } from "react-icons/fa6";
import CardGrid from "@/app/kramer-industries/CardGrid";

export default function RelevantMetrics() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="font-medium text-[#666666] text-[13pt]">
          Customer Health
        </div>
        <div className="flex justify-center rounded font-medium text-[#37A764] text-[12pt] px-3 py-1 bg-[#E9FEF0] w-[15%]">
          93%
        </div>
      </div>

      <div className="mt-5 flex flex-col items-end">
        <FaPlus size={25} />
      </div>
      <hr className="mt-2" />
      <div className="flex justify-center mt-5">
        <CardGrid />
      </div>

      <div className="mt-5 flex flex-row justify-between items-end">
        <div className="font-medium text-[#666666] text-[13pt]">Documents (4)</div>
        <FaPlus size={25}/>

      </div>
      <hr className="mt-2"/>
    </div>
  );
}
