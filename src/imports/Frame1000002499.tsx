import svgPaths from "./svg-qn8hhgdq00";

function ChevronDown() {
  return (
    <div className="bg-[rgba(107,108,114,0)] relative shrink-0 size-[24px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-down">
          <path d={svgPaths.p16e9b500} fill="var(--fill-0, #6B6C72)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Accordion() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name=".Accordion">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#393a3d] text-[16px] text-center text-nowrap">3 bills</p>
      <ChevronDown />
    </div>
  );
}

function Accordion1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Accordion">
      <Accordion />
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#393a3d]">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[24px] relative shrink-0 text-[16px] w-[187px]">$5,000.00 | Bill no. 1051</p>
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-nowrap">Bill due date: 01/18/2025</p>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name=".Link">
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Demi',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0365ac] text-[16px] text-nowrap">
        <p className="leading-[24px]">View bill</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Link">
      <Frame />
    </div>
  );
}

function NameAndValuePairing() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Name and Value Pairing">
      <Frame7 />
      <Link1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#393a3d]">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[24px] relative shrink-0 text-[16px] w-[187px]">$5,000.00 | Bill no. 1052</p>
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-nowrap">Bill due date: 01/19/2025</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name=".Link">
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Demi',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0365ac] text-[16px] text-nowrap">
        <p className="leading-[24px]">View bill</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Link">
      <Frame1 />
    </div>
  );
}

function NameAndValuePairing1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Name and Value Pairing">
      <Frame8 />
      <Link3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#393a3d]">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[24px] relative shrink-0 text-[16px] w-[187px]">$5,000.00 | Bill no. 1053</p>
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-nowrap">Bill due date: 01/25/2025</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name=".Link">
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Demi',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0365ac] text-[16px] text-nowrap">
        <p className="leading-[24px]">View bill</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Link">
      <Frame2 />
    </div>
  );
}

function NameAndValuePairing2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Name and Value Pairing">
      <Frame9 />
      <Link5 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-0 px-0 relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Accordion1 />
      <NameAndValuePairing />
      <NameAndValuePairing1 />
      <NameAndValuePairing2 />
    </div>
  );
}

function NameAndValuePairing3() {
  return (
    <div className="content-stretch flex gap-[24px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full" data-name="Name and Value Pairing">
      <p className="basis-0 font-['AvenirNext_forINTUIT:Demi',sans-serif] grow min-h-px min-w-px relative shrink-0 text-[#393a3d]">Vendor</p>
      <p className="basis-0 font-['AvenirNext_forINTUIT:Regular',sans-serif] grow min-h-px min-w-px relative shrink-0 text-black text-right">Red Ocean Developers</p>
    </div>
  );
}

function NameAndValuePairing4() {
  return (
    <div className="content-stretch flex gap-[24px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full" data-name="Name and Value Pairing">
      <p className="basis-0 font-['AvenirNext_forINTUIT:Demi',sans-serif] grow min-h-px min-w-px relative shrink-0 text-[#393a3d]">Pay to vendor</p>
      <p className="basis-0 font-['AvenirNext_forINTUIT:Regular',sans-serif] grow min-h-px min-w-px relative shrink-0 text-black text-right">$15,000.00</p>
    </div>
  );
}

function NameAndValuePairing5() {
  return (
    <div className="content-stretch flex gap-[24px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full" data-name="Name and Value Pairing">
      <p className="basis-0 font-['AvenirNext_forINTUIT:Demi',sans-serif] grow min-h-px min-w-px relative shrink-0 text-[#393a3d]">Processing fee</p>
      <p className="basis-0 font-['AvenirNext_forINTUIT:Regular',sans-serif] grow min-h-px min-w-px relative shrink-0 text-black text-right">$100.00</p>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-0 px-0 relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <NameAndValuePairing3 />
      <NameAndValuePairing4 />
      <NameAndValuePairing5 />
    </div>
  );
}

function NameAndValuePairing6() {
  return (
    <div className="content-stretch flex gap-[24px] items-start not-italic relative shrink-0 text-[16px] w-full" data-name="Name and Value Pairing">
      <p className="basis-0 font-['AvenirNext_forINTUIT:Demi',sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#393a3d]">Pay from</p>
      <div className="basis-0 font-['AvenirNext_forINTUIT:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-black text-right">
        <p className="mb-0">Amy’s Bakery</p>
        <p>Chase Checking (...5555)</p>
      </div>
    </div>
  );
}

function NameAndValuePairing7() {
  return (
    <div className="content-stretch flex gap-[24px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full" data-name="Name and Value Pairing">
      <p className="basis-0 font-['AvenirNext_forINTUIT:Demi',sans-serif] grow min-h-px min-w-px relative shrink-0 text-[#393a3d]">Withdrawal date</p>
      <p className="basis-0 font-['AvenirNext_forINTUIT:Regular',sans-serif] grow min-h-px min-w-px relative shrink-0 text-black text-right">01/08/2025</p>
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-0 px-0 relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <NameAndValuePairing6 />
      <NameAndValuePairing7 />
    </div>
  );
}

function NameAndValuePairing8() {
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

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#393a3d] text-[16px] text-nowrap">Delivery date</p>
    </div>
  );
}

function NameAndValuePairing9() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Name and Value Pairing">
      <Frame6 />
      <p className="basis-0 font-['AvenirNext_forINTUIT:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black text-right">01/08/2025</p>
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-0 px-0 relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <NameAndValuePairing8 />
      <NameAndValuePairing9 />
    </div>
  );
}

function NameAndValuePairing10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[24px] not-italic relative shrink-0 text-[#393a3d] text-[16px] w-full" data-name="Name and Value Pairing">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] relative shrink-0 w-full">Note to vendor</p>
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] relative shrink-0 w-full">This text is an example of a 140-character paragraph that serves as a reminder of the limit we have when we need to convey a short message.</p>
    </div>
  );
}

function Section4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-0 px-0 relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <NameAndValuePairing10 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[#6b6c72] w-full">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[16px] relative shrink-0 text-[12px] w-full">{`Need help with this payment? `}</p>
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[20px] relative shrink-0 text-[0px] text-[12px] w-full">
        <span>{`Select Help to get a callback from an expert. We may ask you for the `}</span>
        <span className="font-['AvenirNext_forINTUIT:Demi',sans-serif]">reference ID</span>: 43645h47674h46
      </p>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name=".Link">
      <div className="flex flex-col font-['Avenir_Next_forINTUIT:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0077c5] text-[14px] text-nowrap">
        <p className="leading-[1.5]">Terms of Service</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Link6 />
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Link">
      <Frame3 />
    </div>
  );
}

function Footnote() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Footnote">
      <Frame5 />
      <Link7 />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footnote />
    </div>
  );
}