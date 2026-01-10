import { useState, useRef, useEffect } from "react";
import svgPaths from "../../imports/svg-irdnlg96uc";

type PaymentSpeed = "standard" | "real-time";

interface PaymentSpeedDropdownProps {
  value: PaymentSpeed;
  onChange: (value: PaymentSpeed) => void;
}

export function PaymentSpeedDropdown({ value, onChange }: PaymentSpeedDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (speed: PaymentSpeed) => {
    onChange(speed);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[148px] h-9 bg-white border border-[#8d9096] rounded px-2 text-left flex items-center justify-between hover:border-[#6b6c72] transition-colors"
      >
        <span className="text-[16px] text-[#393a3d] font-[500]" style={{ fontFamily: 'var(--font-avenir-next)' }}>
          {value === "real-time" ? "Real-Time" : "Standard"}
        </span>
        <svg
          className={`w-6 h-6 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path d={svgPaths.p2afede00} fill="#393A3D" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-[280px] bg-white border border-[#8d9096] rounded shadow-lg z-50 overflow-hidden">
          {/* Standard Option */}
          <button
            onClick={() => handleSelect("standard")}
            className={`w-full px-4 py-3 text-left hover:bg-[#f4f5f8] transition-colors ${
              value === "standard" ? "bg-[#f4f5f8]" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[16px] text-[#393a3d] font-[500]" style={{ fontFamily: 'var(--font-avenir-next)' }}>
                  Standard
                </p>
                <p className="text-[14px] text-[#6b6c72] font-[400] mt-0.5" style={{ fontFamily: 'var(--font-avenir-next)' }}>
                  3-5 business days • Free
                </p>
              </div>
            </div>
          </button>

          {/* Real-Time Option */}
          <button
            onClick={() => handleSelect("real-time")}
            className={`w-full px-4 py-3 text-left hover:bg-[#f4f5f8] transition-colors border-t border-[#d4d7dc] ${
              value === "real-time" ? "bg-[#f4f5f8]" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-[16px] text-[#393a3d] font-[500]" style={{ fontFamily: 'var(--font-avenir-next)' }}>
                    Real-Time
                  </p>
                  <span className="bg-[#2ca01c] text-white text-[10px] font-[700] px-1.5 py-0.5 rounded uppercase tracking-wide" style={{ fontFamily: 'var(--font-avenir-next)' }}>
                    NEW
                  </span>
                </div>
                <p className="text-[14px] text-[#6b6c72] font-[400] mt-0.5" style={{ fontFamily: 'var(--font-avenir-next)' }}>
                  Arrives today • $4.99 fee
                </p>
              </div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
