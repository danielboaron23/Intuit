import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { X, HelpCircle, Calendar, FileText, Clock } from "lucide-react";

interface PaymentProgressScreenProps {
  onComplete: () => void;
  onClose: () => void;
}

const Illustration = () => (
  <div className="relative w-[240px] h-[240px] flex items-center justify-center">
    {/* Floating Icons Background */}
    <div className="absolute top-[20px] left-[20px] bg-[#E8F4FC] p-3 rounded-full animate-bounce delay-75">
      <Calendar className="text-[#0077C5] w-6 h-6" />
    </div>
    <div className="absolute bottom-[40px] right-[30px] bg-[#E8F4FC] p-3 rounded-full animate-bounce delay-150">
      <FileText className="text-[#0077C5] w-6 h-6" />
    </div>
    <div className="absolute top-[30px] right-[40px] bg-[#E8F4FC] p-3 rounded-full animate-bounce delay-300">
      <Clock className="text-[#0077C5] w-6 h-6" />
    </div>

    {/* Main Illustration (Simplified abstract representation of person at desk) */}
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
       <circle cx="100" cy="100" r="90" fill="#F4F5F8" />
       {/* Desk */}
       <rect x="40" y="140" width="120" height="10" rx="2" fill="#393A3D" />
       {/* Laptop */}
       <path d="M70 140L80 110H120L130 140H70Z" fill="#D4D7DC" />
       <rect x="75" y="112" width="50" height="25" fill="#393A3D" />
       {/* Person Body */}
       <path d="M60 180C60 150 70 130 100 130C130 130 140 150 140 180" fill="#0077C5" />
       {/* Person Head */}
       <circle cx="100" cy="110" r="20" fill="#F9A825" />
    </svg>
  </div>
);

export function PaymentProgressScreen({ onComplete, onClose }: PaymentProgressScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="w-full h-screen bg-white flex flex-col font-['Avenir_Next',_sans-serif]">
      {/* Header */}
      <div className="h-[70px] bg-[#F4F5F8] px-[36px] py-[17px] flex justify-between items-center shrink-0">
        <h1 className="text-[24px] font-bold text-[#393A3D]">Schedule bill payment</h1>
        <div className="flex items-center gap-[24px]">
          <button className="flex items-center gap-[8px] text-[#6B6C72] hover:text-[#393A3D]">
            <HelpCircle size={24} />
            <span className="text-[16px] font-medium">Help</span>
          </button>
          <button onClick={onClose} className="text-[#393A3D] hover:text-[#000000]">
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center gap-[40px]">
        {/* Illustration */}
        <Illustration />

        {/* Text */}
        <div className="text-center">
          <h2 className="text-[40px] font-black text-[#393A3D] mb-[16px]">Setting up your payments</h2>
          <div className="max-w-[794px] text-[20px] leading-[28px] text-[#393A3D]">
            <p>This may take a few minutes. Feel free to close the page and keep working.</p>
            <p>We'll email you when we're done.</p>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="w-[400px] flex flex-col items-center gap-[8px]">
          <span className="text-[14px] font-medium text-[#6B6C72]">
            In progress ({Math.round(progress)}%)
          </span>
          <div className="w-full h-[12px] bg-[#D4D7DC] rounded-[200px] overflow-hidden">
            <motion.div
              className="h-full bg-[#2CA01C] rounded-[200px]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.03 }} // Smooth updates from state
            />
          </div>
        </div>
      </div>
    </div>
  );
}
