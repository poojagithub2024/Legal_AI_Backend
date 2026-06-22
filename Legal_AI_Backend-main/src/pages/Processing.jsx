import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";

const stepsList = [
  "Document Uploaded",
  "Extracting Text",
  "Generating Summary",
  "Extracting Clauses",
  "Detecting Risks",
  "Preparing Dashboard"
];

function Processing() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  // Synchronized step tracker interval matching your core timing framework
  useEffect(() => {
    if (activeStep < stepsList.length) {
      const stepTimer = setTimeout(() => {
        setActiveStep((prev) => prev + 1);
      }, 800); // Transitions through milestones cleanly within your ~5s overall target
      return () => clearTimeout(stepTimer);
    }
  }, [activeStep]);

  // Master navigation routing handoff
  useEffect(() => {
    const mainTimer = setTimeout(() => {
      navigate("/dashboard");
    }, 5000);

    return () => clearTimeout(mainTimer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6 py-16 font-sans relative overflow-hidden">
      {/* Structural Background Blur Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-3xl rounded-full -z-10" />

      {/* ==========================================
          PROCESSING CARD CONTAINER
          ========================================== */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-xl bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl shadow-xl shadow-slate-200/50 text-center"
      >
        {/* Modern Spinning Electric Blue Ring */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-slate-100" />
          <div className="absolute inset-0 rounded-full border-4 border-t-[#2563EB] border-r-transparent border-b-transparent border-l-transparent animate-spin" />
        </div>

        <h1 className="text-2xl font-extrabold text-[#111827] tracking-tight sm:text-3xl">
          Analyzing Your Document
        </h1>
        <p className="text-sm text-[#6B7280] mt-2 mb-8 max-w-sm mx-auto">
          Clarivox is executing algorithmic models over your structured legal text assets...
        </p>

        {/* ==========================================
            DYNAMIC PROGRESSION STEP TRACKER
            ========================================== */}
        <div className="space-y-3 max-w-md mx-auto text-left">
          {stepsList.map((stepText, index) => {
            const isCompleted = index < activeStep;
            const isCurrent = index === activeStep;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                className={`flex items-center gap-3 p-4 rounded-xl border text-sm transition-all duration-300 ${
                  isCurrent
                    ? "bg-blue-50/60 border-blue-200 text-[#1E3A8A] font-semibold shadow-sm shadow-blue-500/5"
                    : isCompleted
                    ? "bg-slate-50/50 border-transparent text-[#6B7280]"
                    : "bg-white border-slate-100 text-slate-300"
                }`}
              >
                {/* Dynamic Left Asset Indicator State Toggles */}
                {isCompleted ? (
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-[#10B981] shrink-0"
                  >
                    <HiCheckCircle size={20} />
                  </motion.div>
                ) : (
                  <div className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors duration-300 ${
                    isCurrent ? "border-[#2563EB]" : "border-slate-200"
                  }`}>
                    {isCurrent && (
                      <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-ping" />
                    )}
                  </div>
                )}

                <span className="truncate">{stepText}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Subtle System Footnote */}
        <p className="text-xs text-[#6B7280] font-medium mt-8 tracking-wide">
           This operational framework usually completes in 3–6 seconds
        </p>
      </motion.div>
    </div>
  );
}

export default Processing;