import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Info, HelpCircle } from "lucide-react";
import { cn } from "./ui/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip";

interface ReviewSchedulePanelProps {
  isOpen: boolean;
  onClose: () => void;
  onSchedule: () => void;
}

const svgPaths = {
  p1123b300: "M19.082 4.94C18.1572 4.007 17.0564 3.26673 15.8436 2.76207C14.6307 2.25742 13.3297 1.99839 12.016 2H12C9.34784 1.99788 6.80345 3.04941 4.92659 4.92328C3.04972 6.79714 1.99412 9.33983 1.992 11.992C1.98988 14.6442 3.04141 17.1885 4.91528 19.0654C6.78914 20.9423 9.33184 21.9979 11.984 22H12C13.9765 22 15.9086 21.4143 17.5524 20.3168C19.1962 19.2194 20.4779 17.6594 21.2357 15.834C21.9935 14.0086 22.1933 11.9995 21.81 10.0606C21.4267 8.12163 20.4774 6.33976 19.082 4.94ZM17.648 17.665C16.9073 18.4078 16.0269 18.9965 15.0575 19.3973C14.0881 19.7981 13.049 20.0029 12 20H11.987C9.86527 19.9983 7.83112 19.1538 6.33205 17.6523C4.83298 16.1507 3.99178 14.1152 3.9935 11.9935C3.99522 9.87177 4.83973 7.83762 6.34124 6.33855C7.84275 4.83948 9.87827 3.99828 12 4H12.012C13.5942 4.00251 15.14 4.4741 16.4542 5.35513C17.7683 6.23617 18.7917 7.48708 19.395 8.94972C19.9982 10.4124 20.1542 12.021 19.8433 13.5723C19.5323 15.1236 18.7684 16.5479 17.648 17.665Z",
  p17463d00: "M15 10C14.9984 9.20484 14.6818 8.4427 14.1196 7.88043C13.5573 7.31817 12.7952 7.00159 12 7C11.3331 7.00219 10.6859 7.22655 10.1607 7.63764C9.63551 8.04873 9.26229 8.6231 9.1 9.27C9.0628 9.39872 9.05185 9.53359 9.0678 9.66662C9.08374 9.79965 9.12625 9.92812 9.19281 10.0444C9.25937 10.1607 9.34862 10.2624 9.45526 10.3435C9.56189 10.4246 9.68374 10.4835 9.81357 10.5166C9.94339 10.5497 10.0785 10.5564 10.211 10.5363C10.3435 10.5161 10.4705 10.4696 10.5846 10.3994C10.6988 10.3292 10.7976 10.2367 10.8753 10.1276C10.953 10.0185 11.008 9.89481 11.037 9.764C11.0926 9.54926 11.2167 9.3585 11.3905 9.22064C11.5643 9.08277 11.7782 9.00531 12 9C12.2647 9.00157 12.5182 9.10744 12.7054 9.29463C12.8926 9.48183 12.9984 9.73527 13 10C13 10.013 13.007 10.024 13.007 10.037C13 10.05 13 10.06 13 10.073C13 10.1658 12.9742 10.2567 12.9254 10.3357C12.8767 10.4146 12.8069 10.4784 12.724 10.52L11.552 11.104C11.3858 11.1873 11.2461 11.3152 11.1486 11.4735C11.0511 11.6318 10.9996 11.8141 11 12V13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8946 11.7348 14 12 14C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V12.617L13.619 12.309C14.0428 12.0951 14.3974 11.7655 14.6418 11.3585C14.8862 10.9515 15.0104 10.4836 15 10.009V10Z",
  p17de5a00: "M12 15C11.8022 15 11.6089 15.0586 11.4444 15.1685C11.28 15.2784 11.1518 15.4346 11.0761 15.6173C11.0004 15.8 10.9806 16.0011 11.0192 16.1951C11.0578 16.3891 11.153 16.5673 11.2929 16.7071C11.4327 16.847 11.6109 16.9422 11.8049 16.9808C11.9989 17.0194 12.2 16.9996 12.3827 16.9239C12.5654 16.8482 12.7216 16.72 12.8315 16.5556C12.9414 16.3911 13 16.1978 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1054 12.2652 15 12 15Z"
};

// SVG Illustration Component
const CalendarIllustration = () => (
  <div className="w-[80px] h-[80px] flex items-center justify-center bg-white rounded-full relative">
     <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
       <rect x="20" y="16" width="40" height="48" rx="4" stroke="#393A3D" strokeWidth="2" fill="white"/>
       <path d="M20 28H60" stroke="#393A3D" strokeWidth="2"/>
       <path d="M30 12V20" stroke="#393A3D" strokeWidth="2"/>
       <path d="M50 12V20" stroke="#393A3D" strokeWidth="2"/>
       <path d="M28 36L34 42L44 32" stroke="#2CA01C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
       <circle cx="36" cy="38" r="14" stroke="#2CA01C" strokeWidth="2" strokeDasharray="4 4" className="opacity-0"/> 
     </svg>
  </div>
);


export function ReviewSchedulePanel({ isOpen, onClose, onSchedule }: ReviewSchedulePanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-[519px] bg-white shadow-[0px_6px_24px_rgba(0,0,0,0.2)] z-50 flex flex-col font-['Avenir_Next',_sans-serif]"
          >
            {/* Header */}
            <div className="h-[60px] shrink-0 flex items-center justify-between px-[12px] bg-white">
              <div className="w-[40px]" /> {/* Spacer for centering */}
              <h2 className="text-[16px] font-medium text-[#393A3D]">Bill payments</h2>
              <button 
                onClick={onClose}
                className="p-[6px] hover:bg-gray-100 rounded-[4px] transition-colors"
              >
                <X size={24} className="text-[#6B6C72]" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-[20px] pb-[40px]">
              
              {/* Info Banner */}
              <div className="mt-[20px] w-full border border-[#0097E6] rounded-[4px] p-[16px] flex gap-[16px] items-start relative">
                <div className="shrink-0 text-[#0077C5]">
                    {/* Filled Info Circle */}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="8.335" fill="#0077C5"/>
                        <path d="M10 7.5C10.46 7.5 10.83 7.13 10.83 6.67C10.83 6.21 10.46 5.83 10 5.83C9.54 5.83 9.17 6.21 9.17 6.67C9.17 7.13 9.54 7.5 10 7.5Z" fill="white"/>
                        <path d="M8.33 13.34C8.33 12.88 8.71 12.5 9.17 12.5H10.84C11.3 12.5 11.67 12.88 11.67 13.34C11.67 13.8 11.3 14.17 10.84 14.17H9.17C8.71 14.17 8.33 13.8 8.33 13.34Z" fill="white"/>
                        <rect x="9.17" y="8.33" width="1.66" height="5" fill="white"/>
                    </svg>
                </div>
                <div className="flex-1 pt-[2px]">
                  <p className="text-[14px] text-[#393A3D]">
                    <span className="font-semibold block mb-1">Instant payments can't be canceled</span>
                    <span className="font-normal">Once scheduled, they're processed immediately.</span>
                  </p>
                </div>
                <button className="text-[#6B6C72] hover:text-[#393A3D]">
                  <X size={20} />
                </button>
              </div>

              {/* Illustration Section */}
              <div className="mt-[30px] flex flex-col items-center">
                <CalendarIllustration />
                <h3 className="mt-[10px] text-[22px] font-semibold text-[#393A3D] leading-[29px] text-center">
                  Review and schedule
                </h3>
              </div>

              {/* Pay From Section */}
              <div className="mt-[40px] flex flex-col gap-[5px]">
                <span className="text-[15px] font-normal text-[#393A3D]">Pay from</span>
                <span className="text-[16px] font-medium text-[#393A3D]">Chase checking (...6714)</span>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#D4D7DC] w-full my-[40px]" />

              {/* Summary Section - Updated from Figma Import */}
              <div className="flex flex-col w-full">
                {/* Row 1 */}
                <div className="flex justify-between items-center h-[29px] w-full">
                  <span className="text-[16px] font-normal text-[#393A3D]">Number of bills</span>
                  <span className="text-[16.85px] font-semibold text-[#393A3D]">7</span>
                </div>
                {/* Row 2 */}
                <div className="flex justify-between items-center h-[29px] w-full">
                  <span className="text-[16px] font-normal text-[#393A3D]">Scheduled payments</span>
                  <span className="text-[16.85px] font-semibold text-[#393A3D]">3</span>
                </div>
                {/* Row 3 */}
                <div className="flex justify-between items-center h-[29px] w-full">
                  <span className="text-[16px] font-normal text-[#393A3D]">Processing fee for paper checks</span>
                  <span className="text-[16.85px] font-semibold text-[#393A3D]">$1.50</span>
                </div>
                {/* Row 4 - ACH */}
                <div className="flex justify-between items-center h-[29px] w-full">
                  <div className="flex items-center gap-[2px]">
                     <span className="text-[16px] font-normal text-[#393A3D]">Processing fee for ACH payments</span>
                     <div className="flex flex-col items-start p-[2px] relative shrink-0">
                        <span className="text-[16px] font-normal text-[#393A3D] leading-[24px] whitespace-nowrap">(if applicable)</span>
                        <svg className="block w-full h-[1px]" fill="none" preserveAspectRatio="none" viewBox="0 0 100 1">
                          <line stroke="#393A3D" strokeDasharray="1 1" x2="100" y1="0.5" y2="0.5" />
                        </svg>
                     </div>
                  </div>
                  <span className="text-[16.85px] font-semibold text-[#393A3D]">$0.50</span>
                </div>
                {/* Row 5 - Instant with Tooltip */}
                <div className="flex justify-between items-center h-[29px] w-full">
                  <div className="flex items-center gap-[6px]">
                     <span className="text-[16px] font-normal text-[#393A3D]">Processing fee for instant payments</span>
                     
                     <Tooltip>
                        <TooltipTrigger asChild>
                           <div className="size-[24px] cursor-help">
                              <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                                <g>
                                   <path d={svgPaths.p17de5a00} fill="#6B6C72" />
                                   <path d={svgPaths.p17463d00} fill="#6B6C72" />
                                   <path d={svgPaths.p1123b300} fill="#6B6C72" />
                                </g>
                              </svg>
                           </div>
                        </TooltipTrigger>
                        <TooltipContent 
                          side="top" 
                          className="bg-[#393A3D] text-white border-none p-[8px] rounded-[4px] [&>span]:fill-[#393A3D]" 
                          sideOffset={5}
                        >
                           <div className="flex flex-col font-['Avenir_Next'] justify-center leading-[20px] text-[14px] text-white">
                              <p className="mb-0">The fee is 1% of the payment amount,</p>
                              <p className="mb-0">with a minimum of $10 and a maximum</p>
                              <p>of $100 per payment.</p>
                           </div>
                        </TooltipContent>
                     </Tooltip>

                  </div>
                  <span className="text-[16.85px] font-semibold text-[#393A3D]">$100.00</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#D4D7DC] w-full my-[40px]" />

              {/* Total Section */}
              <div className="flex justify-between items-start mb-[20px]">
                <span className="text-[20px] font-semibold text-[#393A3D]">Total payment amount</span>
                <div className="flex flex-col items-end">
                  <span className="text-[20px] font-semibold text-[#393A3D]">$18,200.00</span>
                  <span className="text-[16px] font-normal text-[#393A3D] mt-1">Total processing fees: $102.00</span>
                </div>
              </div>

              {/* Authorization */}
              <div className="mt-[20px] flex flex-col gap-[4px]">
                <h4 className="text-[14px] font-semibold text-[#393A3D]">Payment Authorization</h4>
                <p className="text-[16px] font-normal text-[#393A3D] leading-[24px]">
                  By selecting <span className="font-semibold">Schedule payments</span>, I authorize Intuit to withdraw funds from my account and deliver this payment to the vendor specified. I verify that the amount of funds to be paid is correct. I understand the vendor may change the delivery method for this payment but my withdrawal date will not change.
                </p>
              </div>

            </div>

            {/* Footer */}
            <div className="relative shrink-0">
               {/* Gradient Fade */}
               <div className="absolute bottom-full left-0 right-0 h-[56px] bg-gradient-to-b from-transparent to-white pointer-events-none" />
               
               <div className="h-[68px] bg-white border-t border-[#D4D7DC] px-[20px] py-[16px] flex justify-end items-center relative z-10 shadow-[0px_-4px_8px_rgba(0,0,0,0.05)]">
                 <button
                   onClick={onSchedule}
                   className="h-[36px] bg-[#00892E] hover:bg-[#006d25] text-white text-[16px] font-semibold px-[16px] rounded-[4px] min-w-[100px] transition-colors"
                 >
                   Schedule payments
                 </button>
               </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
