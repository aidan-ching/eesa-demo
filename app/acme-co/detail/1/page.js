
import Image from "next/image";
import { IoMdTime } from "react-icons/io";
import { IoVideocamOutline, IoCalendarClearOutline, IoEarthOutline   } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa";
export default function Page() {
  return (
    <div>
      <div className="rounded shadow-lg border mb-20">
        <div className="font-medium text-[11pt] text-[#393939] p-3">
          Upsell Conversation with matt
        </div>

        <div className="bg-[#F5F5F5] p-1">
          <div className="bg-white p-5 m-3 rounded flex flex-col ">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/pfp/pfp3.png"
                width={40}
                height={40}
                alt="pfp"
                className="w-[40px] h-[40px] rounded-full object-cover"
              />
              <div className="font-semibold text-[11pt] text-[#393939]">
                Matt
              </div>
              <div className="grow" />

              <div className="flex flex-row justify-end">
                <div className="flex flex-row gap-3 border p-2 rounded shadow bg-white">
                  <Image
                    src="/logo/gmail.png"
                    width={30}
                    height={30}
                    alt="logo"
                  />
                  <div className="font-medium text-[#393939] text-[13pt]">
                    View in Gmail
                  </div>
                </div>
              </div>
            </div>

            <p className="whitespace-pre-line text-[13pt] ">
              Hi Jane! I would love to speak about this further next Wednesday
              at 2pm. Can you please let me know if this time works for you.
            </p>
          </div>

          <div className="bg-white p-5 m-3 rounded flex flex-col ">
            <div>
              <Image
                src="/pfp/pfp3.png"
                width={40}
                height={40}
                alt="pfp"
                className="w-[60px] h-[60px] rounded-full object-cover"
              />
            </div>

            <div className="font-bold text-[16pt] text-[#191B4C] mt-5">{`Demo Meeting Matt <> Acme Co`}</div>

            <div className="flex flex-col gap-3 mt-5">
                <div className="text-[#737373] font-semibold text-[11pt] flex items-center gap-2"><IoMdTime size={30}/> <div>30 Minutes</div></div>
                <div className="text-[#737373] font-semibold text-[11pt] flex items-center gap-2"><IoVideocamOutline size={30}/> <div>Web conferencing details provided upon confirmation.</div></div>
                <div className="text-[#737373] font-semibold text-[11pt] flex items-center gap-2"><IoCalendarClearOutline size={30}/> <div>2:00pm - 2:30pm, Wednesday, April 28, 2024</div></div>
                <div className="text-[#737373] font-semibold text-[11pt] flex items-center gap-2"><IoEarthOutline size={30}/> <div>Pacific Time - US & Canada</div></div>
            </div>
            <div className="flex justify-end font-medium text-[11pt] text-white"><button className="bg-[#3B01E3] flex items-center px-3 py-1.5 gap-2 rounded-md"><FaRegCalendar />Schedule</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}
