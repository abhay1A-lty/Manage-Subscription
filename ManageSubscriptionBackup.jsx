import React from 'react'

function ManageSubscription() {
  const billingHistory = [
    { date: "ABC", amount: "₹00000", status: "Paid", invoice: "Download" },
    { date: "ABC", amount: "₹00000", status: "Paid", invoice: "Download" },
    { date: "ABC", amount: "₹00000", status: "Paid", invoice: "Download" },
  ];

  return (
    <div className="max-w-4xl mx-auto border-4 border-[#1e90ff] rounded-md bg-white p-6 sm:p-8 font-sans text-gray-900">
      <h1 className="text-black font-semibold text-lg sm:text-xl mb-1">
        Manage Subscriptions
      </h1>
      <p className="text-xs text-[#6b7280] mb-6 max-w-3xl">
        Easily control your subscription preferences here – update your plan, change billing info, or cancel anytime with just a few clicks.
      </p>
      <section
        aria-label="Subscription details"
        className="bg-[#f5faff] rounded-md p-4 sm:p-6 mb-8 max-w-3xl"
      >
        <div className="flex justify-between text-xs text-[#6b7280] mb-1 border border-gray-300 rounded px-2 py-1">
          <div className="text-[#6b7280]">Your Name</div>
          <div className="font-semibold text-[#111827] px-2 py-1 border border-gray-300 rounded">XYZ</div>
        </div>
        <div className="flex justify-between text-xs text-[#6b7280] mb-1">
          <div>Plan</div>
          <div className="font-semibold text-black">XYZ</div>
        </div>
        <div className="flex justify-between text-xs text-[#6b7280] mb-1">
          <div>Class</div>
          <div className="font-semibold text-black">XYZ</div>
        </div>
        <div className="flex justify-between text-xs text-[#6b7280] mb-1">
          <div>Billing Cycle</div>
          <div className="font-semibold text-black">XYZ</div>
        </div>
        <div className="flex justify-between text-xs text-[#6b7280] mb-1">
          <div>Next Billing Date</div>
          <div className="font-semibold text-black">XYZ</div>
        </div>
      </section>
      <section aria-label="Billing History" className="max-w-4xl">
        <h2 className="text-black font-semibold text-sm mb-2">Billing History</h2>
        <table className="w-full border-collapse border border-gray-300 text-xs text-[#6b7280]">
          <thead>
            <tr className="bg-[#0d6efd] text-white text-left text-[11px]">
              <th className="py-2 px-3 rounded-tl-md border border-gray-300">Date</th>
              <th className="py-2 px-3 border border-gray-300">Amount</th>
              <th className="py-2 px-3 border border-gray-300">Status</th>
              <th className="py-2 px-3 rounded-tr-md border border-gray-300">Invoice</th>
            </tr>
          </thead>
          <tbody>
            {billingHistory.map(({ date, amount, status, invoice }, i) => (
              <tr
                key={i}
                className="border border-gray-300"
              >
                <td className="py-2 px-3 border border-gray-300">{date}</td>
                <td className="py-2 px-3 font-semibold text-black border border-gray-300">{amount}</td>
                <td className="py-2 px-3 border border-gray-300">{status}</td>
                <td className="py-2 px-3 text-[#0d6efd] underline cursor-pointer border border-gray-300">{invoice}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="fixed bottom-4 right-4 flex justify-end space-x-3 max-w-xs bg-white p-4 rounded shadow-lg">
          <button
            type="button"
            className="text-[#0d6efd] bg-[#dbeafe] text-xs font-normal rounded-md px-3 py-1.5 hover:bg-[#c7ddfc] focus:outline-none"
          >
            Cancel Plan
          </button>
          <button
            type="button"
            className="bg-[#0d6efd] text-white text-xs font-normal rounded-md px-4 py-1.5 hover:bg-[#0b5ed7] focus:outline-none"
          >
            Manage Subscription
          </button>
        </div>
      </section>
    </div>
  )
}

export default ManageSubscription
