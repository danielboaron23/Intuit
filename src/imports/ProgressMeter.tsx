function Frame4() {
  return (
    <div className="h-[30px] mb-[-27px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[33px] py-[10px] relative size-full">
          <div className="basis-0 bg-[#53b700] grow h-[12px] min-h-px min-w-px shrink-0" data-name="Rectangle" />
          <div className="basis-0 bg-[#d4d7dc] grow h-[12px] min-h-px min-w-px shrink-0" data-name="Rectangle" />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[67px]">
      <div className="relative shrink-0 size-[24px]" data-name="Oval">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(16, 128, 0, 1)", "--stroke-0": "rgba(16, 128, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" fill="var(--fill-0, #108000)" id="Oval" r="10" stroke="var(--stroke-0, #108000)" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#393a3d] text-[12px] text-center w-[min-content]">Scheduled</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[67px]">
      <div className="relative shrink-0 size-[24px]" data-name="Oval">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(16, 128, 0, 1)", "--stroke-0": "rgba(16, 128, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" fill="var(--fill-0, #108000)" id="Oval" r="10" stroke="var(--stroke-0, #108000)" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#393a3d] text-[12px] text-center w-[min-content]">Processing</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[67px]">
      <div className="relative shrink-0 size-[24px]" data-name="Oval">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(186, 190, 197, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" fill="var(--fill-0, white)" id="Oval" r="11.5" stroke="var(--stroke-0, #BABEC5)" />
          </svg>
        </div>
      </div>
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#393a3d] text-[12px] text-center w-[min-content]">Delivered</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between mb-[-27px] relative shrink-0 w-full">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

export default function ProgressMeter() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[27px] pt-0 px-0 relative size-full" data-name="Progress Meter">
      <Frame4 />
      <Frame3 />
    </div>
  );
}