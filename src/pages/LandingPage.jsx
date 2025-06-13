import React, { useState, useContext } from 'react';
import HERO_IMG from '../assets/imgofweb.png';
import { APP_FEATURES } from '../utils/data';
import { useNavigate } from 'react-router-dom';
import { LuSparkles } from 'react-icons/lu';
import Modal from '../components/Modal';
import SignUp from '../pages/Auth/SignUp';
import Login from '../pages/Auth/Login';
import { UserContext } from '../context/userContext';
import ProfileInfoCard from '../components/Cards/ProfileInfoCard';

export default function LandingPage() {
  const navigate = useNavigate();
  const [openAuthModel, setOpenAuthModel] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');

  const { user } = useContext(UserContext);

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModel(true);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <>
      <div className='w-full min-h-full bg-[#FFFCEF] relative overflow-hidden'>
        <div className='w-[400px] h-[400px] bg-amber-200/20 blur-[65px] absolute top-0 left-0' />

        <div className='w-full max-w-[1400px] mx-auto px-4 pt-6 pb-[200px] relative z-10'>
          {/* Header */}
          <header className='flex flex-col sm:flex-row justify-between items-center mb-16 gap-4 sm:gap-0'>
            <div className='text-xl text-black font-bold'>Interview Prep AI</div>
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className='bg-gradient-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer'
                onClick={() => setOpenAuthModel(true)}
              >
                Login / Sign Up
              </button>
            )}
          </header>

          {/* Hero Content */}
          <div className='flex flex-col md:flex-row items-center'>
            {/* Left Section */}
            <div className='w-full md:w-1/2 pr-0 md:pr-4 mb-8 md:mb-0 text-center md:text-left'>
              <div className='flex items-center justify-center md:justify-start mb-2'>
                <div className='flex items-center gap-2 text-[13px] text-amber-600 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-300'>
                  <LuSparkles /> AI Powered
                </div>
              </div>
              <h1 className='text-3xl sm:text-4xl md:text-5xl text-black font-medium mb-6 leading-tight'>
                Ace Interviews with <br />
                <span className='text-transparent bg-clip-text bg-[radial-gradient(circle,#FF9324_0%,#FCD760_100%)] bg-[length:200%_200%] animate-text-shine font-semibold'>
                  AI-Powered
                </span>{' '}
                Learning
              </h1>
            </div>

            {/* Right Section */}
            <div className='w-full md:w-1/2 text-center md:text-left'>
              <p className='text-base sm:text-[17px] text-gray-900 mb-6 md:mr-20'>
                Get role-specific questions, expand answers when you need them, dive deeper into
                concepts, and organize everything your way. From preparation to mastery – your
                ultimate interview toolkit is here.
              </p>
              <div className='flex justify-center md:justify-start'>
                <button
                  className='bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer'
                  onClick={handleCTA}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className='w-full min-h-full relative z-10'>
        <section className='flex items-center justify-center -mt-36 px-4'>
          <img src={HERO_IMG} alt='Hero img' className='w-full sm:w-[90%] md:w-[80%] rounded-lg' />
        </section>

        {/* Features Section */}
        <div className='w-full min-h-full bg-[#FFFCEF] mt-10'>
          <div className='container mx-auto px-4 pt-10 pb-20 max-w-[1400px]'>
            <section className='mt-5'>
              <h2 className='text-2xl font-medium text-center mb-12'>Features That Make You Shine</h2>

              <div className='flex flex-col items-center gap-8'>
                {/* First three cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full'>
                  {APP_FEATURES.slice(0, 3).map((feature) => (
                    <div
                      key={feature.id}
                      className='bg-[#FFFEFB] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100'
                    >
                      <h3 className='text-base font-semibold mb-3'>{feature.title}</h3>
                      <p className='text-gray-600'>{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* Remaining two cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
                  {APP_FEATURES.slice(3).map((feature) => (
                    <div
                      key={feature.id}
                      className='bg-[#FFFEFB] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100'
                    >
                      <h3 className='text-base font-semibold mb-3'>{feature.title}</h3>
                      <p className='text-gray-600'>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className='text-sm bg-gray-50 text-secondary text-center p-5 mt-5'>
          made with ✨Harsh..
        </div>
      </div>

      {/* Modal for Login/Signup */}
      <Modal
        isOpen={openAuthModel}
        onClose={() => {
          setOpenAuthModel(false);
          setCurrentPage('login');
        }}
        hideHeader
      >
        <div>
          {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === 'signup' && <SignUp setCurrentPage={setCurrentPage} />}
        </div>
      </Modal>
    </>
  );
}
