import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineMail, HiOutlineLockClosed, HiEye, HiEyeOff } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // Simulate authentication success and route to the advanced uploader
      navigate('/upload');
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-[#F8FAFC] px-4 relative overflow-hidden">
      {/* Decorative Professional Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-400/10 blur-3xl rounded-full -z-10" />

      {/* Glassmorphism Auth Card Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-slate-200 shadow-xl"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#111827] tracking-tight">Welcome back</h2>
          <p className="text-sm text-[#6B7280] mt-1">Access your secure Clarivox legal platform</p>
        </div>

        {/* Traditional Auth Form Setup */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#111827] mb-2">
              Email Address
            </label>
            <div className="relative">
              <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="email" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/90 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-[#111827] transition-all" 
                placeholder="counsel@firm.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#111827] mb-2">
              Password
            </label>
            <div className="relative">
              <HiOutlineLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type={showPassword ? "text" : "password"} 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/90 border border-slate-200 rounded-xl pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-[#111827] transition-all" 
                placeholder="••••••••"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? <HiEyeOff size={18} /> : <HiEye size={18} />}
              </button>
            </div>
          </div>

          {/* Form Utility Row */}
          <div className="flex items-center justify-between text-xs font-medium">
            <label className="flex items-center space-x-2 text-[#6B7280] cursor-pointer selection:bg-transparent">
              <input 
                type="checkbox" 
                className="rounded border-slate-300 text-[#2563EB] focus:ring-0 cursor-pointer w-4 h-4" 
              />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-[#2563EB] hover:underline transition-all">Forgot Password?</a>
          </div>

          <motion.button 
            whileHover={{ scale: 1.01 }} 
            whileTap={{ scale: 0.99 }} 
            type="submit"
            className="w-full bg-[#1E3A8A] hover:bg-[#2563EB] text-white py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-blue-900/10 transition-colors"
          >
            Sign In
          </motion.button>
        </form>

        {/* Divider Splitter Interface */}
        <div className="relative my-6 text-center">
          <hr className="border-slate-200" />
          <span className="bg-[#F8FAFC] px-3 text-xs text-[#6B7280] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-medium">
            Or continue with
          </span>
        </div>

        {/* Google SSO Alternative Entry */}
        <motion.button 
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full flex items-center justify-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 text-sm font-medium py-2.5 rounded-xl transition-colors text-[#111827] shadow-sm"
        >
          <FcGoogle size={18} /> Google Workspace
        </motion.button>

        <p className="text-center text-xs text-[#6B7280] mt-6">
          New to our platform?{' '}
          <Link to="/signup" className="text-[#2563EB] font-semibold hover:underline">
            Create an account
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;