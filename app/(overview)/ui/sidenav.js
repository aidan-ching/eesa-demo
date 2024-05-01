
import Image from "next/image";
import NavLinks from "@/app/(overview)/ui/navlinks"
import UtilLinks from "@/app/(overview)/ui/UtilLinks"


export default function SideNav() {
  return (
    <div className="border-r-2 border-[#EAECF0] h-full flex flex-col">

      <div className="flex flex-row items-center mb-5">
        <Image src="/eesa_logo.png" width={64} height={64} alt="logo of eesa" />
        <div className="font-bold text-3xl pl-2">eesa</div>
      </div>

      <NavLinks/>

      <div className="grow"/>

      <UtilLinks/>




    </div>
  );
}
