export default function MetricCard({ heading, subheader, body }) {
  return (
    <div className="w-[400px] h-[200px] shadow-xl p-6 flex flex-col">
      <div>
        <div className="font-semibold text-[20pt] text-[#333333]">
          {heading}
        </div>
        <div className="font-medium text-[13pt] text-[#666666]">
          {subheader}
        </div>
      </div>

      <div className="grow"/>

      <div className="font-medium text-[10pt] text-[#5F6384]">
        {body}
      </div>
    </div>
  );
}
