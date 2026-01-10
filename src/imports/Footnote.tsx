function Frame1() {
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

function Link() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name=".Link">
      <div className="flex flex-col font-['Avenir_Next_forINTUIT:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0077c5] text-[14px] text-nowrap">
        <p className="leading-[1.5]">Terms of Service</p>
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

export default function Footnote() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative size-full" data-name="Footnote">
      <Frame1 />
      <Link1 />
    </div>
  );
}