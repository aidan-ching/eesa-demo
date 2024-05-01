import { RiGroup2Line } from "react-icons/ri"; 
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import clsx from "clsx";

export default function RiskCard({ logoUrl, companyName, body, status, date }) {
  return (
    <div
      className={clsx("flex flex-col border rounded w-[350px]", {
        "bg-[#F5F5F5]": status === "waitingOnCustomer",
      })}
    >
      <div className="flex flex-row items-center gap-2 p-3">
        <Image
          src={logoUrl}
          width={40}
          height={20}
          alt="logo for company"
          className="border rounded shadow"
        />
        <div
          className={clsx("font-bold text-[11pt] text-[#2C2C2C]", {
            "text-opacity-50": status === "waitingOnCustomer",
          })}
        >
          {companyName}
        </div>
      </div>
      <div
        className={clsx("font-medium text-[10pt] text-[#393939] p-3", {
          "text-opacity-50": status === "waitingOnCustomer",
        })}
      >
        {body}
      </div>

      <div
        className={clsx(
          "p-3 font-medium text-[11pt] flex items-center justify-between",
          {
            "text-[#939393]": status === "waiting",
            "text-[#37A764]": status === "closed",
            "text-[#C7C7C7]": status === "waitingOnCustomer",
          }
        )}
      >
        {status === "waiting" && (
          <div className="flex flex-row items-center gap-2">
            <CgProfile size={30} />
            Waiting on You
          </div>
        )}
        {status === "closed" && (
          <div className="flex flex-row items-center gap-2">
            <AiOutlineCheckCircle size={30} />
            Closed
          </div>
        )}
        {status === "waitingOnCustomer" && (
          <div className="flex flex-row items-center gap-2">
            <RiGroup2Line size={30}/>
            Waiting on Customer
          </div>
        )}

        <div className={clsx("text-[#2C2C2C] bg-[#F1F5F9] px-3 py-1 rounded-xl",{
            "text-opacity-50": status === "waitingOnCustomer",
        },)}>
          {date}
        </div>
      </div>
    </div>
  );
}
