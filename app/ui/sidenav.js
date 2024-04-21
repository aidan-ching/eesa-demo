
import { Flex, Spacer } from "@chakra-ui/react";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import NavLinks from "@/app/ui/navlinks"
import UtilLinks from "@/app/ui/UtilLinks"


export default function SideNav() {
  return (
    <div className="border border-red-500 h-full flex flex-col">

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
