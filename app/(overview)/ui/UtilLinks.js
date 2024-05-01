import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

export default function UtilLinks() {
  return (
    <div className="w-full">
      <Link href="/">
        <div className="hover:bg-[#F3F3F4] px-3 py-2 mx-2 text-[#71717A] font-medium rounded-lg flex flex-row items-center">
          <IoIosSearch size="25" color="#71717A" className="mr-3" />
          Search
        </div>
      </Link>

      <Link href="/">
        <div className="hover:bg-[#F3F3F4] px-3 py-2 mx-2 text-[#71717A] font-medium rounded-lg flex flex-row items-center">
          <CiSettings size="25" color="#71717A" className="mr-3" />
          Settings
        </div>
      </Link>

      <Link href="/">
        <div className="hover:bg-[#F3F3F4] px-3 py-2 mx-2 text-[#71717A] font-medium rounded-lg flex flex-row items-center">
        <CgProfile size="25" color="#71717A" className="mr-3"/>
          Profile
        </div>
      </Link>
    </div>
  );
}
