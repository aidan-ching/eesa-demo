import Image from "next/image";
import { BsLightningChargeFill } from "react-icons/bs";
import { PiPath } from "react-icons/pi";
import { CiCircleCheck } from "react-icons/ci";

import EngagementPlanTable from "@/app/kramer-industries/EngagementPlanTable";

export default function Page() {
  return (
    <div className="flex">
      <div className="w-[40%] h-full border-r">
        <div>
          <div className="flex flex-row p-5 items-center">
            <Image
              src="/kramer-logo.png"
              width={60}
              height={60}
              alt="company logo"
              className="shadow-lg rounded p-2 m-3"
            />
            <div>
              <div className="font-bold text-[16pt] text-[#191B4C]">
                Kramer Industries
              </div>
              <div className="bg-[#E9FEF0] text-[#37A764] flex justify-center px-3 py-1 text-[13pt] font-medium rounded">
                Upsell Opportunity
              </div>
            </div>
          </div>

          <div className="border-b flex flex-row justify-end">
            <button className="bg-[#3B01E3] text-white flex flex-row justify-between items-center font-medium px-3 py-1 rounded gap-3 m-3">
              <BsLightningChargeFill size={18} className="" />
              Eesa Pilot
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-between border-b text-[#2C2C2C]">
          <div className="flex flex-row items-center gap-3 font-medium p-4">
            <PiPath size={20} /> Engagement Plan
          </div>
          <div className="flex flex-row items-center mr-20 gap-3 font-medium p-4">
            {" "}
            <CiCircleCheck size={25} /> Status
          </div>
        </div>

        <div className="w-full">
          <EngagementPlanTable />
        </div>


      </div>

      <div></div>
    </div>
  );
}
