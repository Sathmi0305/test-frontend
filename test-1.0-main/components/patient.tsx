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
  FaUserMd
} from "react-icons/fa"; // Example icons

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

        {/* ========== MAIN CONTENT AREA ========== */}
        <main className="flex-1 p-8 bg-white relative">
          {/* Page Title */}
          <h1 className="text-3xl font-bold text-gray-600 mb-8">Patient</h1>

          {/* Patient Info Card */}
          <div className="bg-white shadow-md rounded-lg border border-gray-300 p-6 w-full max-w-2xl">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                Jessica Alexander
              </h2>
              <p className="text-gray-600">29 Yrs, Female</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 border border-black">
              <div className="flex justify-between border-b border-r border-black p-4">
                <span className="font-semibold text-gray-700">
                  Joined date:
                </span>
                <span className="text-gray-600">14 Mar 2024</span>
              </div>
              <div className="flex justify-between border-b border-black p-4">
                <span className="font-semibold text-gray-700">
                  Type of reports:
                </span>
                <span className="text-gray-600">####</span>
              </div>
              <div className="flex justify-between border-b border-r border-black p-4">
                <span className="font-semibold text-gray-700">
                  Referring Doctor:
                </span>
                <span className="text-gray-600">Dr.#####</span>
              </div>
              <div className="flex justify-between border-b border-black p-4">
                <span className="font-semibold text-gray-700">
                  Assigned Doctor:
                </span>
                <span className="text-gray-600">Dr.Sathira</span>
              </div>
              <div className="flex justify-between col-span-1 md:col-span-2 p-4">
                <span className="font-semibold text-gray-700">
                  Address:
                </span>
                <span className="text-gray-600">
                  795 Ave Rockland, Outermont, California
                </span>
              </div>
            </div>
          </div>

          {/* Document Preview (Right Side Box) */}
          <div className="absolute top-8 right-8 w-72 h-40 bg-[#7DADEB] rounded-md shadow-lg flex items-center justify-center p-4">
            <div className="text-center">
              <button className="bg-white mb-2 px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition">
                {/* Dummy Icon or Upload */}
                Upload/Download
              </button>
              <p className="text-white font-medium">
                Preview Your Document from here
              </p>
            </div>
          </div>

          {/* Doctor Selection */}
          <div className="mt-8">
            <h3 className="mb-3 text-4xl font-bold text-black-100 bg-[#19475B] p-6 rounded-xl">
              Choose your Doctor
            </h3>
            <div className="flex gap-5 overflow-x-auto pb-4 bg-[#19475B] p-8 rounded-xl">
              {/* Doctor Card 1 */}
              <div className="flex-shrink-0 w-72 h-80 rounded-xl bg-white p-4 text-center shadow">
                <h4 className="mb-1 text-xl font-bold text-gray-800">
                  <img
                    src="/images/doc1.jpeg" // Replace with your image URL
                    alt="Dr. Travis Oman"
                    className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
                  />
                  Dr. Travis Oman
                </h4>
                <p className="mb-1 text-gray-600">Ophthalmologist</p>
                <p className="mb-3 text-gray-600">120 Reviews</p>
                <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600">
                  Book Now
                </button>
              </div>

              {/* Doctor Card 2 */}
              <div className="flex-shrink-0 w-72 h-80 rounded-xl bg-white p-4 text-center shadow">
                <h4 className="mb-1 text-xl font-bold text-gray-800">
                  <img
                    src="/images/doc2.jpeg" // Replace with your image URL
                    alt="Dr. Vivian Monroe"
                    className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
                  />
                  Dr. Vivian Monroe
                </h4>
                <p className="mb-1 text-gray-600">Dentician</p>
                <p className="mb-3 text-gray-600">120 Reviews</p>
                <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600">
                  Book Now
                </button>
              </div>

              {/* Doctor Card 3 */}
              <div className="flex-shrink-0 w-72 h-80 rounded-xl bg-white p-4 text-center shadow">
                <h4 className="mb-1 text-xl font-bold text-gray-800">
                  <img
                    src="/images/doc3.jpeg" // Replace with your image URL
                    alt="Dr. Annah Ray"
                    className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
                  />
                  Dr. Annah Ray
                </h4>
                <p className="mb-1 text-gray-600">Gastroenterologist</p>
                <p className="mb-3 text-gray-600">120 Reviews</p>
                <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600">
                  Book Now
                </button>
              </div>

              {/* Add more doctor cards if needed */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

/** Helper component for the sidebar items. */
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
