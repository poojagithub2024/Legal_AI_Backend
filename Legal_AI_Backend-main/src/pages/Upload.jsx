import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineCloudUpload, HiOutlineDocumentText, HiOutlineCheckCircle } from "react-icons/hi";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false); // New state to handle loading overlays cleanly
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      alert("Please upload a document first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      // 1. Activate the loading state immediately right here
      setIsAnalyzing(true); 
      
      // STEP 1: Upload the file to the database to get a document_id
      const uploadResponse = await fetch("http://127.0.0.1:8000/upload", {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) throw new Error("File upload failed");

      const uploadData = await uploadResponse.json();
      const docId = uploadData.document_id; 

      // STEP 2: Send that ID to the AI analysis engine
      const analyzeResponse = await fetch(`http://127.0.0.1:8000/analyze/${docId}`, {
        method: "POST",
      });

      if (!analyzeResponse.ok) throw new Error("AI analysis processing failed");

      const aiData = await analyzeResponse.json();
      
      // STEP 3: Pass the data directly over to the Dashboard
      // By changing pages only AFTER the data arrives, we prevent empty layout flashes!
      navigate("/dashboard", { state: { aiResult: aiData } });

    } catch (error) {
      console.error("Pipeline Error:", error);
      alert("An error occurred while communicating with the AI server.");
      setIsAnalyzing(false); // Reset loading state on failure
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] px-6 py-16 font-sans selection:bg-blue-100 selection:text-[#2563EB] relative overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-3xl rounded-full -z-10" />

      {/* ==========================================
          INTERACTIVE LOADING OVERLAY SCREEN
          ========================================== */}
      <AnimatePresence>
        {isAnalyzing && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#F8FAFC] z-50 flex flex-col items-center justify-center text-center px-6"
          >
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl max-w-md space-y-6 flex flex-col items-center">
              <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <div className="space-y-2">
                <h2 className="text-2xl font-black text-[#111827]">Analyzing Document Engine</h2>
                <p className="text-sm text-[#6B7280]">
                  Extracting structural legal clauses and building contract risk vectors...
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==========================================
          HEADER SECTION
          ========================================== */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center max-w-xl mx-auto mb-12"
      >
        <h1 className="text-4xl font-extrabold tracking-tight text-[#111827] sm:text-5xl">
          Upload Legal Document
        </h1>
        <p className="text-base text-[#6B7280] mt-3 leading-relaxed">
          Upload your contract and let <span className="text-[#2563EB] font-semibold">Clarivox</span> analyze, summarize, and detect high-impact risks automatically.
        </p>
      </motion.div>

      {/* ==========================================
          UPLOAD CARD CONTAINER
          ========================================== */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="max-w-2xl mx-auto bg-white border border-slate-200 p-8 rounded-2xl shadow-xl shadow-slate-200/50"
      >
        {/* Interactive Dropzone Area */}
        <motion.div
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          animate={{ 
            borderColor: isDragActive ? "#2563EB" : "#E2E8F0",
            backgroundColor: isDragActive ? "#F0F6FF" : "#FFFFFF" 
          }}
          transition={{ duration: 0.2 }}
          className="border-2 border-dashed rounded-xl p-10 text-center flex flex-col items-center justify-center relative group"
        >
          {/* Top Graphic Toggle */}
          <div className="mb-4 p-4 bg-slate-50 text-slate-800 rounded-xl border border-slate-100 group-hover:text-[#2563EB] group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors duration-300">
            <HiOutlineCloudUpload size={32} className="animate-pulse" />
          </div>

          <h2 className="text-lg font-bold text-[#111827]">Drag & Drop File</h2>
          <p className="text-xs text-[#6B7280] mt-1 mb-6">Supported formats: PDF, DOCX</p>

          {/* Trigger Button For File Explorer */}
          <motion.label 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#111827] hover:bg-black text-white text-xs font-semibold px-6 py-3 rounded-xl cursor-pointer shadow-md transition-colors"
          >
            Choose File
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
          </motion.label>

          {/* Dynamic File Reveal Banner */}
          <AnimatePresence>
            {selectedFile && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mt-6 w-full max-w-sm flex items-center gap-3 bg-emerald-50/60 border border-emerald-100 p-3.5 rounded-xl text-left"
              >
                <HiOutlineDocumentText className="text-[#10B981] shrink-0" size={22} />
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-[#111827] truncate">{selectedFile.name}</div>
                  <div className="text-[10px] text-[#10B981] font-medium flex items-center gap-1 mt-0.5">
                    <HiOutlineCheckCircle /> Ready for internal extraction engine
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Action Button Activation Element */}
        <motion.button
          whileHover={selectedFile ? { scale: 1.01 } : {}}
          whileTap={selectedFile ? { scale: 0.99 } : {}}
          onClick={handleAnalyze}
          disabled={!selectedFile}
          className={`w-full mt-6 py-4 rounded-xl font-semibold text-sm transition-all shadow-md ${
            selectedFile 
              ? "bg-[#2563EB] hover:bg-[#1E3A8A] text-white shadow-blue-500/10 cursor-pointer" 
              : "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none"
          }`}
        >
          Analyze Document
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Upload;