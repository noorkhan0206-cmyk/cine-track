import React, { useState } from 'react';
import { Film, Star, Bell, User, Menu, Home, Bookmark, Settings, LogOut } from 'lucide-react';

export default function CineTrackPreview() {
  const [currentScreen, setCurrentScreen] = useState('signup');
  const [menuOpen, setMenuOpen] = useState(false);

  const screens = {
    signup: (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 w-full max-w-md border border-white/20">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-400 p-4 rounded-2xl">
              <Film size={48} className="text-purple-900" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white text-center mb-2">CineTrack</h1>
          <p className="text-purple-200 text-center mb-8">Discover Movies You'll Love</p>
          
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button 
              onClick={() => setCurrentScreen('home')}
              className="w-full bg-yellow-400 text-purple-900 font-bold py-3 rounded-xl hover:bg-yellow-300 transition"
            >
              Sign Up
            </button>
          </div>
          
          <p className="text-purple-200 text-center mt-6">
            Already have an account?{' '}
            <button onClick={() => setCurrentScreen('login')} className="text-yellow-400 font-semibold">
              Log In
            </button>
          </p>
        </div>
      </div>
    ),
    
    login: (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-purple-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 w-full max-w-md border border-white/20">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-400 p-4 rounded-2xl">
              <Film size={48} className="text-purple-900" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white text-center mb-2">Welcome Back</h1>
          <p className="text-purple-200 text-center mb-8">Log in to continue</p>
          
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button 
              onClick={() => setCurrentScreen('home')}
              className="w-full bg-yellow-400 text-purple-900 font-bold py-3 rounded-xl hover:bg-yellow-300 transition"
            >
              Log In
            </button>
          </div>
          
          <p className="text-purple-200 text-center mt-6">
            Don't have an account?{' '}
            <button onClick={() => setCurrentScreen('signup')} className="text-yellow-400 font-semibold">
              Sign Up
            </button>
          </p>
        </div>
      </div>
    ),
    
    home: (
      <div className="min-h-screen bg-gray-900">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <div className="flex items-center gap-3">
              <Film size={32} className="text-yellow-400" />
              <h1 className="text-2xl font-bold text-white">CineTrack</h1>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              <Menu size={28} />
            </button>
          </div>
        </div>
        
        {menuOpen && (
          <div className="absolute right-4 top-16 bg-gray-800 rounded-xl shadow-2xl p-2 w-48 z-50 border border-gray-700">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-700 rounded-lg">
              <Home size={20} /> Home
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-700 rounded-lg">
              <Bookmark size={20} /> Watchlist
            </button>
            <button onClick={() => setCurrentScreen('settings')} className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-700 rounded-lg">
              <Settings size={20} /> Settings
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-700 rounded-lg">
              <User size={20} /> Profile
            </button>
            <div className="border-t border-gray-700 my-2"></div>
            <button onClick={() => setCurrentScreen('signup')} className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-gray-700 rounded-lg">
              <LogOut size={20} /> Logout
            </button>
          </div>
        )}
        
        <div className="p-4 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Trending Now</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div 
                key={i} 
                onClick={() => setCurrentScreen('detail')}
                className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition"
              >
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-64"></div>
                <div className="p-3">
                  <h3 className="text-white font-semibold mb-2">Movie Title {i}</h3>
                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-gray-300 text-sm">{(8 + Math.random()).toFixed(1)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    
    detail: (
      <div className="min-h-screen bg-gray-900">
        <div className="relative">
          <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 h-96"></div>
          <button 
            onClick={() => setCurrentScreen('home')}
            className="absolute top-4 left-4 bg-black/50 backdrop-blur p-2 rounded-full text-white"
          >
            ← Back
          </button>
        </div>
        
        <div className="p-6 max-w-4xl mx-auto -mt-20 relative">
          <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">The Amazing Movie</h1>
                <div className="flex items-center gap-4 text-gray-300 text-sm">
                  <span>2024</span>
                  <span>•</span>
                  <span>2h 28m</span>
                  <span>•</span>
                  <span>Action, Sci-Fi</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-yellow-400 px-4 py-2 rounded-full">
                <Star size={20} className="text-purple-900 fill-purple-900" />
                <span className="text-purple-900 font-bold text-lg">8.5</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              An epic journey through space and time, where heroes must face impossible odds to save humanity. 
              Stunning visuals combined with a gripping storyline make this a must-watch cinematic experience.
            </p>
            
            <div className="flex gap-3">
              <button className="flex-1 bg-yellow-400 text-purple-900 font-bold py-3 rounded-xl hover:bg-yellow-300 transition">
                Add to Watchlist
              </button>
              <button className="bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-gray-600 transition">
                <Bookmark size={20} />
              </button>
            </div>
          </div>
          
          <div className="mt-6 bg-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Cast</h2>
            <div className="grid grid-cols-3 gap-4">
              {['Actor 1', 'Actor 2', 'Actor 3'].map((actor, i) => (
                <div key={i} className="text-center">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full w-20 h-20 mx-auto mb-2"></div>
                  <p className="text-white text-sm">{actor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    
    settings: (
      <div className="min-h-screen bg-gray-900">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4">
          <div className="flex items-center gap-3 max-w-6xl mx-auto">
            <button onClick={() => setCurrentScreen('home')} className="text-white">
              ← Back
            </button>
            <h1 className="text-2xl font-bold text-white">Settings</h1>
          </div>
        </div>
        
        <div className="p-4 max-w-2xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-6 mb-4">
            <h2 className="text-xl font-bold text-white mb-4">Notifications</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Bell size={20} className="text-yellow-400" />
                  <div>
                    <p className="text-white font-semibold">New Releases</p>
                    <p className="text-gray-400 text-sm">Get notified about new movies</p>
                  </div>
                </div>
                <label className="relative inline-block w-12 h-6">
                  <input type="checkbox" className="opacity-0 w-0 h-0 peer" defaultChecked />
                  <span className="absolute cursor-pointer inset-0 bg-gray-600 rounded-full transition peer-checked:bg-yellow-400"></span>
                  <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-6"></span>
                </label>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Star size={20} className="text-yellow-400" />
                  <div>
                    <p className="text-white font-semibold">Recommendations</p>
                    <p className="text-gray-400 text-sm">Personalized movie suggestions</p>
                  </div>
                </div>
                <label className="relative inline-block w-12 h-6">
                  <input type="checkbox" className="opacity-0 w-0 h-0 peer" defaultChecked />
                  <span className="absolute cursor-pointer inset-0 bg-gray-600 rounded-full transition peer-checked:bg-yellow-400"></span>
                  <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-6"></span>
                </label>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-6 mb-4">
            <h2 className="text-xl font-bold text-white mb-4">Preferences</h2>
            <div className="space-y-4">
              <div>
                <label className="text-white font-semibold mb-2 block">Language</label>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white border border-gray-600">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div>
                <label className="text-white font-semibold mb-2 block">Theme</label>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white border border-gray-600">
                  <option>Dark Mode</option>
                  <option>Light Mode</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Account</h2>
            <button className="w-full text-left px-4 py-3 text-white hover:bg-gray-700 rounded-lg mb-2">
              Edit Profile
            </button>
            <button className="w-full text-left px-4 py-3 text-white hover:bg-gray-700 rounded-lg mb-2">
              Change Password
            </button>
            <button className="w-full text-left px-4 py-3 text-red-400 hover:bg-gray-700 rounded-lg">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className="w-full">
      <div className="bg-gray-800 p-4 flex gap-2 overflow-x-auto">
        <button onClick={() => setCurrentScreen('signup')} className={`px-4 py-2 rounded-lg font-semibold ${currentScreen === 'signup' ? 'bg-yellow-400 text-purple-900' : 'bg-gray-700 text-white'}`}>
          Signup
        </button>
        <button onClick={() => setCurrentScreen('login')} className={`px-4 py-2 rounded-lg font-semibold ${currentScreen === 'login' ? 'bg-yellow-400 text-purple-900' : 'bg-gray-700 text-white'}`}>
          Login
        </button>
        <button onClick={() => setCurrentScreen('home')} className={`px-4 py-2 rounded-lg font-semibold ${currentScreen === 'home' ? 'bg-yellow-400 text-purple-900' : 'bg-gray-700 text-white'}`}>
          Home
        </button>
        <button onClick={() => setCurrentScreen('detail')} className={`px-4 py-2 rounded-lg font-semibold ${currentScreen === 'detail' ? 'bg-yellow-400 text-purple-900' : 'bg-gray-700 text-white'}`}>
          Detail
        </button>
        <button onClick={() => setCurrentScreen('settings')} className={`px-4 py-2 rounded-lg font-semibold ${currentScreen === 'settings' ? 'bg-yellow-400 text-purple-900' : 'bg-gray-700 text-white'}`}>
          Settings
        </button>
      </div>
      {screens[currentScreen]}
    </div>
  );
}
