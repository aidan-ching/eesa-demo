import { FaXmark, FaCheck } from "react-icons/fa6";
import Image from "next/image";

export default function DetailView() {
  const body = `Hi Matt,

  I've been reviewing CloudLink's usage of our software and see great potential for enhancement, particularly in optimizing your financial reporting processes. Could we schedule a quick chat to explore how our advanced analytics module can provide deeper insights into your financial data? Let me know your availability this week.
  `;

  return (
    <div>
      <div className="rounded shadow-lg border mb-20">
        <div className="font-medium text-[11pt] text-[#393939] p-3">
          Upsell Conversation with matt
        </div>

        <div className="bg-[#F5F5F5] pb-1">
          <div className="flex flex-row gap-5 p-3 items-center">
            <div className="text-[#818181]">To</div>{" "}
            <div className="px-1 text-[#4761BA] flex flex-row items-center gap-1 text-sm border-4 border-[#D2DDFA] rounded-lg">
              matt@acme.co <FaXmark />
            </div>
          </div>
          <div className="flex flex-row gap-5 p-3">
            <div className="text-[#818181]">Subject</div>{" "}
            <div className="font-medium text-[12pt]">
              Streamline your Financial Reports
            </div>
          </div>

          <div className="bg-white p-5 m-3 rounded flex ">
            <p className="whitespace-pre-line text-[13pt] ">{body}</p>
          </div>

          <div className="bg-white p-5 m-3 rounded flex flex-col ">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/pfp/pfp1.png"
                width={40}
                height={40}
                alt="pfp"
                className="w-[40px] h-[40px] rounded-full object-cover"
              />
              <div className="font-semibold text-[11pt] text-[#393939]">
                Matt
              </div>
            </div>
            <p className="whitespace-pre-line text-[13pt] ">
              Hi Jane! I would love to speak about this further next Wednesday
              at 2pm. Can you please let me know if this time works for you.
            </p>
          </div>

          <div className="bg-white p-5 m-3 rounded flex flex-col ">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/pfp/pfp4.png"
                width={40}
                height={40}
                alt="pfp"
                className="w-[40px] h-[40px] rounded-full object-cover"
              />
              <div className="font-semibold text-[11pt] text-[#393939]">
                Jane
              </div>
            </div>
            <p className="whitespace-pre-line text-[13pt] ">
              Yes, that time works for me. I will schedule a Google Meet.
              Looking forward to talking to you!
            </p>
          </div>

          <div className="flex flex-row justify-end p-5">
            <div className="flex flex-row gap-3 border p-2 rounded shadow bg-white">
              <Image src="/logo/gmail.png" width={30} height={30} alt="logo" />
              <div className="font-medium text-[#393939] text-[13pt]">
                View in Gmail
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
