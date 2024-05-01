'use client'

import { usePathname } from "next/navigation";

import Link from "next/link";
import { CiGrid41 } from "react-icons/ci";
import { BiSquareRounded } from "react-icons/bi";
import { MdOutlineTune } from "react-icons/md";

export default function NavLinks() {
  const path = usePathname();

  return (
    <div className="w-full">
      <Link href="/">
        <div className={`hover:bg-[#F3F3F4] px-3 py-2 mx-2 text-[#71717A] font-medium rounded-lg flex flex-row items-center ${path === '/' ? 'bg-[#F3F3F4]' : ''}`}>
          <CiGrid41 size="20" color="#71717A" className="mr-2" />
          Overview
        </div>
      </Link>
      <Link href="/">
        <div className="hover:bg-[#F3F3F4] px-3 py-2 mx-2 text-[#71717A] font-medium rounded-lg flex flex-row items-center">
          <BiSquareRounded size="15" color="#71717A" className="mr-3.5" />
          Boards
        </div>
      </Link>
      <Link href="/risk">
        <div className={`hover:bg-[#F3F3F4] px-3 py-2 mx-2 text-[#71717A] font-medium rounded-lg flex flex-row items-center ${path === '/risk' ? 'bg-[#F3F3F4]' : ''}`}>
          <BiSquareRounded size="15" color="#71717A" className="mr-3.5 ml-4" />
          Risk
        </div>
      </Link>
      <Link href="/">
        <div className="hover:bg-[#F3F3F4] px-3 py-2 mx-2 text-[#71717A] font-medium rounded-lg flex flex-row items-center">
          <BiSquareRounded size="15" color="#71717A" className="mr-3.5 ml-4" />
          Opportunities
        </div>
      </Link>
      <Link href="/">
        <div className="hover:bg-[#F3F3F4] px-3 py-2 mx-2 text-[#71717A] font-medium rounded-lg flex flex-row items-center">
          <BiSquareRounded size="15" color="#71717A" className="mr-3.5 ml-4" />
          Issues
        </div>
      </Link>
      <Link href="/">
        <div className="hover:bg-[#F3F3F4] px-3 py-2 mx-2 text-[#71717A] font-medium rounded-lg flex flex-row items-center">
          <MdOutlineTune size="15" color="#71717A" className="mr-3.5" />
          Data Vault
        </div>
      </Link>
    </div>
  );
}
