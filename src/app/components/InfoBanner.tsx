export function InfoBanner() {
  return (
    <div className="bg-[#e8f5e9] border-l-4 border-[#2ca01c] px-9 py-3 flex items-center gap-3">
      <div className="flex items-center justify-center w-6 h-6">
        <svg className="w-5 h-5 text-[#2ca01c]" fill="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M10 6v5M10 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-[14px] text-[#393a3d] font-[500]" style={{ fontFamily: 'var(--font-avenir-next)' }}>
          <span className="font-[600]">Real-Time payment is available!</span> Pay before{" "}
          <span className="font-[600]">5:00 PM PT</span> for same-day delivery
        </p>
      </div>
    </div>
  );
}
