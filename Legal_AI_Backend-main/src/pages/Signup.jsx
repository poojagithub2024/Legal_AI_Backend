import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineUser, HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';

const Signup = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  // Evaluates text entries dynamically to score structural strength parameters
  const getPasswordStrength = (pass) => {
    if (!pass) return { label: '', color: 'bg-transparent', width: 'w-0' };
    if (pass.length < 6) return { label: 'Weak Framework', color: 'bg-rose-500', width: 'w-1/3' };
    if (pass.length < 10) return { label: 'Moderate Security', color: 'bg-amber-500', width: 'w-2/3' };
    return { label: 'Enterprise Standard', color: 'bg-emerald-500', width: 'w-full' };
  };

  const strength = getPasswordStrength(password);

  const handleSignup = (e) => {
    e.preventDefault();
    if (password && password === confirmPassword) {
      navigate('/upload');
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-[#F8FAFC] px-4 relative overflow-hidden">
      {/* Structural Background Enhancements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-400/10 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-indigo-400/10 blur-3xl rounded-full -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-slate-200 shadow-xl"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#111827] tracking-tight">Create Workspace</h2>
          <p className="text-sm text-[#6B7280] mt-1">Start streamlining review logic securely</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#111827] mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <HiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                required 
                className="w-full bg-white/90 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-[#111827]" 
                placeholder="Alex Mercer" 
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#111827] mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="email" 
                required 
                className="w-full bg-white/90 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-[#111827]" 
                placeholder="alex@firm.com" 
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#111827] mb-1.5">
              Password
            </label>
            <div className="relative">
              <HiOutlineLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="password" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full bg-white/90 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-[#111827]" 
                placeholder="••••••••" 
              />
            </div>
            
            {/* Visual Strength Progress Metric */}
            {password && (
              <div className="mt-2">
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${strength.color} ${strength.width} transition-all duration-300`} />
                </div>
                <span className="text-[10px] text-[#6B7280] mt-1 block text-right font-semibold uppercase tracking-wider">
                  {strength.label}
                </span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#111827] mb-1.5">
              Confirm Password
            </label>
            <div className="relative">
              <HiOutlineLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="password" 
                required 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-white/90 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-[#111827]" 
                placeholder="••••••••" 
              />
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit" 
            className="w-full bg-[#1E3A8A] hover:bg-[#2563EB] text-white py-2.5 rounded-xl text-sm font-semibold transition-colors mt-2 shadow-md shadow-blue-900/10"
          >
            Create Free Account
          </motion.button>
        </form>

        <p className="text-center text-xs text-[#6B7280] mt-6">
          Already registered?{' '}
          <Link to="/login" className="text-[#2563EB] font-semibold hover:underline">
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;