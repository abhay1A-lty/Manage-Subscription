import React from 'react'

function LandingPage() {
  return (
    <div className="relative w-full min-h-screen bg-white font-poppins text-gray-900">
      {/* Container */}
      <div className="absolute top-[140px] left-[86px] w-[1360px] h-[691px] flex flex-col justify-center items-center gap-8">
        {/* Heading & Subtext */}
        <div className="flex flex-col items-center gap-4 w-[945px] h-[77px]">
          <h1 className="font-extrabold text-[36px] leading-[36px] text-center text-[#353535]">
            Affordable Learning Plans for Every Student
          </h1>
          <div className="w-[195px] h-[3px] bg-[#353535] border-4 border-[#307AED]"></div>
          <p className="font-medium text-[16px] leading-[23px] text-center text-[#353535] w-[945px]">
            Affordable CBSE learning plans for every student, with a 15-day free trial to explore all features before you commit.
          </p>
        </div>

        {/* Buttons for Classes */}
        <div className="flex flex-row items-center gap-6 w-[624px] h-[54px]">
          <button className="flex justify-center items-center px-[94px] py-[17px] gap-2 w-[192px] h-[54px] bg-[#1363DF] border-2 border-[#1158C5] rounded-[16px] text-white font-semibold text-[16px] leading-[20px]">
            Class 6-8
          </button>
          <button className="flex justify-center items-center px-[94px] py-[17px] gap-2 w-[192px] h-[54px] bg-[#F6F9FE] border-2 border-[#E3EDFC] rounded-[16px] text-[#B6CEF7] font-semibold text-[16px] leading-[20px]">
            Class 9-12
          </button>
          <button className="flex justify-center items-center px-[94px] py-[17px] gap-2 w-[192px] h-[54px] bg-[#F6F9FE] border-2 border-[#E3EDFC] rounded-[16px] text-[#B6CEF7] font-semibold text-[16px] leading-[20px]">
            Class 11-12
          </button>
        </div>

        {/* Content Section */}
        <div className="flex flex-row items-center gap-6 w-[1360px] h-[476px]">
          {/* Left Content Box */}
          <div className="relative w-[437px] h-[476px] bg-white border-2 border-[#E3EDFC] rounded-[20px] p-8 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col justify-center items-center px-4 py-3 gap-2 w-[146px] h-[40px] bg-white border-[1.5px] border-[#1363DF] rounded-[80px]">
                <span className="font-semibold text-[14px] leading-[12px] text-center text-[#1363DF]">Recommended</span>
              </div>
              <h2 className="font-bold text-[28px] leading-[28px] text-[#353535]">Subject Learning</h2>
              <p className="font-medium text-[16px] leading-[20px] text-[#353535]">Limited Subjects (more soon)</p>
              <p className="font-medium text-[16px] leading-[22px] text-[#353535]">Past papers (Classes 10 & 12 only)</p>
              <p className="font-medium text-[16px] leading-[20px] text-[#353535]">10+ Mock Exams</p>
              <p className="font-medium text-[16px] leading-[22px] text-[#353535]">AI-graded feedback</p>
            </div>
            <div className="flex flex-col gap-4 w-[229px] h-[92px]">
              <span className="font-bold text-[44px] leading-[40px] text-[#1E1E1E]">₹699/month</span>
              <div className="flex justify-center items-center gap-2 w-[197px] h-[36px] bg-[#E8F0FD] rounded-[20px] text-[#307AED] font-semibold text-[16px] leading-[16px]">
                ₹6999/year – Save 20%
              </div>
            </div>
          </div>

          {/* Right Content Box */}
          <div className="relative w-[815.75px] h-[680px]">
            {/* Background vectors */}
            <div className="absolute left-[4.39%] right-[95.61%] top-0 bottom-0 bg-[#EDF3FD] rounded-lg"></div>
            {/* Additional vector shapes can be added here as needed */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
