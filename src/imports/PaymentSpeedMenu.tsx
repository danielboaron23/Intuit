function Frame3() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[266px]">
      <div className="absolute flex flex-col font-['AvenirNext_forINTUIT:Demi',sans-serif] justify-center left-0 text-[#393a3d] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="leading-[20px] text-nowrap">Standard</p>
      </div>
      <div className="absolute flex flex-col font-['AvenirNext_forINTUIT:Regular',sans-serif] justify-center left-[266px] text-[#6b6c72] text-[12px] text-right top-[10px] translate-x-[-100%] translate-y-[-50%]">
        <p className="leading-[16px] text-nowrap">$0.50 fee may apply</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 grow h-[58px] leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
      <Frame3 />
      <div className="absolute flex flex-col font-['AvenirNext_forINTUIT:Regular',sans-serif] justify-center left-0 text-[#6b6c72] text-[12px] top-[50px] translate-y-[-50%]">
        <p className="leading-[16px] text-nowrap">3 business days</p>
      </div>
      <div className="absolute flex flex-col font-['AvenirNext_forINTUIT:Regular',sans-serif] justify-center left-0 text-[#393a3d] text-[12px] top-[32px] translate-y-[-50%]">
        <p className="leading-[16px] text-nowrap">01/13/2025</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function MenuItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu item">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative w-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[266px]">
      <div className="absolute flex flex-col font-['AvenirNext_forINTUIT:Demi',sans-serif] justify-center left-0 text-[#393a3d] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="leading-[20px] text-nowrap">Faster</p>
      </div>
      <div className="absolute flex flex-col font-['AvenirNext_forINTUIT:Regular',sans-serif] justify-center left-[266px] text-[#6b6c72] text-[12px] text-right top-[10px] translate-x-[-100%] translate-y-[-50%]">
        <p className="leading-[16px] text-nowrap">$10.00 processing fee</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 grow h-[58px] leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
      <Frame4 />
      <div className="absolute flex flex-col font-['AvenirNext_forINTUIT:Regular',sans-serif] justify-center left-0 text-[#6b6c72] text-[12px] top-[50px] translate-y-[-50%]">
        <p className="leading-[16px] text-nowrap">1 business day</p>
      </div>
      <div className="absolute flex flex-col font-['AvenirNext_forINTUIT:Regular',sans-serif] justify-center left-0 text-[#393a3d] text-[12px] top-[32px] translate-y-[-50%]">
        <p className="leading-[16px] text-nowrap">01/09/2025</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu item">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative w-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Component06New() {
  return (
    <div className="bg-[#c9007a] content-stretch flex flex-col items-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="06 - New">
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Demi',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white uppercase">
        <p className="leading-[16px]">New</p>
      </div>
    </div>
  );
}

function BadgeTextStatus() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[50px] top-[2px]" data-name="Badge - Text Status">
      <Component06New />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[266px]">
      <div className="absolute flex flex-col font-['AvenirNext_forINTUIT:Demi',sans-serif] justify-center leading-[0] left-0 not-italic text-[#393a3d] text-[14px] text-nowrap top-[10px] translate-y-[-50%]">
        <p className="leading-[20px]">Instant</p>
      </div>
      <BadgeTextStatus />
      <div className="absolute flex flex-col font-['AvenirNext_forINTUIT:Regular',sans-serif] justify-center leading-[0] left-[266px] not-italic text-[#6b6c72] text-[12px] text-nowrap text-right top-[10px] translate-x-[-100%] translate-y-[-50%]">
        <p className="leading-[16px]">$100.00 processing fee</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 grow h-[58px] min-h-px min-w-px relative shrink-0">
      <Frame7 />
      <div className="absolute flex flex-col font-['AvenirNext_forINTUIT:Regular',sans-serif] justify-center leading-[0] left-0 not-italic text-[#6b6c72] text-[12px] text-nowrap top-[50px] translate-y-[-50%]">
        <p className="leading-[16px]">Within minutes (if scheduled by 5 PM PT)</p>
      </div>
      <div className="absolute flex flex-col font-['AvenirNext_forINTUIT:Regular',sans-serif] justify-center leading-[0] left-0 not-italic text-[#393a3d] text-[12px] text-nowrap top-[32px] translate-y-[-50%]">
        <p className="leading-[16px]">01/08/2025</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="bg-[rgba(107,108,114,0.1)] relative shrink-0 w-full" data-name="Menu item">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative w-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

export default function PaymentSpeedMenu() {
  return (
    <div className="bg-white relative rounded-[4px] size-full" data-name="Payment speed menu">
      <div className="content-stretch flex flex-col items-start overflow-clip px-0 py-[4px] relative rounded-[inherit] size-full">
        <MenuItem />
        <MenuItem1 />
        <MenuItem2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d7dc] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.2)]" />
    </div>
  );
}