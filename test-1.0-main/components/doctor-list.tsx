"use client";
import React, { useState } from 'react';
import { Clock, MessageCircle, Calendar, User, Search, Bell, Settings } from 'lucide-react';

const DoctorSearch = () => {
  const [viewMode, setViewMode] = useState('cards');
  const [searchQuery, setSearchQuery] = useState('');

  const doctors = [
    {
      id: 1,
      name: "Dr. James Bond",
      type: "Neurologist",
      experience: "15 years experience",
      rating: 4.8,
      availability: ["Mon", "Wed", "Fri"],
      lastVisit: "04/10/2023"
    },
    {
      id: 2,
      name: "Dr. Sarah Jhons",
      type: "Surgeon",
      experience: "12 years experience",
      rating: 4.9,
      availability: ["Tue", "Thu", "Sat"],
      lastVisit: "04/10/2023"
    },
    {
      id: 3,
      name: "Dr. Aseem Naizer",
      type: "Oncologist",
      experience: "10 years experience",
      rating: 4.7,
      availability: ["Mon", "Thu", "Fri"],
      lastVisit: "04/10/2023"
    },
    {
      id: 4,
      name: "Dr. Travis Oman",
      type: "Dentist",
      experience: "8 years experience",
      rating: 4.6,
      availability: ["Wed", "Thu", "Sat"],
      lastVisit: "04/10/2023"
    },
    {
      id: 5,
      name: "Dr. Vivian Moner",
      type: "Ophthalmologist",
      experience: "14 years experience",
      rating: 4.8,
      availability: ["Mon", "Tue", "Fri"],
      lastVisit: "04/10/2023"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-blue-500 text-xl font-bold">CuraSync</div>
              <div className="ml-10 space-x-4">
                <a href="#" className="text-gray-500">Home</a>
                <a href="#" className="text-gray-500">About Us</a>
                <a href="#" className="text-gray-500">Our Services</a>
                <a href="#" className="text-gray-500">Contact</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="w-5 h-5 text-gray-500" />
              <Settings className="w-5 h-5 text-gray-500" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  SJ
                </div>
                <span className="text-gray-700">Sarah Johnson</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white h-screen p-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 p-2 bg-blue-500 text-white rounded">
              <User className="w-5 h-5" />
              <span>Doctors</span>
            </div>
            <div className="flex items-center space-x-2 p-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span>Laboratory</span>
            </div>
            <div className="flex items-center space-x-2 p-2 text-gray-600">
              <MessageCircle className="w-5 h-5" />
              <span>Pharmacy</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Find a Doctor</h1>
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search doctors..."
                  className="w-64 pl-10 pr-4 py-2 border rounded-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
              <div className="ml-4 space-x-2">
                <button
                  onClick={() => setViewMode('cards')}
                  className={`px-4 py-2 rounded ${viewMode === 'cards' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  Cards
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  List
                </button>
              </div>
            </div>
          </div>

          {viewMode === 'cards' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map(doctor => (
                <div key={doctor.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                      {doctor.name.split(' ')[1][0]}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{doctor.name}</h3>
                      <p className="text-gray-600">{doctor.type}</p>
                      <p className="text-gray-500 text-sm">{doctor.experience}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600">Available:</p>
                    <div className="flex space-x-2 mt-1">
                      {doctor.availability.map(day => (
                        <span key={day} className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm">
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1">{doctor.rating}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Calendar className="w-5 h-5 text-blue-500" />
                      <MessageCircle className="w-5 h-5 text-blue-500" />
                      <User className="w-5 h-5 text-blue-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-gray-600">Doctor's Name</th>
                    <th className="px-6 py-3 text-left text-gray-600">Doctor's Type</th>
                    <th className="px-6 py-3 text-left text-gray-600">Last Visit</th>
                    <th className="px-6 py-3 text-left text-gray-600">Messaging</th>
                    <th className="px-6 py-3 text-left text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {doctors.map(doctor => (
                    <tr key={doctor.id} className="border-t">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                            {doctor.name.split(' ')[1][0]}
                          </div>
                          {doctor.name}
                        </div>
                      </td>
                      <td className="px-6 py-4">{doctor.type}</td>
                      <td className="px-6 py-4">{doctor.lastVisit}</td>
                      <td className="px-6 py-4">
                        <MessageCircle className="w-5 h-5 text-blue-500" />
                      </td>
                      <td className="px-6 py-4">
                        <button className="px-3 py-1 bg-gray-800 text-white rounded">
                          Add
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorSearch;