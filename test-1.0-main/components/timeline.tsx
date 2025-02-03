import React from "react";
import { FaUserCircle, FaSearch, FaInfoCircle, FaFileAlt } from "react-icons/fa";

const Timeline: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-300">
      {/* Top bar */}
      <header className="flex items-center justify-between bg-[#7DADEB] px-6 py-3">
        {/* Left: Dr info */}
        <div className="flex items-center space-x-3">
          <FaUserCircle className="text-white text-3xl" />
          <div className="leading-tight">
            <h1 className="text-white text-lg font-semibold">Dr. #####</h1>
            <p className="text-white text-sm">Surgeon</p>
          </div>
        </div>
        
        {/* Middle: Title */}
        <h2 className="text-xl font-semibold text-white">My Timeline</h2>
        {/* Right: Search Icon */}
        <FaSearch className="text-white text-2xl cursor-pointer" />
      </header>

      {/* Main timeline container */}
      {/* Removed max-w-5xl so it can stretch, added px-8 for left/right padding */}
      <div className="relative w-full px-8 pt-6 pb-20 h-auto">
        {/* The vertical line down the middle */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-600" />

        {/* ========== OCTOBER ========== */}
        <div className="relative mb-20 flex">
          {/* Month label at center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 bg-gray-700 text-white text-sm px-3 py-1 rounded-full">
            October
          </div>

          {/* Left “placeholder” box (enlarged) */}
          <div className="flex-1 flex justify-end pr-6">
            <div className="w-72 h-36 bg-[#B5D2FF] rounded-md flex items-center justify-center">
              {/* Placeholder shape */}
            </div>
          </div>

          {/* Connector line to the center */}
          <div className="w-0 flex-none relative">
            <div className="absolute right-0 top-16 w-6 h-[2px] bg-gray-600" />
          </div>

          {/* Right details card (enlarged) */}
          <div className="flex-1 pl-6">
            <div className="relative w-[32rem] bg-[#B5D2FF] rounded-md p-6">
              {/* “NOTES” bar on the right (vertical) */}
              <div className="absolute top-0 right-0 h-full w-12 bg-[#1a2e4b] rounded-tr-md rounded-br-md flex flex-col items-center justify-center">
                <span className="text-white font-bold tracking-widest rotate-90">
                  NOTES
                </span>
              </div>

              {/* Example content inside the card (larger) */}
              <div className="flex items-center justify-between mb-5">
                <div className="bg-[#E1ECF7] p-3 rounded-md w-60 text-xl">
                  WBC ‐ LLRC ‐ <br /> Unit Reading ‐
                </div>
                <div className="flex items-center space-x-3">
                  <FaFileAlt className="text-gray-700 text-3xl" />
                  <span className="text-xl">report.pdf</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-2xl">
                <span className="font-semibold">Lab Notes</span>
                <FaInfoCircle title="More info" className="text-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* ========== NOVEMBER ========== */}
        <div className="relative mb-20 flex">
          {/* Month label at center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 bg-gray-700 text-white text-sm px-3 py-1 rounded-full">
            November
          </div>

          {/* Left “placeholder” box (enlarged) */}
          <div className="flex-1 flex justify-end pr-6">
            <div className="w-72 h-36 bg-[#B5D2FF] rounded-md flex items-center justify-center">
              {/* Another placeholder shape */}
            </div>
          </div>

          {/* Connector line to the center */}
          <div className="w-0 flex-none relative">
            <div className="absolute right-0 top-16 w-6 h-[2px] bg-gray-600" />
          </div>

          {/* Right details card (enlarged) */}
          <div className="flex-1 pl-6">
            <div className="relative w-[32rem] bg-[#B5D2FF] rounded-md p-6">
              {/* “NOTES” bar on the right */}
              <div className="absolute top-0 right-0 h-full w-12 bg-[#1a2e4b] rounded-tr-md rounded-br-md flex flex-col items-center justify-center">
                <span className="text-white font-bold tracking-widest rotate-90">
                  NOTES
                </span>
              </div>

              {/* Example content (slightly larger than before) */}
              <div className="flex items-center justify-between mb-5">
                <div className="bg-[#E1ECF7] p-3 rounded-md w-60 text-xl">
                  WBC ‐ LLRC ‐ <br /> Unit Reading ‐
                </div>
                <div className="flex items-center space-x-3">
                  <FaFileAlt className="text-gray-700 text-3xl" />
                  <span className="text-xl">report.pdf</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-2xl">
                <span className="font-semibold">Lab Notes</span>
                <FaInfoCircle title="More info" className="text-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* ========== DECEMBER ========== */}
        <div className="relative mb-20 flex">
          {/* Month label at center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 bg-gray-700 text-white text-sm px-3 py-1 rounded-full">
            December
          </div>

          {/* Left “placeholder” box (enlarged) */}
          <div className="flex-1 flex justify-end pr-6">
            <div className="w-72 h-36 bg-[#B5D2FF] rounded-md flex items-center justify-center">
              {/* Another placeholder shape */}
            </div>
          </div>

          {/* Connector line to the center */}
          <div className="w-0 flex-none relative">
            <div className="absolute right-0 top-16 w-6 h-[2px] bg-gray-600" />
          </div>

          {/* Right details card (enlarged) */}
          <div className="flex-1 pl-6">
            <div className="relative w-[32rem] bg-[#B5D2FF] rounded-md p-6">
              {/* “NOTES” bar on the right */}
              <div className="absolute top-0 right-0 h-full w-12 bg-[#1a2e4b] rounded-tr-md rounded-br-md flex flex-col items-center justify-center">
                <span className="text-white font-bold tracking-widest rotate-90">
                  NOTES
                </span>
              </div>

              {/* Example content (enlarged) */}
              <div className="flex items-center justify-between mb-5">
                <div className="bg-[#E1ECF7] p-3 rounded-md w-60 text-xl">
                  WBC ‐ LLRC ‐ <br /> Unit Reading ‐
                </div>
                <div className="flex items-center space-x-3">
                  <FaFileAlt className="text-gray-700 text-3xl" />
                  <span className="text-xl">report.pdf</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-2xl">
                <span className="font-semibold">Lab Notes</span>
                <FaInfoCircle title="More info" className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
