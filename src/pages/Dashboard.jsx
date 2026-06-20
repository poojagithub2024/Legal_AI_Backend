import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  HiOutlineDocumentText, 
  HiOutlinePlay, 
  HiOutlineDownload, 
  HiOutlineRefresh, 
  HiOutlineScale, 
  HiOutlineShieldExclamation, 
  HiOutlineChip, 
  HiOutlineLightBulb 
} from "react-icons/hi";

// Framer Motion Animation Orchestrators
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] px-4 sm:px-8 lg:px-12 py-10 font-sans relative overflow-hidden selection:bg-blue-100 selection:text-[#2563EB]">
      {/* Background Ambience Subtle Blur */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-3xl rounded-full -z-10" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto space-y-6"
      >
        
        {/* ==========================================
            HEADER CONTROL ROW
            ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#111827]">
              Document Analysis Dashboard
            </h1>
            <p className="text-sm text-[#6B7280] mt-1">
              AI-generated operational intelligence vectors from your legal instrument.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#1E3A8A" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/simulator")}
            className="inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white text-xs font-bold px-5 py-3 rounded-xl shadow-sm transition-colors w-fit"
          >
            <HiOutlinePlay size={16} /> Open Simulator
          </motion.button>
        </div>

        {/* ==========================================
            METADATA BANNER
            ========================================== */}
        <motion.div 
          variants={itemVariants}
          className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex flex-col sm:flex-row justify-between sm:items-center gap-4"
        >
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-blue-50 text-[#2563EB] rounded-xl border border-blue-100/40">
              <HiOutlineDocumentText size={24} />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#111827]">contract.pdf</h3>
              <p className="text-xs text-[#6B7280] mt-0.5">Uploaded Today • Processing Vault Ready</p>
            </div>
          </div>
          <div className="text-[11px] font-bold tracking-wider text-amber-700 bg-amber-50 border border-amber-200/60 px-3.5 py-1.5 rounded-full uppercase w-fit">
            ⚠️ Medium Risk
          </div>
        </motion.div>

        {/* ==========================================
            STATS HIGH-LEVEL GRID
            ========================================== */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Stat Card 1 */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex flex-col justify-between group hover:border-amber-200 transition-all">
            <div className="flex items-center justify-between text-[#6B7280] mb-3">
              <span className="text-xs font-bold uppercase tracking-wider">Risk Level</span>
              <HiOutlineShieldExclamation size={18} className="group-hover:text-amber-500 transition-colors" />
            </div>
            <h2 className="text-2xl font-black text-[#F59E0B]">Medium</h2>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex flex-col justify-between group hover:border-rose-200 transition-all">
            <div className="flex items-center justify-between text-[#6B7280] mb-3">
              <span className="text-xs font-bold uppercase tracking-wider">Risk Score</span>
              <HiOutlineScale size={18} className="group-hover:text-[#EF4444] transition-colors" />
            </div>
            <h2 className="text-2xl font-black text-[#EF4444]">62%</h2>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex flex-col justify-between group hover:border-blue-200 transition-all">
            <div className="flex items-center justify-between text-[#6B7280] mb-3">
              <span className="text-xs font-bold uppercase tracking-wider">Clauses Found</span>
              <HiOutlineChip size={18} className="group-hover:text-[#2563EB] transition-colors" />
            </div>
            <h2 className="text-2xl font-black text-[#2563EB]">4</h2>
          </div>

          {/* Stat Card 4 */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex flex-col justify-between group hover:border-emerald-200 transition-all">
            <div className="flex items-center justify-between text-[#6B7280] mb-3">
              <span className="text-xs font-bold uppercase tracking-wider">Suggestions</span>
              <HiOutlineLightBulb size={18} className="group-hover:text-[#10B981] transition-colors" />
            </div>
            <h2 className="text-2xl font-black text-[#10B981]">3</h2>
          </div>

        </motion.div>

        {/* ==========================================
            EXECUTIVE SUMMARY
            ========================================== */}
        <motion.div variants={itemVariants} className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm space-y-3">
          <h2 className="text-base font-bold text-[#111827] flex items-center gap-2">
            Document Summary
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed max-w-4xl">
            The tenant must execute standard rent disbursements before the <strong className="text-[#111827]">5th of every calendar month</strong>. A structural liquidation penalty fixed at <strong className="text-[#111827]">₹10,000</strong> applies uniformly to any early termination event. Furthermore, the agreement encompasses an automated renewal matrix triggering continuously after a one-year cycle.
          </p>
        </motion.div>

        {/* ==========================================
            EXTRACTED CLAUSES PANELS
            ========================================== */}
        <motion.div variants={itemVariants} className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
          <h2 className="text-base font-bold text-[#111827]">
            Extracted Clauses
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Clause Card 1 */}
            <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-xl space-y-2 hover:border-blue-200 hover:bg-white transition-all duration-200">
              <h3 className="text-sm font-bold text-[#2563EB]">Payment Clause</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">Rent should be paid before the 5th day of every month.</p>
            </div>

            {/* Clause Card 2 */}
            <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-xl space-y-2 hover:border-blue-200 hover:bg-white transition-all duration-200">
              <h3 className="text-sm font-bold text-[#2563EB]">Penalty Clause</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">Early termination incurs a strict ₹10,000 baseline penalty asset calculation.</p>
            </div>

            {/* Clause Card 3 */}
            <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-xl space-y-2 hover:border-blue-200 hover:bg-white transition-all duration-200">
              <h3 className="text-sm font-bold text-[#2563EB]">Termination Clause</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">Contract may be legally terminated exclusively via mutual prior written notice.</p>
            </div>

            {/* Clause Card 4 */}
            <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-xl space-y-2 hover:border-blue-200 hover:bg-white transition-all duration-200">
              <h3 className="text-sm font-bold text-[#2563EB]">Renewal Clause</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">Agreement renews automatically upon hitting the one-year milestone threshold.</p>
            </div>
          </div>
        </motion.div>

        {/* ==========================================
            AI ADVISORY SUGGESTIONS
            ========================================== */}
        <motion.div variants={itemVariants} className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
          <h2 className="text-base font-bold text-[#111827]">
            AI Suggestions
          </h2>
          
          <ul className="space-y-3">
            {[
              "Review the penalty amount parameters meticulously to ensure economic viability before signing.",
              "Clarify exact timeline definitions regarding contract termination conditional notices.",
              "Verify background structural exceptions embedded in automatic renewal tracking policies."
            ].map((suggestion, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569]">
                <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full mt-2 shrink-0" />
                <span className="leading-relaxed">{suggestion}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ==========================================
            BOTTOM FOOTER ACTION CONTROLS
            ========================================== */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#F1F5F9" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/upload")}
            className="inline-flex items-center justify-center gap-2 border border-slate-300 bg-white text-slate-900 text-xs font-bold px-6 py-3.5 rounded-xl shadow-xs transition-colors"
          >
            <HiOutlineRefresh size={16} /> Analyze New Document
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#1E3A8A" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 bg-[#111827] text-white text-xs font-bold px-6 py-3.5 rounded-xl shadow-md transition-colors"
          >
            <HiOutlineDownload size={16} /> Download Analytical Report
          </motion.button>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default Dashboard;