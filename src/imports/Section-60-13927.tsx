function NameAndValuePairing() {
  return (
    <div className="content-stretch flex gap-[24px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full" data-name="Name and Value Pairing">
      <p className="basis-0 font-['AvenirNext_forINTUIT:Demi',sans-serif] grow min-h-px min-w-px relative shrink-0 text-[#393a3d]">Deliver to</p>
      <p className="basis-0 font-['AvenirNext_forINTUIT:Regular',sans-serif] grow min-h-px min-w-px relative shrink-0 text-black text-right">
        Red Ocean Developers
        <br aria-hidden="true" />
        Citibank Checking (...6600)
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#393a3d] text-[16px] text-nowrap">Delivery date</p>
    </div>
  );
}

function NameAndValuePairing1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Name and Value Pairing">
      <Frame />
      <p className="basis-0 font-['AvenirNext_forINTUIT:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black text-right">01/08/2025</p>
    </div>
  );
}

export default function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-0 px-0 relative size-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <NameAndValuePairing />
      <NameAndValuePairing1 />
    </div>
  );
}