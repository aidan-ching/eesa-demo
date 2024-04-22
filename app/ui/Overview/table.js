import "@/app/styles/table.css";

import CompaniesEntry from "@/app/ui/Overview/CompaniesEntry";
import UpsellButton from "@/app/ui/Overview/UpsellButton";
import ChurnriskButton from "@/app/ui/Overview/ChurnriskButton";
import NeutralButton from "@/app/ui/Overview/NeutralButton";
import { BsBuildings } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { PiPath } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiCalendarDate } from "react-icons/ci";

export default function Table() {
  return (
    <div className="overview-table w-[100%] mx-5">
      <table className="w-full table-fixed">
        <thead>
          <tr>
            <th className="w-[4%]">#</th>
            <th className="w-[15%]">
              <div className="flex items-center gap-2">
                <BsBuildings /> Client State
              </div>
            </th>
            <th className="w-[11%]">
              <div className="flex items-center gap-2">
                <CiHeart /> Client State
              </div>
            </th>
            <th className="w-[22%]">
              <div className="flex items-center gap-2">
                <PiPath /> Client State
              </div>
            </th>
            <th className="w-[12%]">
              <div className="flex items-center gap-2">
                <IoPeopleOutline /> Client State
              </div>
            </th>
            <th className="w-[17%]">
              <div className="flex items-center gap-2">
                <CgProfile size={15}/> Client State
              </div>
            </th>
            <th className="w-[17%]">
              <div className="flex items-center gap-2">
                <CiCalendarDate size={20}/> Client State
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
            <td>
              <UpsellButton />
            </td>
            <td className="font-medium">Fifth renewal set for March</td>
            <td className="font-medium">1000</td>
            <td className="font-medium">
              linkedin.com/company/kramer-industries
            </td>
            <td className="font-medium">January 26th, 2023</td>
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
              <UpsellButton />
            </td>
            <td className="font-medium">Waiting for confirmation </td>
            <td className="font-medium">1200</td>
            <td className="font-medium">linkedin.com/company/acme-co</td>
            <td className="font-medium">March 14th, 2023</td>
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
              <ChurnriskButton />
            </td>
            <td className="font-medium">Active</td>
            <td className="font-medium">200</td>
            <td className="font-medium">linkedin.com/company/cloudlink</td>
            <td className="font-medium">October 2nd, 2023</td>
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
              <ChurnriskButton />
            </td>
            <td className="font-medium">Implementation</td>
            <td className="font-medium">540</td>
            <td className="font-medium">linkedin.com/company/precision-tech</td>
            <td className="font-medium">April 5th, 2024</td>
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
              <ChurnriskButton />
            </td>
            <td className="font-medium">Active</td>
            <td className="font-medium">60</td>
            <td className="font-medium">linkedin.com/company/smart-track</td>
            <td className="font-medium">February 6th, 2023</td>
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
              <ChurnriskButton />
            </td>
            <td className="font-medium">Waiting for confirmation</td>
            <td className="font-medium">315</td>
            <td className="font-medium">linkedin.com/company/virtualease</td>
            <td className="font-medium">August 30th, 2023</td>
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
              <NeutralButton />
            </td>
            <td className="font-medium">Recently renewed</td>
            <td className="font-medium">160</td>
            <td className="font-medium">linkedin.com/company/optistore</td>
            <td className="font-medium">February 25th, 2024</td>
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
              <NeutralButton />
            </td>
            <td className="font-medium">Onboarding</td>
            <td className="font-medium">45</td>
            <td className="font-medium">linkedin.com/company/brightscape</td>
            <td className="font-medium">April 17th, 2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
