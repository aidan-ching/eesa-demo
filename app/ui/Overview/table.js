
import "@/app/styles/table.css";

import CompaniesEntry from "@/app/ui/Overview/CompaniesEntry";
import UpsellButton from "@/app/ui/Overview/UpsellButton";
import ChurnriskButton from "@/app/ui/Overview/ChurnriskButton";
import NeutralButton from "@/app/ui/Overview/NeutralButton";

export default function Table() {
  return (
    <div className="overview-table w-[100%] mx-5">
      <table className="w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Companies</th>
            <th>Client State</th>
            <th>Stage</th>
            <th>Employees</th>
            <th>LinkedIn</th>
            <th>Date Added</th>
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
                logoUrl="/eesa_logo.png"
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
                logoUrl="/eesa_logo.png"
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
                logoUrl="/eesa_logo.png"
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
                logoUrl="/eesa_logo.png"
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
                logoUrl="/eesa_logo.png"
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
                logoUrl="/eesa_logo.png"
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
