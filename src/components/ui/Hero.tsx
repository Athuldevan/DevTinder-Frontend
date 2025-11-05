import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Connect with{' '}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Developers
              </span>{' '}
              Worldwide
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Swipe right to connect, send interests, and build meaningful relationships with developers who inspire you.
            </p>
          </div>

          {/* Connection Features */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-900/30 rounded-full flex items-center justify-center border border-green-700/30">
                <i className="fas fa-heart text-green-400 text-lg"></i>
              </div>
              <div>
                <h3 className="font-semibold text-white">Send Connection Requests</h3>
                <p className="text-gray-400">Show interest in developers you admire</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center border border-blue-700/30">
                <i className="fas fa-comments text-blue-400 text-lg"></i>
              </div>
              <div>
                <h3 className="font-semibold text-white">Chat Instantly</h3>
                <p className="text-gray-400">Start conversations with matched developers</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center border border-purple-700/30">
                <i className="fas fa-code-branch text-purple-400 text-lg"></i>
              </div>
              <div>
                <h3 className="font-semibold text-white">Collaborate on Projects</h3>
                <p className="text-gray-400">Find partners for your next big idea</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to= "/feed">
            
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-indigo-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Connecting Now
            </button>
            </Link>
            <button className="px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-xl font-semibold text-lg hover:border-purple-500 hover:text-purple-400 transition-all">
              How It Works
            </button>
          </div>
        </div>

        {/* Right Side - Interactive Cards */}
        <div className="relative">
          {/* Main Connection Card */}
          <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 border border-gray-700 transform rotate-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">
                👩‍💻
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Sarah Chen</h3>
                <p className="text-gray-400">Full Stack Developer</p>
                <div className="flex space-x-1 mt-1">
                  <span className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full border border-blue-700/30">React</span>
                  <span className="px-2 py-1 bg-green-900/50 text-green-300 text-xs rounded-full border border-green-700/30">Node.js</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">Looking for frontend developers to collaborate on open source projects</p>
            <div className="flex space-x-3">
              <button className="flex-1 py-3 bg-red-900/30 text-red-400 rounded-xl font-semibold hover:bg-red-900/50 transition-all border border-red-700/30">
                <i className="fas fa-times mr-2"></i>
                Skip
              </button>
              <button className="flex-1 py-3 bg-green-900/30 text-green-400 rounded-xl font-semibold hover:bg-green-900/50 transition-all border border-green-700/30">
                <i className="fas fa-heart mr-2"></i>
                Connect
              </button>
            </div>
          </div>

          {/* Floating Connection Stats */}
          <div className="absolute -top-4 -right-4 bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-700 transform -rotate-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">127</div>
              <div className="text-gray-400 text-sm">Connections Made</div>
            </div>
          </div>

          {/* Floating Message Notification */}
          <div className="absolute -bottom-4 -left-4 bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-700 transform rotate-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-900/30 rounded-full flex items-center justify-center border border-green-700/30">
                <i className="fas fa-comment text-green-400"></i>
              </div>
              <div>
                <div className="font-semibold text-white">New Match!</div>
                <div className="text-gray-400 text-sm">Alex liked you back</div>
              </div>
            </div>
          </div>

          {/* Connect with Developers Floating Card */}
          <div className="absolute top-1/2 -right-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-4 transform -rotate-12 shadow-2xl">
            <div className="text-center text-white">
              <i className="fas fa-users text-2xl mb-2"></i>
              <div className="font-bold text-sm">Connect with</div>
              <div className="font-bold text-sm">Developers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-6xl">👨‍💻</div>
        <div className="absolute top-40 right-20 text-4xl">👩‍💻</div>
        <div className="absolute bottom-32 left-20 text-5xl">💻</div>
        <div className="absolute bottom-40 right-32 text-3xl">🔗</div>
      </div>
    </div>
  );
};

export default Hero;