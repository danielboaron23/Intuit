function NameAndValuePairing() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[24px] not-italic relative shrink-0 text-[#393a3d] text-[16px] w-full" data-name="Name and Value Pairing">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] relative shrink-0 w-full">Note to vendor</p>
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] relative shrink-0 w-full">This text is an example of a 140-character paragraph that serves as a reminder of the limit we have when we need to convey a short message.</p>
    </div>
  );
}

export default function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-0 px-0 relative size-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <NameAndValuePairing />
    </div>
  );
}