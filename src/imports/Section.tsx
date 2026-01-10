import svgPaths from "./svg-oq5puwztki";

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

function Frame3() {
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
      <Frame3 />
      <Link1 />
    </div>
  );
}

function Frame4() {
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
      <Frame4 />
      <Link3 />
    </div>
  );
}

function Frame5() {
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
      <Frame5 />
      <Link5 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-0 px-0 relative size-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Accordion1 />
      <NameAndValuePairing />
      <NameAndValuePairing1 />
      <NameAndValuePairing2 />
    </div>
  );
}