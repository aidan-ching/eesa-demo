import Link from "next/link";
import { IoGridOutline } from "react-icons/io5";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";

export default function Header() {
  return (
    <div className="flex w-full border-b-2 border-[#EAECF0]">
      <Link href="/">
        <div className="px-3 py-2 mx-2 text-black font-medium rounded-lg flex flex-row items-center">
        <IoGridOutline size="20" className="mr-2"/>
          Overview
        </div>
      </Link>

      <div className="grow"/>

      <Link href="/">
        <div className="px-3 py-2 mx-2 text-black font-medium rounded-lg flex flex-row items-center">
        <RiCalendarScheduleLine size="20" className="mr-2" />
          Schedule Meeting
        </div>
      </Link>

      

      <Link href="/">
        <div className="px-3 py-2 mx-2 text-black font-medium rounded-lg flex flex-row items-center">
        <CiMail size="20" className="mr-2" strokeWidth="0.5"/>
          Email
        </div>
      </Link>
    </div>
  );
}
