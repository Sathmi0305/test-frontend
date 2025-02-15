import React from 'react';

const HealthcareLanding = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
      <div 
          className="absolute inset-0 bg-cover bg-center blur-[8px]"
          style={{
            backgroundImage: 'url("/images/stethoscope.jpg")',
          }}
        />
        
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-gray-100" />
        
        {/* Medical pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' fill='%230066cc' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Subtle blue overlay */}
        <div className="absolute inset-0 bg-blue-100/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 space-y-16">
        {/* Who We Are */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Who <span className="text-blue-500">We Are</span></h2>
          <p className="text-gray-700">
            At CuraSync, we are dedicated to revolutionizing healthcare by simplifying the way chronic conditions are managed. Our platform bridges the gaps between patients, doctors, laboratories, and pharmacies, creating a unified, secure, and efficient healthcare experience.
          </p>
        </section>

        {/* Our Mission */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Our <span className="text-blue-500">Mission</span></h2>
          <p className="text-gray-700">
            At CuraSync, our mission is to empower individuals and healthcare providers by delivering innovative, secure, and user-friendly digital solutions. We aim to simplify the management of chronic conditions by connecting patients, doctors, laboratories, and pharmacies in a seamless, collaborative ecosystem. By leveraging advanced technologies such as AI-driven insights and intuitive health tracking, we strive to enhance decision-making, improve patient outcomes, and foster a healthier, more informed community.
          </p>
        </section>

        {/* Our Vision */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Our <span className="text-blue-500">Vision</span></h2>
          <p className="text-gray-700">
            We envision a future where healthcare is accessible, efficient, and empowering for everyone. CuraSync aspires to be the global leader in digital health solutions, revolutionizing the way chronic conditions are managed. Our goal is to bridge the gaps in healthcare communication, ensuring that every patient and provider experiences a connected, transparent, and personalized journey. By fostering innovation and collaboration, we aim to inspire healthier lives and create a more sustainable healthcare system for future generations.
          </p>
        </section>

        {/* Our Commitment */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Our <span className="text-blue-500">Commitment</span></h2>
          <p className="text-gray-700 mb-6">CuraSync is committed to transforming healthcare experiences for all stakeholders:</p>
          <div className="space-y-4 text-left max-w-2xl mx-auto">
            <p className="text-gray-700">• To Patients: We provide intuitive tools that make health management simple, secure, and personalized, empowering you to take control of your well-being.</p>
            <p className="text-gray-700">• To Doctors: We offer streamlined patient management solutions that enhance efficiency and support data-driven decision-making.</p>
            <p className="text-gray-700">• To Laboratories and Pharmacies: We simplify workflows and enable seamless communication to ensure timely and accurate service delivery.</p>
            <p className="text-gray-700">• To Security and Privacy: We uphold the highest international standards to protect your data and maintain your trust.</p>
          </div>
          <p className="mt-6 text-gray-700">
            With CuraSync, we are dedicated to delivering meaningful advancements in healthcare that prioritize collaboration, innovation, and care.
          </p>
        </section>

        {/* Join Us */}
        <section className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-4">Join Us</h2>
          <p className="text-center text-gray-700 mb-8">
            Be part of a healthcare revolution that puts you in control. Whether you're a patient, doctor, lab, or pharmacy, CuraSync is here to simplify your journey and create a healthier future for all.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Connect with us
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default HealthcareLanding;