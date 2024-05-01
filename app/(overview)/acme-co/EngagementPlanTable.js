import "@/app/(overview)/styles/EngagementPlanTable.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EngagementPlanTable() {
  const router = useRouter();
  const handleClick = (num) => {
    if(num === 1){
      router.replace("/acme-co/detail")
    }

    else if(num===2){
      router.replace("/acme-co/detail/1")
    }

  }

  return (
    <div className="engagement-table">
      <table className="w-full table-fixed outline-[1px solid #EAECF0]">
        <tbody>
          <tr className="hover:bg-[#F4F5FD] cursor-pointer" onClick={() => handleClick(1)}>

              <td className="w-[60%]">
                <div className="flex flex-row items-center">
                  <div className="flex justify-center items-center m-3 min-w-[30px] min-h-[30px] border-[3px] font-semibold text-[#D9D9D9] rounded-full">
                    1
                  </div>
                  <div className="flex flex-col p-3 pb-5">
                    <div className="font-medium text-[12pt]">Email Matt</div>
                    <div className="font-medium text-[#A3A3A3] text-[10pt]">
                      Point out usage and possible improvement to their existing
                      processes
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-medium text-[12pt]">
                <div className="flex justify-center items-center gap-3">
                  <div className="w-[15px] h-[15px] rounded-full bg-[#46CF7D]" />
                  Completed
                </div>
              </td>
          </tr>


            <tr className="hover:bg-[#F4F5FD] cursor-pointer" onClick={() => handleClick(2)}>
              <td className="w-[60%]">
                <div className="flex flex-row items-center">
                  <div className="flex justify-center items-center m-3 min-w-[30px] min-h-[30px] border-[3px] font-semibold text-[#D9D9D9] rounded-full">
                    2
                  </div>
                  <div className="flex flex-col p-3 pb-5">
                    <div className="font-medium text-[12pt]">
                      Schedule demo meeting
                    </div>
                    <div className="font-medium text-[#A3A3A3] text-[10pt]">
                      Confirm Google Meet with Matt for April 28th at 2pm PST
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-medium text-[12pt]">
                <div className="flex justify-center items-center gap-3">
                  <div className="w-[15px] h-[15px] rounded-full bg-[#3B01E3]" />

                  <div>Awaiting Approval</div>
                </div>
              </td>
            </tr>

          <tr className="hover:bg-[#F4F5FD] cursor-pointer">
            <td className="w-[60%]">
              <div className="flex flex-row items-center">
                <div className="flex justify-center items-center m-3 min-w-[30px] min-h-[30px] border-[3px] font-semibold text-[#D9D9D9] rounded-full">
                  3
                </div>
                <div className="flex flex-col p-3 pb-5">
                  <div className="font-medium text-[12pt]">
                    Prepare demo meeting notes
                  </div>
                  <div className="font-medium text-[#A3A3A3] text-[10pt]">
                    Highlight ACME Co’s successful milestones and how further
                    ones can be achieved
                  </div>
                </div>
              </div>
            </td>
            <td className="font-medium text-[12pt]">
              <div className="flex justify-center items-center gap-3">
                <div className="w-[15px] h-[15px] rounded-full bg-[#ED8D5C]" />
                Pending
              </div>
            </td>
          </tr>

          <tr className="hover:bg-[#F4F5FD] cursor-pointer">
            <td className="w-[60%]">
              <div className="flex flex-row items-center">
                <div className="flex justify-center items-center m-3 min-w-[30px] min-h-[30px] border-[3px] font-semibold text-[#D9D9D9] rounded-full">
                  4
                </div>
                <div className="flex flex-col p-3 pb-5">
                  <div className="font-medium text-[12pt]">
                    Coordinate with technical team
                  </div>
                  <div className="font-medium text-[#A3A3A3] text-[10pt]">
                    Delegate and ensure accurate implementation of the clients
                    needs
                  </div>
                </div>
              </div>
            </td>
            <td className="font-medium text-[12pt]">
              <div className="flex justify-center items-center gap-3">
                <div className="w-[15px] h-[15px] rounded-full bg-[#ED8D5C]" />
                Pending
              </div>
            </td>
          </tr>

          <tr className="hover:bg-[#F4F5FD] cursor-pointer">
            <td className="w-[60%]">
              <div className="flex flex-row items-center">
                <div className="flex justify-center items-center m-3 min-w-[30px] min-h-[30px] border-[3px] font-semibold text-[#D9D9D9] rounded-full">
                  5
                </div>
                <div className="flex flex-col p-3 pb-5">
                  <div className="font-medium text-[12pt]">
                    Follow up with Matt
                  </div>
                  <div className="font-medium text-[#A3A3A3] text-[10pt]">
                    Send an email with post-meeting documentation
                  </div>
                </div>
              </div>
            </td>
            <td className="font-medium text-[12pt]">
              <div className="flex justify-center items-center gap-3">
                <div className="w-[15px] h-[15px] rounded-full bg-[#ED8D5C]" />
                Pending
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
