import { FaXmark, FaCheck } from "react-icons/fa6";
import Image from "next/image";

export default function DetailView() {
  const body = `Hi Katherine,
    
    Hope you're doing well! I'm excited to introduce our latest AI document feature, designed to transform your workflow at Kramer Industries.
    Here's why it's a game-changer:
    1. Effortless Organization: AI categorizes and tags documents seamlessly.
    2. Instant Retrieval: Quickly find what you need with smart search.
    3. Actionable Insights: Get valuable data insights for smarter decisions.
    
    Integrating this feature can ramp up efficiency at Kramer Industries. Let's chat for a quick demo tailored to your needs.
    Looking forward to hearing from you.

    Best,
    Jane Doe
    Customer Success Manager`;

  return (
    <div>
      <div className="rounded shadow-lg border">
        <div className="font-medium text-[11pt] text-[#393939] p-3">
          New Feature Conversation with Katherine
        </div>

        <div className="bg-[#F5F5F5] pb-1">
          <div className="flex flex-row gap-5 p-3 items-center">
            <div className="text-[#818181]">To</div>{" "}
            <div className="px-1 text-[#4761BA] flex flex-row items-center gap-1 text-sm border-4 border-[#D2DDFA] rounded-lg">
              kath@kramer.com <FaXmark />
            </div>
          </div>
          <div className="flex flex-row gap-5 p-3">
            <div className="text-[#818181]">Subject</div>{" "}
            <div className="font-medium text-[12pt]">
              Elevate your Documents with AI
            </div>
          </div>

          <div className="bg-white p-5 m-3 rounded flex justify-end items-end">
            <p className="whitespace-pre-line text-[13pt] ">{body}</p>
            <div className="absolute z-10 font-semibold text-[13pt] text-[#646464] border-4 border-[#D2DDFA] rounded px-3 flex items-center gap-2">Sent <FaCheck/></div>
          </div>
        </div>

      </div>

      <div className="rounded shadow-2xl mb-10 flex flex-row items-center gap-3 drop-shadow p-3 border mt-5">
        <Image src="/pfp/pfp1.png" width={50} height={50} alt="pfp" className="rounded-full w-[40px] h-[40px] object-cover"/>
        <div>Awaiting response from Katherine...</div>
        <div className="grow"/>
        <div><Image src="/logo/gmail.png" width={50} height={50} alt="logo"/>View in Gmail</div>
      </div>
    </div>
  );
}
