import "@/app/(overview)/styles/table.css";

import CompaniesEntry from "@/app/(overview)/ui/Overview/CompaniesEntry";
import UpsellButton from "@/app/(overview)/ui/Overview/UpsellButton";
import ChurnriskButton from "@/app/(overview)/ui/Overview/ChurnriskButton";
import NeutralButton from "@/app/(overview)/ui/Overview/NeutralButton";
import { BsBuildings } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { PiPath } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiCalendarDate } from "react-icons/ci";

export default function Table() {
  return (
    <div className="overview-table w-[100%] mx-5 overflow_fix">
      <table className="w-full table-fixed">
        <thead>
          <tr>
            <th className="w-[4%]">#</th>
            <th className="w-[15%]">
              <div className="flex items-center gap-2">
                <BsBuildings /> Companies
              </div>
            </th>
            <th className="w-[11%]">
              <div className="flex items-center gap-2">
                <CiHeart /> Client State
              </div>
            </th>
            <th className="w-[22%]">
              <div className="flex items-center gap-2">
                <PiPath /> Stage
              </div>
            </th>
            <th className="w-[12%]">
              <div className="flex items-center gap-2">
                <IoPeopleOutline /> Employees
              </div>
            </th>
            <th className="w-[17%]">
              <div className="flex items-center gap-2">
                <CgProfile size={15}/> LinkedIn
              </div>
            </th>
            <th className="w-[17%]">
              <div className="flex items-center gap-2">
                <CiCalendarDate size={20}/> Date Added
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <CompaniesEntry
                name="Kramer Industries"
                url="kramer.co"
                logoUrl="/kramer-logo.png"
                href="/kramer-industries"
              />
            </td>
            <td >
              <div className="flex justify-center items-center h-full"> <UpsellButton /></div>
             
            </td>
            <td>Fifth renewal set for March</td>
            <td>1000</td>
            <td>
              linkedin.com/company/kramer-industries
            </td>
            <td>January 26th, 2023</td>
          </tr>

          <tr>
            <td>2</td>
            <td>
              <CompaniesEntry
                name="ACME Co"
                url="acme.co"
                logoUrl="/acme-logo.png"
                href="/acme-co"
              />
            </td>
            <td>
            <div className="flex justify-center items-center h-full"> <UpsellButton /></div>
            </td>
            <td>Waiting for confirmation </td>
            <td>1200</td>
            <td>linkedin.com/company/acme-co</td>
            <td>March 14th, 2023</td>
          </tr>

          <tr>
            <td>3</td>
            <td>
              <CompaniesEntry
                name="Cloudlink"
                url="cloudlink.com"
                logoUrl="/cloudlink.png"
              />
            </td>
            <td>
            <div className="flex justify-center items-center h-full"> <ChurnriskButton /></div>
            </td>
            <td>Active</td>
            <td>200</td>
            <td>linkedin.com/company/cloudlink</td>
            <td>October 2nd, 2023</td>
          </tr>

          <tr>
            <td>4</td>
            <td>
              <CompaniesEntry
                name="Precision Tech"
                url="precisiontech.co"
                logoUrl="/precision.png"
              />
            </td>
            <td>
            <div className="flex justify-center items-center h-full"> <ChurnriskButton /></div>
            </td>
            <td>Implementation</td>
            <td>540</td>
            <td>linkedin.com/company/precision-tech</td>
            <td>April 5th, 2024</td>
          </tr>

          <tr>
            <td>5</td>
            <td>
              <CompaniesEntry
                name="Smart Track"
                url="smarttrack.com"
                logoUrl="/smarttrack.png"
              />
            </td>
            <td>
            <div className="flex justify-center items-center h-full"> <ChurnriskButton /></div>
            </td>
            <td>Active</td>
            <td>60</td>
            <td>linkedin.com/company/smart-track</td>
            <td>February 6th, 2023</td>
          </tr>

          <tr>
            <td>6</td>
            <td>
              <CompaniesEntry
                name="VirtualEase"
                url="virtualease.co"
                logoUrl="/virtualease.png"
              />
            </td>
            <td>
            <div className="flex justify-center items-center h-full"> <ChurnriskButton /></div>
            </td>
            <td>Waiting for confirmation</td>
            <td>315</td>
            <td>linkedin.com/company/virtualease</td>
            <td>August 30th, 2023</td>
          </tr>

          <tr>
            <td>7</td>
            <td>
              <CompaniesEntry
                name="OptiStore"
                url="optistore.com"
                logoUrl="/optistore.png"
              />
            </td>
            <td>
            <div className="flex justify-center items-center h-full"> <NeutralButton /></div>
            </td>
            <td>Recently renewed</td>
            <td>160</td>
            <td>linkedin.com/company/optistore</td>
            <td>February 25th, 2024</td>
          </tr>

          <tr>
            <td>8</td>
            <td>
              <CompaniesEntry
                name="BrightScape"
                url="brightscape.com"
                logoUrl="/brightscape.png"
              />
            </td>
            <td>
            <div className="flex justify-center items-center h-full"> <NeutralButton /></div>
            </td>
            <td>Onboarding</td>
            <td>45</td>
            <td>linkedin.com/company/brightscape</td>
            <td>April 17th, 2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
