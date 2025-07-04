import React from 'react'
import image from "../assets/image.png";
import {APP_FEATURES} from "../utils/data";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import previewImage from '../assets/image.png'; // Adjust path as needed
import Modal from '../components/Modal';
import Login from './Auth/Login'
import SignUp from './Auth/SignUp';
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import ProfileInfoCard from "../components/cards/ProfileInfoCard";
function LandingPage() {
      const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [openAuthModal,setOpenAuthModal] = useState(false);
    const[currentPage,setCurrentPage] = useState("login");

    const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FFFCEF] relative overflow-hidden">
      {/* Decorative Blur Circle */}
      <div className="w-[500px] h-[500px] blur-[65px] bg-amber-200/20 absolute top-0 left-0 z-0" />

      {/* Main Content */}
      <div className="relative z-10 px-8 py-10">
        {/* Header */}
        <header className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-black">Interview Prep AI</h1>
          {user?(
              <ProfileInfoCard />
            ) : (<button
            onClick={() => setOpenAuthModal(true)}
            className="bg-orange-500 hover:bg-orange-600 transition text-white px-5 py-2 rounded-full font-medium"
          >
            Login / Sign Up
          </button>)}
        </header>

        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-20 space-y-10 lg:space-y-0">
          {/* Left Section */}
          <div className="max-w-xl space-y-6 text-center lg:text-left">
            <span className="inline-block bg-orange-100 text-orange-500 font-medium px-4 py-1 rounded-full text-sm">
              AI Powered
            </span>

            <h2 className="text-4xl font-bold text-gray-900 leading-snug">
              Ace Interviews with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
                AI-Powered
              </span>{" "}
              Learning
            </h2>
          </div>

          {/* Right Section */}
          <div className="max-w-lg space-y-6 text-center lg:text-left">
            <p className="text-gray-800 text-lg leading-relaxed">
              Get role-specific questions, expand answers when you need them, dive deeper into concepts,
              and organize everything your way. From preparation to mastery — your ultimate interview toolkit is here.
            </p>

            <button
              onClick={handleCTA}
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
       <img
              src={previewImage}
              alt="Interview Prep AI Preview"
              className="mt-10 w-full max-w-5xl mx-auto rounded-xl shadow-lg"
            />
        <div className="w-full min-h-full bg-[#FFFCEF] mt-10">
  <div className="container mx-auto px-4 pt-10 pb-20">
    <section className="mt-5">
      <h2 className="text-2xl font-medium text-center mb-12">
        Features That Make You Shine
      </h2>

      <div className="flex flex-col items-center gap-8">
        {/* First 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {APP_FEATURES.slice(0, 3).map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-yellow-100 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Remaining 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {APP_FEATURES.slice(3).map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-yellow-100 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
</div>

        
    
<Modal
  isOpen={openAuthModal}
  onClose={() => {
    setOpenAuthModal(false);
    setCurrentPage("login");
  }}
  hideHeader
>
  <div>
    {currentPage === "login" && (
      <Login setCurrentPage={setCurrentPage} />
    )}
    {currentPage === "SignUp" && (
      <SignUp setCurrentPage={setCurrentPage} />
    )}
  </div>
</Modal>
        
    </div>
  )
}

export default LandingPage;