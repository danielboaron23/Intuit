import { Zap } from "lucide-react";

export function RealTimeBanner() {
  return (
    <div className="w-full mt-0 mb-[16px] h-[40px] bg-[#F1FBEF] flex items-center px-[36px] gap-[12px]">
       <Zap className="w-[24px] h-[24px] text-[#2CA01C] fill-[#2CA01C]" />
       <div className="flex items-center gap-1 text-[14px] text-[#393A3D] leading-[20px]">
          <span className="font-semibold">Real-Time payment is available!</span>
          <span className="font-medium">Pay before <span className="font-bold">5:00 PM PT</span></span>
          <span className="font-normal">for same-day delivery</span>
       </div>
    </div>
  );
}
