import React from 'react'

function ManageSubscription() {
  const billingHistory = [
    { date: "ABC", amount: "₹00000", status: "Paid", invoice: "Download" },
    { date: "ABC", amount: "₹00000", status: "Paid", invoice: "Download" },
    { date: "ABC", amount: "₹00000", status: "Paid", invoice: "Download" },
  ];

  return (
    <div className="max-w-4xl mx-auto border-4 border-[#307AED] rounded-md bg-white p-8 font-sans text-[#353535]">
      <h1 className="font-extrabold text-3xl mb-6 text-[#353535]">
        Manage Subscriptions
      </h1>
      <p className="text-base mb-12 max-w-xl text-[#6b7280]">
        Easily control your subscription preferences here – update your plan, change billing info, or cancel anytime with just a few clicks.
      </p>
      <section
        aria-label="Subscription details"
        className="bg-[#F6F9FE] rounded-lg p-8 mb-14 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-y-5 gap-x-10 max-w-xl"
      >
        <div className="text-base text-[#6b7280]">Your Name</div>
        <div className="text-base font-semibold text-[#353535] text-right sm:text-left border border-[#E3EDFC] rounded px-3 py-1">
          XYZ
        </div>
        <div className="text-base text-[#6b7280]">Plan</div>
        <div className="text-base font-semibold text-[#353535] text-right sm:text-left border border-[#E3EDFC] rounded px-3 py-1">
          XYZ
        </div>
        <div className="text-base text-[#6b7280]">Class</div>
        <div className="text-base font-semibold text-[#353535] text-right sm:text-left border border-[#E3EDFC] rounded px-3 py-1">XYZ</div>
        <div className="text-base text-[#6b7280]">Billing Cycle</div>
        <div className="text-base font-semibold text-[#353535] text-right sm:text-left border border-[#E3EDFC] rounded px-3 py-1">
          XYZ
        </div>
        <div className="text-base text-[#6b7280]">Next Billing Date</div>
        <div className="text-base font-semibold text-[#353535] text-right sm:text-left border border-[#E3EDFC] rounded px-3 py-1">
          XYZ
        </div>
      </section>
      <section aria-label="Billing History" className="max-w-xl">
        <h2 className="font-extrabold text-xl mb-6 text-[#353535]">Billing History</h2>
        <table className="w-full border-collapse border border-[#E3EDFC] text-base text-[#6b7280]">
          <thead>
            <tr className="bg-[#307AED] text-white text-left text-base">
              <th className="py-4 px-6 rounded-tl-lg">Date</th>
              <th className="py-4 px-6">Amount</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6 rounded-tr-lg">Invoice</th>
            </tr>
          </thead>
          <tbody>
            {billingHistory.map(({ date, amount, status, invoice }, i) => (
              <tr
                key={i}
                className="border border-t-0 border-l-0 border-r-0 border-[#E3EDFC]"
              >
                <td className="py-4 px-6">{date}</td>
                <td className="py-4 px-6 font-semibold text-[#353535]">{amount}</td>
                <td className="py-4 px-6">{status}</td>
                <td className="py-4 px-6 text-[#307AED] underline cursor-pointer">{invoice}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-12 flex justify-end space-x-6 max-w-xs">
          <button
            type="button"
            className="text-[#307AED] bg-[#E8F0FD] text-base font-semibold rounded-lg px-6 py-3 hover:bg-[#c7ddfc] focus:outline-none"
          >
            Cancel Plan
          </button>
          <button
            type="button"
            className="bg-[#307AED] text-white text-base font-semibold rounded-lg px-8 py-3 hover:bg-[#0b5ed7] focus:outline-none"
          >
            Manage Subscription
          </button>
        </div>
      </section>
    </div>
  )
}

export default ManageSubscription
