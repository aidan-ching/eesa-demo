import Link from "next/link";
import { CiGrid41 } from "react-icons/ci";

export default function navlinks() {
  return (
    <div className="w-full">
      <Link href="/">
        <div className="hover:bg-[#F3F3F4] px-3 py-2 mx-2 text-[#71717A] font-medium rounded-lg flex flex-row items-center">
          <CiGrid41 size="20" color="#71717A" className="mr-2"/>
          Overview
        </div>
      </Link>
      <Link href="/">
        <div className="hover:bg-[#F3F3F4] px-3 py-2 mx-2 text-[#71717A] font-medium rounded-lg flex flex-row items-center">
          Boards
        </div>
      </Link>
      <Link href="/">
        <div className="hover:bg-[#F3F3F4] px-3 py-2 mx-2 text-[#71717A] font-medium rounded-lg flex flex-row items-center">
          Risk
        </div>
      </Link>
      <Link href="/">
        <div className="hover:bg-[#F3F3F4] px-3 py-2 mx-2 text-[#71717A] font-medium rounded-lg flex flex-row items-center">
          Opportunities
        </div>
      </Link>
      <Link href="/">
        <div className="hover:bg-[#F3F3F4] px-3 py-2 mx-2 text-[#71717A] font-medium rounded-lg flex flex-row items-center">
          Issues
        </div>
      </Link>
      <Link href="/">
        <div className="hover:bg-[#F3F3F4] px-3 py-2 mx-2 text-[#71717A] font-medium rounded-lg flex flex-row items-center">
          Data Vault
        </div>
      </Link>
    </div>
  );
}
