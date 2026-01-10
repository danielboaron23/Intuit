import { CircleHelp, X } from "lucide-react";

export function Header() {
  return (
    <header className="h-[70px] bg-[#F4F5F8] px-[20px] md:px-[36px] py-[17px] flex items-center justify-between shrink-0">
      <h1 className="font-bold text-[24px] text-[#393A3D] leading-[1.2]">
        Schedule bill payment
      </h1>
      <div className="flex items-center gap-[24px]">
        <button className="flex items-center gap-[4px] text-[#6B6C72] hover:text-[#393A3D] transition-colors group">
          <CircleHelp className="w-[24px] h-[24px]" />
          <span className="font-medium text-[16px] leading-[24px]">
            Help
          </span>
        </button>
        <button className="text-[#393A3D] hover:text-[#000000] transition-colors">
          <X className="w-[24px] h-[24px]" />
        </button>
      </div>
    </header>
  );
}
