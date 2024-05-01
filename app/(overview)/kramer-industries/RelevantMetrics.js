import { FaPlus } from "react-icons/fa6";
import CardGrid from "@/app/(overview)/kramer-industries/CardGrid";
import ConversationCardGrid from "@/app/(overview)/kramer-industries/ConversationCardGrid";
import Image from "next/image";

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

      <div className="mt-10 flex flex-row justify-between items-end">
        <div className="font-medium text-[#666666] text-[13pt]">
          Documents (4)
        </div>
        <FaPlus size={25} />
      </div>
      <hr className="mt-2" />

      <div className="flex flex-row justify-start gap-5 mt-5">
        <div className="flex flex-col items-center">
          <Image
            src="/documents/doc1.png"
            width={100}
            height={20}
            alt="document preview"
            className="border-2 rounded-xl"
          />
          <div className="w-[100px] mt-2 text-center font-medium text-[11pt] text-[#666666]">
            Quarterly Review Notes
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/documents/doc2.png"
            width={100}
            height={20}
            alt="document preview"
            className="border-2 rounded-xl"
          />
          <div className="w-[100px] mt-2 text-center font-medium text-[11pt] text-[#666666]">
            Product Feedback
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/documents/doc3.png"
            width={100}
            height={20}
            alt="document preview"
            className="border-2 rounded-xl"
          />
          <div className="w-[100px] mt-2 text-center font-medium text-[11pt] text-[#666666]">
            API Access Manual
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/documents/doc1.png"
            width={100}
            height={20}
            alt="document preview"
            className="border-2 rounded-xl"
          />
          <div className="w-[100px] mt-2 text-center font-medium text-[11pt] text-[#666666]">
            Security Contract
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-row justify-between items-end">
        <div className="font-medium text-[#666666] text-[13pt]">
          Conversations (3)
        </div>
        <FaPlus size={25} />
      </div>
      <hr className="mt-2" />
      <div className="flex justify-center items-center mt-5">
        <ConversationCardGrid />
      </div>
    </div>
  );
}
