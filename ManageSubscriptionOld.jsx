import React from 'react'

function ManageSubscription() {
  const billingHistory = [
    { date: "ABC", amount: "₹00000", status: "Paid", invoice: "Download" },
    { date: "ABC", amount: "₹00000", status: "Paid", invoice: "Download" },
    { date: "ABC", amount: "₹00000", status: "Paid", invoice: "Download" },
  ];

  return (
    <div className="max-w-2xl mx-auto border border-gray-300 rounded-lg bg-white p-12 shadow-lg font-sans text-gray-800">
      <h1 className="font-extrabold text-3xl mb-6 text-gray-900">
        Manage Subscriptions
      </h1>
      <p className="text-base mb-12 max-w-xl text-gray-600">
        Easily control your subscription preferences here – update your plan, change billing info, or cancel anytime with just a few clicks.
      </p>
      <section
        aria-label="Subscription details"
        className="bg-gray-50 rounded-lg p-8 mb-14 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-y-5 gap-x-10 max-w-xl"
      >
        <div className="text-base text-gray-600">Your Name</div>
        <div className="text-base font-semibold text-gray-900 text-right sm:text-left">
          XYZ
        </div>
        <div className="text-base text-gray-600">Plan</div>
        <div className="text-base font-semibold text-gray-900 text-right sm:text-left">
          XYZ
        </div>
        <div className="text-base text-gray-600">Class</div>
        <div className="text-base font-semibold text-gray-900 text-right sm:text-left">XYZ</div>
        <div className="text-base text-gray-600">Billing Cycle</div>
        <div className="text-base font-semibold text-gray-900 text-right sm:text-left">
          XYZ
        </div>
        <div className="text-base text-gray-600">Next Billing Date</div>
        <div className="text-base font-semibold text-gray-900 text-right sm:text-left">
          XYZ
        </div>
      </section>
      <section aria-label="Billing History" className="max-w-2xl">
        <h2 className="font-extrabold text-xl mb-6 text-gray-900">Billing History</h2>
        <table className="w-full border-collapse text-base text-gray-700">
          <thead>
            <tr className="bg-blue-600 text-white text-left text-base">
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
                className="border border-t-0 border-l-0 border-r-0 border-gray-300"
              >
                <td className="py-4 px-6">{date}</td>
                <td className="py-4 px-6 font-semibold text-gray-900">{amount}</td>
                <td className="py-4 px-6">{status}</td>
                <td className="py-4 px-6 text-blue-600 underline cursor-pointer">{invoice}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-12 flex justify-end space-x-6 max-w-xs">
          <button
            type="button"
            className="text-blue-600 bg-blue-100 text-base font-semibold rounded-lg px-6 py-3 hover:bg-blue-200 focus:outline-none"
          >
            Cancel Plan
          </button>
          <button
            type="button"
            className="bg-blue-600 text-white text-base font-semibold rounded-lg px-8 py-3 hover:bg-blue-800 focus:outline-none"
          >
            Manage Subscription
          </button>
        </div>
      </section>
    </div>
  )
}

export default ManageSubscription
