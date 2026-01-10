import { useState } from "react";
import { ReviewSchedulePanel } from "./ReviewSchedulePanel";

interface FooterProps {
  onScheduleStart: () => void;
}

export function Footer({ onScheduleStart }: FooterProps) {
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 h-[68px] bg-white shadow-[0px_-4px_8px_0px_rgba(0,0,0,0.05)] flex items-center justify-between px-[20px] lg:px-[36px] z-30">
         <button className="text-[#108000] font-semibold text-[16px]">
           Cancel
         </button>
         
         <button 
           onClick={() => setIsReviewOpen(true)}
           className="bg-[#108000] text-white font-semibold text-[16px] px-[16px] h-[36px] rounded-[4px] hover:bg-[#0E7000] transition-colors"
         >
           Continue
         </button>
      </div>

      <ReviewSchedulePanel 
        isOpen={isReviewOpen} 
        onClose={() => setIsReviewOpen(false)}
        onSchedule={() => {
          setIsReviewOpen(false);
          // Small delay to allow panel to close smoothly before page transition
          setTimeout(onScheduleStart, 300);
        }}
      />
    </>
  );
}
