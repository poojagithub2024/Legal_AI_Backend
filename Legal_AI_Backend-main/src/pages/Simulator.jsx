import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Framer Motion Orchestrators (Matches Dashboard configuration perfectly)
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

function Simulator() {
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const handleSimulation = () => {
    if (!question.trim()) return;

    const userQuery = question;
    const aiAnswer = "According to Clause 8 of the agreement, terminating the contract before 12 months may result in a penalty of ₹10,000. Please review the termination conditions carefully.";
    
    setChatLog([{ type: "user", text: userQuery }, { type: "ai", text: aiAnswer }]);
    setQuestion("");
  };

  const quickQuestion = (text) => {
    const aiAnswer = "According to the extracted clauses, this action may trigger contractual obligations or penalties. Please review the relevant clause before proceeding.";
    setChatLog([{ type: "user", text }, { type: "ai", text: aiAnswer }]);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] px-4 sm:px-8 lg:px-12 py-10 font-sans relative overflow-hidden selection:bg-blue-100 selection:text-[#2563EB]">
      {/* Background Ambient Glow */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-blue-500/5 blur-3xl rounded-full -z-10" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto space-y-6"
      >
        
        {/* ==========================================
            HEADER CONTROL ROW
            ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#111827]">
              Clarivox Contract Simulator
            </h1>
            <p className="text-sm text-[#6B7280] mt-1">
              Ask legal what-if scenarios and instantly unpack potential legal or financial outcomes.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#E2E8F0" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/dashboard")}
            className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-800 text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm transition-colors w-fit"
          >
            ← Back to Dashboard
          </motion.button>
        </div>

        {/* ==========================================
            QUICK SUGGESTION CHIPS (With Hover Scale Motion)
            ========================================== */}
        <motion.div variants={itemVariants} className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
             Quick Prompts:
          </span>
          {[
            { label: "Terminate After 6 Months", query: "What happens if I terminate after 6 months?" },
            { label: "Miss Rent Payment", query: "What if I miss a rent payment?" },
            { label: "Contract Renewal", query: "Will the contract renew automatically?" }
          ].map((chip, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.03, borderColor: "#2563EB", backgroundColor: "#F0F6FF" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => quickQuestion(chip.query)}
              className="bg-white border border-slate-200 text-slate-700 text-xs font-medium px-4 py-2 rounded-full shadow-sm transition-all duration-200"
            >
              {chip.label}
            </motion.button>
          ))}
        </motion.div>

        {/* ==========================================
            MAIN INTERACTIVE INTERFACE CARD
            ========================================== */}
        <motion.div 
          variants={itemVariants}
          className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col min-h-[480px]"
        >
          {/* Panel Header */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-2">
            <span className="text-sm font-bold text-[#111827]">💬 Legal Scenario Playground</span>
          </div>

          {/* Dynamic Content Display Log */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50/30">
            <AnimatePresence mode="popLayout">
              {chatLog.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12 space-y-2 text-slate-400"
                >
                  <p className="text-sm font-medium">No scenario simulated yet.</p>
                  <p className="text-xs">Type a custom query below or pick a quick prompt to view real-time outcome projections.</p>
                </motion.div>
              ) : (
                chatLog.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`max-w-[75%] p-4 rounded-xl text-sm leading-relaxed shadow-sm transition-all ${
                      msg.type === "user"
                        ? "bg-[#111827] text-white ml-auto rounded-br-none"
                        : "bg-white border border-slate-200 text-slate-800 mr-auto rounded-bl-none border-l-4 border-l-[#2563EB]"
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>

          {/* Textarea Entry Controls */}
          <div className="p-4 bg-white border-t border-slate-200 space-y-3">
            <textarea
              placeholder="Input custom situational updates here (e.g., 'What if the landlord terminates early?')..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full min-h-[90px] border border-slate-200 rounded-xl p-3.5 text-sm outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all resize-none text-slate-800 placeholder-slate-400"
            />
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.01, backgroundColor: "#1E3A8A" }}
                whileTap={{ scale: 0.99 }}
                onClick={handleSimulation}
                className="bg-[#2563EB] text-white text-xs font-bold px-6 py-3 rounded-xl shadow-sm transition-colors"
              >
                Run Simulation Matrix
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* ==========================================
            SYSTEM PILLARS INFO GRID (Staggered Children)
            ========================================== */}
        <motion.div variants={itemVariants} className="grid sm:grid-cols-3 gap-4">
          {[
            { title: "Deterministic Analysis", desc: "Maps queries against structural conditions.", icon: "" },
            { title: "Clause-Based Logic", desc: "Traces risk projections directly to specific text headers.", icon: "" },
            { title: "AI-Powered Engines", desc: "Surfaces latent downstream risks instantly.", icon: "" }
          ].map((card, i) => (
            <div key={i} className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex items-start gap-3.5 group hover:border-blue-200 transition-all duration-200">
              <div className="p-2 bg-slate-50 text-lg rounded-lg transition-colors group-hover:bg-blue-50">
                {card.icon}
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111827] uppercase tracking-wider">{card.title}</h4>
                <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}

export default Simulator;