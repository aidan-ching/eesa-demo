import "@/app/styles/EngagementPlanTable.css";

export default function EngagementPlanTable() {
  return (
    <div className="engagement-table">
      <table className="w-full table-fixed outline-[1px solid #EAECF0]">
        <tbody>
          <tr>
            <td className="w-[60%]">
              <div className="flex flex-row items-center">
                <div className="flex justify-center items-center m-3 w-[30px] h-[30px] border-[3px] font-semibold text-[#D9D9D9] rounded-full">
                  1
                </div>
                <div className="flex flex-col p-3 pb-5">
                  <div className="font-medium text-[12pt]">Email Katherine</div>
                  <div className="font-medium text-[#A3A3A3] text-[10pt]">
                    Introduce your newest AI document feature
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

          <tr>
            <td className="w-[60%]">
              <div className="flex flex-row items-center">
                <div className="flex justify-center items-center m-3 w-[30px] h-[30px] border-[3px] font-semibold text-[#D9D9D9] rounded-full">
                  2
                </div>
                <div className="flex flex-col p-3 pb-5">
                  <div className="font-medium text-[12pt]">
                    Schedule demo meeting
                  </div>
                  <div className="font-medium text-[#A3A3A3] text-[10pt]">
                    Confirm Google Meet timing with Katherine for this week
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

          <tr>
            <td className="w-[60%]">
              <div className="flex flex-row items-center">
                <div className="flex justify-center items-center m-3 w-[35px] h-[30px] border-[3px] font-semibold text-[#D9D9D9] rounded-full">
                  3
                </div>
                <div className="flex flex-col p-3 pb-5">
                  <div className="font-medium text-[12pt]">
                    Prepare demo meeting notes
                  </div>
                  <div className="font-medium text-[#A3A3A3] text-[10pt]">
                    Highlight Kramer Industries use cases for the AI document
                    feature
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

          <tr>
            <td className="w-[60%]">
              <div className="flex flex-row items-center">
                <div className="flex justify-center items-center m-3 w-[35px] h-[30px] border-[3px] font-semibold text-[#D9D9D9] rounded-full">
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

          <tr>
            <td className="w-[60%]">
              <div className="flex flex-row items-center">
                <div className="flex justify-center items-center m-3 w-[30px] h-[30px] border-[3px] font-semibold text-[#D9D9D9] rounded-full">
                  5
                </div>
                <div className="flex flex-col p-3 pb-5">
                  <div className="font-medium text-[12pt]">
                    Follow up with Katherine
                  </div>
                  <div className="font-medium text-[#A3A3A3] text-[10pt]">
                    Send an email asking how the AI feature is working
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
