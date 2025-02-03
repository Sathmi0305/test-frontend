import React from "react";
import {
  FaUser,
  FaChartBar,
  FaFlask,
  FaEnvelope,
  FaBell,
  FaCog,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaUserMd,

} from "react-icons/fa";     // Example icons

const PatientDashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen font-sans bg-white">
      {/* ========== LEFT SIDEBAR ========== */}
      <aside className="w-60 border-r border-gray-300 bg-white flex flex-col items-start">
        {/* Logo */}
        <div className="p-4 mb-6">
          <h1 className="text-2xl font-bold text-blue-500">CuraSync</h1>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col space-y-4 w-full px-4">
          <SidebarItem icon={<FaUser />} label="Patient" />
          <SidebarItem icon={<FaUserMd />} label="Doctor" />
          <SidebarItem icon={<FaChartBar />} label="TimeLine" />
          <SidebarItem icon={<FaFlask />} label="Visualization" />
          <SidebarItem icon={<FaEnvelope />} label="Messaging" />
          <SidebarItem icon={<FaBell />} label="Notification" />
          <SidebarItem icon={<FaCog />} label="Settings" />
        </nav>
      </aside>

      {/* ========== MAIN CONTENT WRAPPER ========== */}
      <div className="flex-1 flex flex-col">
        {/* ========== TOP NAVBAR ========== */}
        <header className="flex items-center justify-between bg-white shadow-md py-3 px-6 border-b border-gray-100">
          {/* Center Nav Links */}
          <div className="flex space-x-6">
            <a className="text-gray-700 hover:text-blue-500" href="#">
              Home
            </a>
            <a className="text-gray-700 hover:text-blue-500" href="#">
              About Us
            </a>
            <a className="text-gray-700 hover:text-blue-500" href="#">
              Our Services
            </a>
            <a className="text-gray-700 hover:text-blue-500" href="#">
              Contact
            </a>
          </div>

          {/* Right Social Icons + Patient Button */}
          <div className="flex items-center space-x-4">
            <FaTwitter className="text-gray-600 hover:text-blue-500 cursor-pointer" />
            <FaFacebookF className="text-gray-600 hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="text-gray-600 hover:text-pink-500 cursor-pointer" />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
              Patient
            </button>
          </div>
        </header>


      {/* ========== MESSAGING SECTION ========== */}
      <div className="flex-1 bg-[#E9F2FF] flex flex-col">
        {/* Top Buttons: Chat with Doctor, etc. */}
        <div className="p-6">
          <div className="flex justify-around mb-6">
            <button className="px-6 py-3 bg-[#7DADEB] text-white rounded-md shadow-md hover:bg-blue-500 transition flex items-center gap-2">
              &#9689; Chat with Doctor
            </button>
            <button className="px-6 py-3 bg-[#7DADEB] text-white rounded-md shadow-md hover:bg-blue-500 transition flex items-center gap-2">
              &#9689; Chat with Pharmacist
            </button>
            <button className="px-6 py-3 bg-[#7DADEB] text-white rounded-md shadow-md hover:bg-blue-500 transition flex items-center gap-2">
              &#9689; Chat with Laboratory
            </button>
          </div>
        </div>

        {/* The scrollable chat area */}
        <div className="flex-1 overflow-y-auto px-7 pb-8 relative">
          {/* Example chat bubbles */}
          <div className="h-full w-full bg-[#E9F2FF]">
            {/* Left bubble (example) */}
            <div className="bg-[#3B7D9B] text-white px-4 py-2 rounded-md max-w-sm mb-4">
              ##### (Chat bubble text)
            </div>

            {/* Right bubble with PDF (example) */}
            <div className="flex justify-end mb-4">
              <div className="bg-[#3B7D9B] text-white px-4 py-3 rounded-md max-w-sm flex items-center gap-2">
                <div className="bg-white p-2 rounded">
                  <span className="text-gray-700">PDF</span>
                </div>
                <p>report.pdf</p>
              </div>
            </div>
            {/* Add as many chat bubbles as needed... */}
          </div>
        </div>

        {/* Bottom Chat Bar (pinned to bottom of the page layout) */}
        <div className="bg-[#7DADEB] p-4 flex items-center gap-2">
          {/* Attach Button */}
          <button className="bg-white text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200">
            + Attach Report
          </button>
          {/* Message Input */}
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-full outline-none"
            placeholder="Message"
          />
          {/* Send Button */}
          <button className="bg-white text-[#7DADEB] w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-200 text-xl">
            &#9993;
          </button>
        </div>
      </div>
    </div>
  </div>
    
  );
};

/**
 * A small helper component for the sidebar items.
 * Replace the icons/labels as you wish.
 */
const SidebarItem: React.FC<{ icon: React.ReactNode; label: string }> = ({
  icon,
  label,
}) => {
  return (
    <a
      href="#"
      className="flex items-center space-x-3 text-gray-700 py-2 px-2 rounded-md hover:bg-gray-100"
    >
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </a>
  );
};

export default PatientDashboard;
