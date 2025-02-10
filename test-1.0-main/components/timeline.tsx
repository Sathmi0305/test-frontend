import React from "react";
import { 
  User, 
  Search, 
  Share2, 
  Home, 
  BarChart, 
  Bell, 
  Settings, 
  FileText 
} from "lucide-react";

const Timeline = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-16 bg-white shadow-lg flex flex-col items-center py-4 space-y-8">
        <div className="mb-8">
          <Share2 className="text-gray-500" size={20} />
        </div>
        <div className="space-y-8">
          <Home className="text-gray-500" size={20} />
          <BarChart className="text-gray-500" size={20} />
          <Bell className="text-gray-500" size={20} />
          <Settings className="text-gray-500" size={20} />
        </div>
        <div className="mt-auto">
          <User className="text-gray-500" size={20} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Header */}
        <div className="bg-[#7DADEB] p-4 rounded-lg mx-4 mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <User className="text-white" size={24} />
            <div>
              <p className="text-white text-sm font-medium">Dr. #####</p>
              <p className="text-white text-xs">Surgeon</p>
            </div>
          </div>
          
          <h1 className="text-white text-lg font-medium">My Timeline</h1>
          
          <Search className="text-white" size={20} />
        </div>

        {/* Timeline Content */}
        <div className="relative mx-4 mt-8">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 h-full w-0.5 bg-gray-300" />

          {/* Timeline Items */}
          {['October', 'November'].map((month, index) => (
            <div key={month} className="relative mb-12">
              {/* Month Label */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                {month}
              </div>

              <div className="flex items-center">
                {/* Left Card - Prescription */}
                <div className="w-1/2 pr-8 flex justify-end">
                  <div className="bg-[#E1ECF7] rounded-lg p-4 w-64 h-32 shadow-md">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-medium">Prescription</p>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <p className="text-xs text-gray-600">
                        {index === 0 ? '15/10/2024' : '02/11/2024'}
                      </p>
                      <Share2 className="text-gray-600" size={16} />
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                <div className="w-4 h-0.5 bg-gray-300 absolute left-1/2" />

                {/* Right Card - Lab Notes */}
                <div className="w-1/2 pl-8">
                  <div className="bg-[#B5D2FF] rounded-lg w-80 h-32 shadow-md relative">
                    {/* Notes Label */}
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-[#1a2e4b] rounded-r-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold tracking-wider transform rotate-90">
                        NOTES
                      </span>
                    </div>

                    <div className="p-4">
                      <div className="flex justify-between items-start pr-16">
                        <div className="bg-[#E1ECF7] p-2 rounded-md">
                          <p className="text-xs">
                            WBC - <br />
                            LLRC - <br />
                            Unit Reading -
                          </p>
                        </div>
                        <div className="flex flex-col items-center">
                          <FileText className="text-gray-600 mb-1" size={20} />
                          <p className="text-xs">report.pdf</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pr-16">
                        <p className="text-xs text-gray-600">Lab Notes</p>
                        <Share2 className="text-gray-600" size={16} />
                        <p className="text-xs text-gray-600">
                          {index === 0 ? '15/10/2024' : '02/11/2024'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;