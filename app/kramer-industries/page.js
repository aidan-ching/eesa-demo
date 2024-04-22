"use client";

import Image from "next/image";
import { BsLightningChargeFill } from "react-icons/bs";
import { PiPath } from "react-icons/pi";
import { CiCircleCheck } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";
import { IoMdInformationCircleOutline } from "react-icons/io";
import clsx from "clsx";

import RelevantMetrics from "@/app/kramer-industries/RelevantMetrics";
import DetailView from "@/app/kramer-industries/DetailView";

import { useState } from "react";

import EngagementPlanTable from "@/app/kramer-industries/EngagementPlanTable";
export default function Page() {
  const [view, setView] = useState("metrics");

  const handleViewChange = (view) => {
    setView(view);
  };

  return (
    <div className="flex">
      <div className="w-[40%] h-full border-r">
        <div>
          <div className="flex flex-row p-5 items-center">
            <Image
              src="/kramer-logo.png"
              width={60}
              height={60}
              alt="company logo"
              className="shadow-lg rounded p-2 m-3"
            />
            <div>
              <div className="font-bold text-[16pt] text-[#191B4C]">
                Kramer Industries
              </div>
              <div className="bg-[#E9FEF0] text-[#37A764] flex justify-center px-3 py-1 text-[13pt] font-medium rounded">
                Upsell Opportunity
              </div>
            </div>
          </div>

          <div className="border-b flex flex-row justify-end">
            <button className="bg-[#3B01E3] text-white flex flex-row justify-between items-center font-medium px-3 py-1 rounded gap-3 m-3">
              <BsLightningChargeFill size={18} className="" />
              Eesa Pilot
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-between border-b text-[#2C2C2C]">
          <div className="flex flex-row items-center gap-3 font-medium p-4">
            <PiPath size={20} /> Engagement Plan
          </div>
          <div className="flex flex-row items-center mr-20 gap-3 font-medium p-4">
            {" "}
            <CiCircleCheck size={25} /> Status
          </div>
        </div>

        <div className="w-full">
          <EngagementPlanTable />
        </div>
      </div>

      <div className="flex flex-col items-center w-[60%]">
        <div className="w-[90%]">
        <div className="flex flex-row mt-5 mb-16 bg-[#f1f1f1] font-medium text-[#666666] p-1.5 gap-1 rounded w-[335px]">
          <button
            className={clsx(
              "flex flex-row items-center gap-2 p-1 px-3 rounded transition duration-200 ease-in",
              {
                "bg-white": view === "metrics",
              }
            )}
            onClick={() => handleViewChange("metrics")}
          >
            <ImStatsDots />
            Relevant Metrics
          </button>
          <button
            className={clsx(
              "flex flex-row items-center gap-2 p-1 px-3 rounded transition duration-200 ease-in",
              {
                "bg-white": view === "detail",
              }
            )}
            onClick={() => handleViewChange("detail")}
          >
            <IoMdInformationCircleOutline size={25} /> Detail View
          </button>
        </div>
        {view === "metrics" && <RelevantMetrics />}
        {view === "detail" && <DetailView />}
      </div>

        </div>
      </div>
  );
}
