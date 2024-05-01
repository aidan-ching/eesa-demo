import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsLayoutThreeColumns } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";

import RiskCard from "@/app/(overview)/risk/RiskCard";

export default function Page() {
  return (
    <div className="flex flex-col"> 
      <div className="flex flex-row p-4 gap-3 items-center border-b">
        <div className="font-semibold text-[10pt] flex items-center gap-2"> 
          Sort By <AiOutlineDown />
        </div>
        <div className="border-r-2 h-[95%]" />
        <div className="rounded border p-0.5 text-[10pt] text-[#818181] font-medium flex items-center">
          <div className="rounded border border-neutral-400 p-1 text-[10pt] text-[#818181] font-medium mr-1">
            <BsLayoutThreeColumns />
          </div>
          <AiOutlineUnorderedList size={15} className="mr-1" />
        </div>

        <div className="rounded border-2 p-1 px-2 text-[10pt] text-[#818181] font-medium">
          Date Range
        </div>
        <div className="rounded border-2 p-1 px-2 text-[10pt] text-[#818181] font-medium flex items-center gap-2">
          Account Owner
          <AiOutlineDown />
        </div>
        <div className="rounded border-2 p-1 px-2 text-[10pt] text-[#818181] font-medium flex items-center gap-2">
          Assignee
          <AiOutlineDown />
        </div>
        <div className="rounded border-2 p-1 px-2 text-[10pt] text-[#818181] font-medium flex items-center gap-2">
          Account
          <AiOutlineDown />
        </div>
        <div className="<AiOutlinePlus />p-1 px-2 text-[10pt] text-[#818181] font-medium flex items-center gap-1">
          <AiOutlinePlus />
          Add filter
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="p-5 flex flex-col gap-5">
          <div className="flex flex-row items-center gap-1 font-bold text-[16pt]">
            Identified <div className="text-[#989898]">(1)</div>{" "}
            <AiOutlineDown />
          </div>

          <RiskCard
            logoUrl="/cloudlink.png"
            companyName="Cloudlink"
            body="Kramer Industries has had a high number of bugs despite high usage metrics. These issues must be closed before the nearing renewal."
            status="waiting"
            date="April 21st"
          />
        </div>

        <div className="p-5 flex flex-col gap-5">
          <div className="flex flex-row items-center gap-1 font-bold text-[16pt]">
            Engaged <div className="text-[#989898]">(3)</div> <AiOutlineDown />
          </div>

          <RiskCard
            logoUrl="/precision.png"
            companyName="Precision Tech"
            body="Kramer Industries has had a high number of bugs despite high usage metrics. These issues must be closed before the nearing renewal."
            status="waiting"
            date="April 21st"
          />

          <RiskCard
            logoUrl="/smarttrack.png"
            companyName="Smart Track Logistics"
            body="Kramer Industries has had a high number of bugs despite high usage metrics. These issues must be closed before the nearing renewal."
            status="waiting"
            date="April 20th"
          />

          <RiskCard
            logoUrl="/virtualease.png"
            companyName="Virtual Ease"
            body="Kramer Industries has had a high number of bugs despite high usage metrics. These issues must be closed before the nearing renewal."
            status="waitingOnCustomer"
            date="April 19th"
          />
        </div>

        <div className="p-5 flex flex-col gap-5">
          <div className="flex flex-row items-center gap-1 font-bold text-[16pt]">
            Closed <div className="text-[#989898]">(1)</div> <AiOutlineDown />
          </div>

          <RiskCard
            logoUrl="/optistore.png"
            companyName="OptiStore"
            body="Kramer Industries has had a high number of bugs despite high usage metrics. These issues must be closed before the nearing renewal."
            status="closed"
            date="April 15th"
          />
        </div>
      </div>
    </div>
  );
}
