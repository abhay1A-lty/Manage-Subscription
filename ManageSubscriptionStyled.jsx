import React from 'react'

function ManageSubscriptionStyled() {
  const billingHistory = [
    { date: "ABC", amount: "₹00000", status: "Paid", invoice: "Download" },
    { date: "ABC", amount: "₹00000", status: "Paid", invoice: "Download" },
    { date: "ABC", amount: "₹00000", status: "Paid", invoice: "Download" },
  ];

  return (
    <div className="max-w-4xl mx-auto border-4 border-[#1e90ff] rounded-md bg-white p-6 sm:p-8">
      <h1 className="text-black font-semibold text-lg sm:text-xl mb-1">
        Manage Subscriptions
      </h1>
      <p className="text-xs text-[#6b7280] mb-6 max-w-3xl">
        Easily control your subscription preferences here – update your plan, change billing info, or cancel anytime with just a few clicks.
      </p>
      <section
        aria-label="Subscription details"
        className="bg-[#f5faff] rounded-md p-4 sm:p-6 mb-8 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-y-2 gap-x-4 max-w-3xl"
      >
        <div className="text-xs text-[#6b7280]">Your Name</div>
        <div className="text-xs font-semibold text-black text-right sm:text-left">
          XYZ
        </div>
        <div className="text-xs text-[#6b7280]">Plan</div>
        <div className="text-xs font-semibold text-black text-right sm:text-left">
          XYZ
        </div>
        <div className="text-xs text-[#6b7280]">Class</div>
        <div className="text-xs font-semibold text-black text-right sm:text-left">XYZ</div>
        <div className="text-xs text-[#6b7280]">Billing Cycle</div>
        <div className="text-xs font-semibold text-black text-right sm:text-left">
          XYZ
        </div>
        <div className="text-xs text-[#6b7280]">Next Billing Date</div>
        <div className="text-xs font-semibold text-black text-right sm:text-left">
          XYZ
        </div>
      </section>
      <section aria-label="Billing History" className="max-w-4xl">
        <h2 className="text-black font-semibold text-sm mb-2">Billing History</h2>
        <table className="w-full border-collapse text-xs text-[#6b7280]">
          <thead>
            <tr className="bg-[#0d6efd] text-white text-left text-[11px]">
              <th className="py-2 px-3 rounded-tl-md">Date</th>
              <th className="py-2 px-3">Amount</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3 rounded-tr-md">Invoice</th>
            </tr>
          </thead>
          <tbody>
            {billingHistory.map(({ date, amount, status, invoice }, i) => (
              <tr
                key={i}
                className="border border-t-0 border-l-0 border-r-0 border-[#d1d5db]"
              >
                <td className="py-2 px-3">{date}</td>
                <td className="py-2 px-3 font-semibold text-black">{amount}</td>
                <td className="py-2 px-3">{status}</td>
                <td className="py-2 px-3 text-[#0d6efd] underline cursor-pointer">{invoice}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 flex justify-end space-x-3 max-w-xs">
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

export default ManageSubscriptionStyled
