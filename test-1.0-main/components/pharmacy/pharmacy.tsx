"use clients";
import { Search } from "lucide-react"
import { useState } from "react"

const pharmacies = [
  {
    pharmacist: "KLP Prasad",
    name: "A & A Pharmacy",
    district: "Colombo",
    contact: "0713300238"
  },
  {
    pharmacist: "KLP Prasad",
    name: "A & A Pharmacy",
    district: "Colombo",
    contact: "0713300238"
  },
  {
    pharmacist: "KLP Prasad",
    name: "A & A Pharmacy",
    district: "Colombo",
    contact: "0713300238"
  }
]

export default function PharmacyList() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="max-w-7xl mx-auto p-4">
      <nav className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <div className="text-blue-600">
            <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
              <path d="M20 5C11.716 5 5 11.716 5 20c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm0 27c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12z"/>
            </svg>
          </div>
          <span className="text-xl font-semibold text-blue-600">CuraSync</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">About Us</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Our Services</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-blue-600 hover:text-blue-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3.01a9.84 9.84 0 01-2.83.77 4.94 4.94 0 002.17-2.72 9.84 9.84 0 01-3.13 1.2 4.92 4.92 0 00-8.39 4.49A13.98 13.98 0 011.67 1.62a4.92 4.92 0 001.52 6.57 4.9 4.9 0 01-2.23-.61v.06a4.92 4.92 0 003.95 4.82 4.91 4.91 0 01-2.22.08 4.92 4.92 0 004.6 3.42A9.87 9.87 0 010 17.54a13.94 13.94 0 007.55 2.21c9.06 0 14-7.5 14-14 0-.21 0-.42-.01-.63A10.01 10.01 0 0024 3.01h-1z"/>
              </svg>
            </button>
            <button className="text-blue-600 hover:text-blue-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"/>
              </svg>
            </button>
            <button className="text-blue-600 hover:text-blue-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </button>
            <button className="px-4 py-2 text-sm font-medium text-purple-600 border border-purple-600 rounded-md hover:bg-purple-50">
              Patient
            </button>
          </div>
        </div>
      </nav>

      <div className="flex justify-between items-center mb-6">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search to find Pharmacy"
            className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          Add
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name of the Pharmacist</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Pharmacy Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">District</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Contact No</th>
            </tr>
          </thead>
          <tbody>
            {pharmacies.map((pharmacy, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium italic">{pharmacy.pharmacist}</td>
                <td className="px-6 py-4 text-sm">{pharmacy.name}</td>
                <td className="px-6 py-4 text-sm">{pharmacy.district}</td>
                <td className="px-6 py-4 text-sm">{pharmacy.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}