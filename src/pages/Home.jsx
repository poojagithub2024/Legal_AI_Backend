import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const features = [
  { 
    title: "Smart Summarization", 
    desc: "Convert lengthy contracts into concise, hyper-readable executive summaries instantly." 
  },
  { 
    title: "Risk Detection", 
    desc: "Identify and flag highly un-favorable language, hidden liabilities, and compliance anomalies before signing." 
  },
  { 
    title: "Clause Extraction", 
    desc: "Automatically extract, catalog, and index key operational definitions and indemnities." 
  },
  { 
    title: "What-If Simulator", 
    desc: "Predict abstract contract outcomes and test edge cases in an active scenario sandbox." 
  }
];

const steps = [
  { step: "01", title: "Upload", desc: "Drop your PDF or DOCX safely into our platform engine." },
  { step: "02", title: "Analyze", desc: "Specialized legal LLMs parse variables and deep metadata clauses." },
  { step: "03", title: "Review", desc: "Explore clear breakdowns of internal risk metrics and exposure tabs." },
  { step: "04", title: "Simulate", desc: "Query our safe sandbox environment on complex edge-case breaches." }
];

// Animation Variants for Staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans selection:bg-blue-100 selection:text-[#1E3A8A]">
      
      {/* ==========================================
          HERO SECTION
          ========================================== */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content Column */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* AI Badge Component */}
          <div className="inline-flex items-center gap-1.5 bg-[#DBEAFE] border border-blue-200/50 text-[#1E3A8A] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
             AI Legal Intelligence Platform
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.1]">
            Understand Legal Documents <br />
            <span className="text-[#2563EB]">Without Legal Expertise</span>
          </h1>

          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed max-w-xl">
            Upload contracts, simplify legal language, identify structural operational risks, and analyze clauses with enterprise AI logic.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/login")}
              className="bg-[#1E3A8A] hover:bg-[#2563EB] text-white px-7 py-3.5 rounded-xl font-medium shadow-md shadow-blue-900/10 transition-colors cursor-pointer"
            >
              Start Analysis
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "#F1F5F9" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 border border-slate-300 bg-white text-[#111827] px-7 py-3.5 rounded-xl font-medium transition-all cursor-pointer"
            >
               Watch Demo
            </motion.button>
          </div>
        </motion.div>

        {/* Right Graphic/Illustration Column */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center relative"
        >
          <div className="absolute inset-0 bg-blue-400/10 blur-3xl rounded-full transform scale-75 -z-10" />
          
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="w-full max-w-md relative"
          >
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
              alt="Premium legal contract overview interface"
              className="w-full h-auto rounded-2xl shadow-2xl border border-slate-200/80"
            />
            
            {/* Real-time Dynamic AI Score Micro-widget */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white border border-slate-100 p-4 rounded-xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-rose-50 border border-rose-100 text-[#EF4444] font-bold text-sm flex items-center justify-center">74</div>
              <div>
                <div className="text-xs font-bold text-[#111827]">Risk Index Compiled</div>
                <div className="text-[10px] text-[#EF4444] font-medium">Critical Exposure Detected</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ==========================================
          STATISTICS SECTION
          ========================================== */}
      <section className="bg-white py-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E3A8A]">10,000+</h3>
            <p className="text-xs sm:text-sm font-medium text-[#6B7280] mt-0.5">Documents Analyzed</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E3A8A]">95%</h3>
            <p className="text-xs sm:text-sm font-medium text-[#6B7280] mt-0.5">Accuracy Metric Rating</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E3A8A]">5,000+</h3>
            <p className="text-xs sm:text-sm font-medium text-[#6B7280] mt-0.5">Active Legal Workspaces</p>
          </div>
        </div>
      </section>

      {/* ==========================================
          FEATURES SECTION
          ========================================== */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#111827] tracking-tight">Powerful AI Features</h2>
          <p className="text-sm sm:text-base text-[#6B7280] mt-2">Enterprise-ready ingestion vectors wrapped inside structured UI mechanics.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)" }}
              className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm transition-all duration-200"
            >
              <h3 className="text-base font-bold text-[#111827] mb-2">{feat.title}</h3>
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ==========================================
          HOW IT WORKS SECTION (Contrast Fix for image_2b9a02.png)
          ========================================== */}
      <section className="bg-white border-t border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#111827] tracking-tight">How It Works</h2>
            <p className="text-sm text-[#6B7280] mt-2">Zero learning curves. Go from ingestion to sandbox validation in seconds.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          >
            {steps.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="space-y-3 relative group">
                {/* Fixed text contrast here: changed light gray to soft visible blue */}
                <div className="text-5xl font-black text-blue-200/80 tracking-tight transition-colors duration-300 group-hover:text-[#2563EB] select-none">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-[#111827]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          CTA SECTION
          ========================================== */}
      <section className="bg-slate-900 text-white text-center py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
        
        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Simplify Legal Documents?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto leading-relaxed">
            Join enterprise operations groups running risk calculations securely behind isolated LLM node protection matrices.
          </p>
          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/login")}
              className="bg-[#2563EB] hover:bg-blue-500 text-white text-sm font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
               Ingest Your First Document
            </motion.button>
          </div>
        </div>
      </section>

      {/* ==========================================
          SIMPLE BLUE-COMPLEMENTED FOOTER
          ========================================== */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-xs text-slate-500 font-medium">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© 2026 Clarivox. All rights reserved.</div>
          <div className="flex gap-6 text-slate-400">
            <span className="hover:text-[#2563EB] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#2563EB] transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#2563EB] transition-colors cursor-pointer">Security Protocols</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;