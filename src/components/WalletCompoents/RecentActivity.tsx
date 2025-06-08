import { ActiveIcon, CompleteIcon } from "../../Icons/WalletIcons"

const activityData = [
  {
    date: "Apr 14, 2025",
    type: "Gold",
    typeColor: "blue-400",
    typeBg: "bg-blue-500/10",
    asset: "Gold – 50g Bar",
    amount: "$3,421.00",
    status: "Completed",
    statusColor: "text-[#22C55E]",
    statusIcon: <CompleteIcon />,
    statusTextClass: "text-sm",
  },
  {
    date: "Apr 12, 2025",
    type: "Silver",
    typeColor: "text-[#4ADE80]",
    typeBg: "bg-green-900",
    asset: "Silver – 1kg Bar",
    amount: "$1,250.00",
    status: "Active",
    statusColor: "text-[#3B82F6]",
    statusIcon: <ActiveIcon />,
    statusTextClass: "text-xs",
  },
  {
    date: "Apr 10, 2025",
    type: "Gold",
    typeColor: "blue-400",
    typeBg: "bg-blue-500/10",
    asset: "Gold – 100g Bar",
    amount: "$6,842.00",
    status: "Completed",
    statusColor: "text-[#22C55E]",
    statusIcon: <CompleteIcon />,
    statusTextClass: "text-sm",
  },
  {
    date: "Apr 8, 2025",
    type: "Metal",
    typeColor: "text-orange-400",
    typeBg: "bg-orange-500/10",
    asset: "Palladium – 25g Bar",
    amount: "$2,780.00",
    status: "Completed",
    statusColor: "text-[#22C55E]",
    statusIcon: <CompleteIcon />,
    statusTextClass: "text-sm",
  },
  {
    date: "Apr 5, 2025",
    type: "Metal",
    typeColor: "text-orange-400",
    typeBg: "bg-orange-500/10",
    asset: "Platinum – 50g Bar",
    amount: "$3,475.00",
    status: "Completed",
    statusColor: "text-[#22C55E]",
    statusIcon: <CompleteIcon />,
    statusTextClass: "text-sm",
  },
];

function RecentActivity() {
  return (
    <div className="w-full max-w-full flex flex-col justify-start items-start gap-2.5 px-2 md:px-0">
      <div className="self-stretch flex flex-col justify-start items-start gap-6">
        <div className="self-stretch flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
          <div className="w-36 h-7 justify-start text-white text-xl font-bold leading-7">
            Recent Activity
          </div>
          <div className="flex justify-start items-center gap-2">
            <input
              type="checkbox"
              id="show-all-transactions"
              className="w-5 h-5 rounded outline outline-offset-[-2px] outline-color-spring-green-39"
            />
            <label
              htmlFor="show-all-transactions"
              className="justify-start text-[#CBD5E1] text-sm font-normal leading-tight cursor-pointer"
            >
              Show all transactions
            </label>
          </div>
        </div>
        <div className="self-stretch bg-gray-900 rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch flex flex-col justify-center items-start overflow-hidden">
<div className="self-stretch h-auto flex flex-col justify-center items-start">
  {/* Responsive Table */}
  <div className="w-full overflow-x-auto">
    <table className="min-w-[600px] md:min-w-full divide-y divide-gray-800 text-left">
      <thead className="bg-zinc-950">
        <tr>
          <th className="px-4 py-3 text-[#94A3B8] text-sm font-normal">Date</th>
          <th className="px-4 py-3 text-[#94A3B8] text-sm font-normal">Type</th>
          <th className="px-4 py-3 text-[#94A3B8] text-sm font-normal">Asset</th>
          <th className="px-4 py-3 text-[#94A3B8] text-sm font-normal">Amount</th>
          <th className="px-4 py-3 text-[#94A3B8] text-sm font-normal">Status</th>
        </tr>
      </thead>
      <tbody>
        {activityData.map((row, idx) => (
          <tr
            key={idx}
            className="border-b border-Grey-Stroke bg-transparent"
          >
            <td className="px-4 py-3 text-[#CBD5E1] text-sm font-normal whitespace-nowrap">{row.date}</td>
            <td className="px-4 py-3">
              <div className={`px-2 py-1 ${row.typeBg} rounded-full inline-flex items-center gap-1`}>
                <div className={`justify-center ${row.typeColor} text-xs font-normal leading-none`}>{row.type}</div>
              </div>
            </td>
            <td className="px-4 py-3 text-[#CBD5E1] text-sm font-normal whitespace-nowrap">{row.asset}</td>
            <td className="px-4 py-3 text-[#CBD5E1] text-xs font-normal whitespace-nowrap">{row.amount}</td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-1">
                <span>{row.statusIcon}</span>
                <span className={`${row.statusColor} ${row.statusTextClass} font-normal leading-tight`}>{row.status}</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

          </div>
          <div className="self-stretch px-4 py-4 border-t border-color-grey-16 flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="justify-start text-[#94A3B8] text-sm font-normal leading-tight">
              Showing 5 of 28 transactions
            </div>
            <div data-:hover="false" data-variant="1" className="px-3 py-1.5 bg-[#27272A] rounded-lg inline-flex flex-col justify-center items-center">
              <div className="text-center justify-center text-white text-sm font-normal leading-tight">
                View All Transactions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentActivity