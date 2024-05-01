import { IoAddOutline } from "react-icons/io5";
import Table from "@/app/(overview)/ui/Overview/table"

export default function Home() {
  return (
    <div className="flex flex-col items-end">
      <button className="flex flex-row items-center border border-[#EAECF0] m-3 mr-5 rounded-lg text-gray-900 px-3 py-1">
        <IoAddOutline size="20" className="mr-2" />
        Company
      </button>


      <div className="w-full flex justify-center">
        <Table/>
      </div>
    </div>
  );
}
