import svgPaths from "./svg-gadohvb81h";

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-down">
          <path d={svgPaths.p16e9b500} fill="var(--fill-0, #393A3D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-0 relative rounded-[4px] shrink-0" data-name="Label">
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Demi',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#393a3d] text-[16px] text-nowrap">
        <p className="leading-[24px]">Filters</p>
      </div>
      <ChevronDown />
    </div>
  );
}

function ButtonFill() {
  return (
    <div className="bg-[rgba(57,58,61,0)] content-stretch flex flex-col items-center relative rounded-[4px] shrink-0" data-name="Button Fill">
      <div aria-hidden="true" className="absolute border-2 border-[#6b6c72] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="h-[6px] shrink-0 w-[100px]" data-name="Min-Width Shim" />
      <Label />
      <div className="h-[6px] shrink-0 w-[100px]" data-name="Min-Width Shim" />
    </div>
  );
}

function Focus() {
  return (
    <div className="content-stretch flex flex-col items-center relative rounded-[20px] shrink-0" data-name="Focus">
      <ButtonFill />
    </div>
  );
}

function ButtonShape() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Button shape">
      <Focus />
    </div>
  );
}

function DropdownButton() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Dropdown button">
      <ButtonShape />
    </div>
  );
}

function Filters() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="filters">
      <DropdownButton />
    </div>
  );
}

function TertiaryActions() {
  return <div className="content-stretch flex gap-[16px] items-center justify-end shrink-0" data-name="Tertiary actions" />;
}

function TableActions() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between relative shrink-0 w-[1880px]" data-name="Table actions">
      <Filters />
      <TertiaryActions />
    </div>
  );
}

function PiecesColumnHeaderL() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip px-[16px] py-0 relative shrink-0" data-name=".Pieces/Column Header L">
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Demi',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap uppercase">
        <p className="leading-[20px]">ID</p>
      </div>
    </div>
  );
}

function Component03Cozy03Cell01LeftHeader() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="03 - Cozy/03 - Cell/01 - Left/Header">
      <div className="content-stretch flex items-center overflow-clip px-0 py-[8px] relative rounded-[inherit] size-full">
        <PiecesColumnHeaderL />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PiecesColumnHeaderL1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip px-[16px] py-0 relative shrink-0" data-name=".Pieces/Column Header L">
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Demi',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap uppercase">
        <p className="leading-[20px]">Vendor</p>
      </div>
    </div>
  );
}

function Component03Cozy03Cell01LeftHeader1() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="03 - Cozy/03 - Cell/01 - Left/Header">
      <div className="content-stretch flex items-center overflow-clip px-0 py-[8px] relative rounded-[inherit] size-full">
        <PiecesColumnHeaderL1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PiecesColumnHeaderL2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip px-[16px] py-0 relative shrink-0" data-name=".Pieces/Column Header L">
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Demi',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap uppercase">
        <p className="leading-[20px]">Bill no.</p>
      </div>
    </div>
  );
}

function Component03Cozy03Cell01LeftHeader2() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="03 - Cozy/03 - Cell/01 - Left/Header">
      <div className="content-stretch flex items-center overflow-clip px-0 py-[8px] relative rounded-[inherit] size-full">
        <PiecesColumnHeaderL2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PiecesColumnHeaderL3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip px-[16px] py-0 relative shrink-0" data-name=".Pieces/Column Header L">
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Demi',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap uppercase">
        <p className="leading-[20px]">Withdrawal date</p>
      </div>
    </div>
  );
}

function Component03Cozy03Cell01LeftHeader3() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="03 - Cozy/03 - Cell/01 - Left/Header">
      <div className="content-stretch flex items-center overflow-clip px-0 py-[8px] relative rounded-[inherit] size-full">
        <PiecesColumnHeaderL3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PiecesColumnHeaderL4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip px-[16px] py-0 relative shrink-0" data-name=".Pieces/Column Header L">
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Demi',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap uppercase">
        <p className="leading-[16px]">Paid from</p>
      </div>
    </div>
  );
}

function Component03Cozy03Cell01LeftHeader4() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="03 - Cozy/03 - Cell/01 - Left/Header">
      <div className="content-stretch flex items-center overflow-clip px-0 py-[8px] relative rounded-[inherit] size-full">
        <PiecesColumnHeaderL4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PiecesColumnHeaderL5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip px-[16px] py-0 relative shrink-0" data-name=".Pieces/Column Header L">
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Demi',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap uppercase">
        <p className="leading-[16px]">PAYMENT METHOD</p>
      </div>
    </div>
  );
}

function Component03Cozy03Cell01LeftHeader5() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="03 - Cozy/03 - Cell/01 - Left/Header">
      <div className="content-stretch flex items-center overflow-clip px-0 py-[8px] relative rounded-[inherit] size-full">
        <PiecesColumnHeaderL5 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PiecesColumnHeaderL6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip px-[16px] py-0 relative shrink-0" data-name=".Pieces/Column Header L">
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Demi',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap text-right uppercase">
        <p className="leading-[16px]">Payment amount</p>
      </div>
    </div>
  );
}

function Component03Cozy03Cell01LeftHeader6() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="03 - Cozy/03 - Cell/01 - Left/Header">
      <div className="content-stretch flex items-center justify-end overflow-clip px-0 py-[8px] relative rounded-[inherit] size-full">
        <PiecesColumnHeaderL6 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PiecesColumnHeaderL7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip px-[16px] py-0 relative shrink-0" data-name=".Pieces/Column Header L">
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Demi',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap uppercase">
        <p className="leading-[16px]">status</p>
      </div>
    </div>
  );
}

function Component03Cozy03Cell01LeftHeader7() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="03 - Cozy/03 - Cell/01 - Left/Header">
      <div className="content-stretch flex items-center overflow-clip px-0 py-[8px] relative rounded-[inherit] size-full">
        <PiecesColumnHeaderL7 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PiecesColumnHeaderR() {
  return (
    <div className="content-stretch flex gap-[4px] items-start overflow-clip px-[16px] py-0 relative shrink-0" data-name=".Pieces/Column Header R">
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Demi',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap text-right uppercase">
        <p className="leading-[20px]">Action</p>
      </div>
    </div>
  );
}

function Component03Cozy03Cell02RightHeader() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center overflow-clip px-0 py-[8px] right-[-0.11px] top-0" data-name="03 - Cozy/03 - Cell/02 - Right/Header">
      <PiecesColumnHeaderR />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0">
      <Component03Cozy03Cell02RightHeader />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table header">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_0px_2px] border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <Component03Cozy03Cell01LeftHeader />
      <Component03Cozy03Cell01LeftHeader1 />
      <Component03Cozy03Cell01LeftHeader2 />
      <Component03Cozy03Cell01LeftHeader3 />
      <Component03Cozy03Cell01LeftHeader4 />
      <Component03Cozy03Cell01LeftHeader5 />
      <Component03Cozy03Cell01LeftHeader6 />
      <Component03Cozy03Cell01LeftHeader7 />
      <Frame />
    </div>
  );
}

function Component01Roomy03Cell01LeftBodyText() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="01 - Roomy/03 - Cell/01 - Left/Body/Text">
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap">rfj8r44i89</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <Component01Roomy03Cell01LeftBodyText />
    </div>
  );
}

function Vendor() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Vendor">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[16px] pr-0 py-[20px] relative size-full">
          <p className="basis-0 font-['AvenirNext_forINTUIT:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#393a3d] text-[14px]">Red Ocean Developers</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <Vendor />
    </div>
  );
}

function Component01Roomy03Cell01LeftBodyText1() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="01 - Roomy/03 - Cell/01 - Left/Body/Text">
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap">3 bills</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <Component01Roomy03Cell01LeftBodyText1 />
    </div>
  );
}

function Component01Roomy03Cell01LeftBodyText2() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="01 - Roomy/03 - Cell/01 - Left/Body/Text">
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap">01/08/2025</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <Component01Roomy03Cell01LeftBodyText2 />
    </div>
  );
}

function AmountWithLabels() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="Amount with labels">
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap">Chase checking (...1234)</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <AmountWithLabels />
    </div>
  );
}

function AmountWithLabels1() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="Amount with labels">
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap">Bank payment</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <AmountWithLabels1 />
    </div>
  );
}

function AmountWithLabels2() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="Amount with labels">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap">$15,000.00</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <AmountWithLabels2 />
    </div>
  );
}

function Status() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="Status">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap">Processing</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <Status />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Link">
      <p className="font-['AvenirNext_forINTUIT:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0077c5] text-[14px] text-nowrap">View details</p>
    </div>
  );
}

function TableActionLinkWithDropdown() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Table action link with dropdown">
      <Link />
    </div>
  );
}

function Component01Roomy03Cell02RightBodyLink() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="01 - Roomy/03 - Cell/02 - Right/Body/Link">
      <TableActionLinkWithDropdown />
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <Component01Roomy03Cell02RightBodyLink />
    </div>
  );
}

function TableRow() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table row">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame12 />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame11 />
      <Frame13 />
      <Frame4 />
      <Frame5 />
      <Frame7 />
    </div>
  );
}

function Component01Roomy03Cell01LeftBodyText3() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="01 - Roomy/03 - Cell/01 - Left/Body/Text">
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap">rfj8r44i89</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <Component01Roomy03Cell01LeftBodyText3 />
    </div>
  );
}

function Vendor1() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Vendor">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[16px] pr-0 py-[20px] relative size-full">
          <p className="basis-0 font-['AvenirNext_forINTUIT:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#393a3d] text-[14px]">AG gardens</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <Vendor1 />
    </div>
  );
}

function Component01Roomy03Cell01LeftBodyText4() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="01 - Roomy/03 - Cell/01 - Left/Body/Text">
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap">2 bills</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <Component01Roomy03Cell01LeftBodyText4 />
    </div>
  );
}

function Component01Roomy03Cell01LeftBodyText5() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="01 - Roomy/03 - Cell/01 - Left/Body/Text">
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap">01/08/2025</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <Component01Roomy03Cell01LeftBodyText5 />
    </div>
  );
}

function AmountWithLabels3() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="Amount with labels">
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap">Chase checking (...1234)</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <AmountWithLabels3 />
    </div>
  );
}

function AmountWithLabels4() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="Amount with labels">
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap">Bank payment</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <AmountWithLabels4 />
    </div>
  );
}

function AmountWithLabels5() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="Amount with labels">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap">$2,200.00</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <AmountWithLabels5 />
    </div>
  );
}

function Status1() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center not-italic overflow-clip px-[16px] py-[20px] relative shrink-0 text-nowrap" data-name="Status">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[20px] relative shrink-0 text-[#2ca01c] text-[14px]">Scheduled</p>
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b6c72] text-[12px]">In 5 days</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <Status1 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Link">
      <p className="font-['AvenirNext_forINTUIT:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0077c5] text-[14px] text-nowrap">View details</p>
    </div>
  );
}

function TableActionLinkWithDropdown1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Table action link with dropdown">
      <Link1 />
    </div>
  );
}

function Component01Roomy03Cell02RightBodyLink1() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="01 - Roomy/03 - Cell/02 - Right/Body/Link">
      <TableActionLinkWithDropdown1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <Component01Roomy03Cell02RightBodyLink1 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table row">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame14 />
      <Frame6 />
      <Frame8 />
      <Frame9 />
      <Frame15 />
      <Frame16 />
      <Frame10 />
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Component01Roomy03Cell01LeftBodyText6() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="01 - Roomy/03 - Cell/01 - Left/Body/Text">
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap">rfj8r44i89</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <Component01Roomy03Cell01LeftBodyText6 />
    </div>
  );
}

function Vendor2() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Vendor">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[16px] pr-0 py-[20px] relative size-full">
          <p className="basis-0 font-['AvenirNext_forINTUIT:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#393a3d] text-[14px]">Poe Paper</p>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <Vendor2 />
    </div>
  );
}

function Component01Roomy03Cell01LeftBodyText7() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="01 - Roomy/03 - Cell/01 - Left/Body/Text">
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap">2 bills</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <Component01Roomy03Cell01LeftBodyText7 />
    </div>
  );
}

function Component01Roomy03Cell01LeftBodyText8() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="01 - Roomy/03 - Cell/01 - Left/Body/Text">
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap">01/08/2025</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <Component01Roomy03Cell01LeftBodyText8 />
    </div>
  );
}

function AmountWithLabels6() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="Amount with labels">
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap">Chase checking (...1234)</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <AmountWithLabels6 />
    </div>
  );
}

function AmountWithLabels7() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="Amount with labels">
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap">Paper Check</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <AmountWithLabels7 />
    </div>
  );
}

function AmountWithLabels8() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="Amount with labels">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393a3d] text-[14px] text-nowrap">$1,000.00</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <AmountWithLabels8 />
    </div>
  );
}

function Status2() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center not-italic overflow-clip px-[16px] py-[20px] relative shrink-0 text-nowrap" data-name="Status">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[20px] relative shrink-0 text-[#2ca01c] text-[14px]">Scheduled</p>
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b6c72] text-[12px]">In 23 days</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_1px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <Status2 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Link">
      <p className="font-['AvenirNext_forINTUIT:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0077c5] text-[14px] text-nowrap">View details</p>
    </div>
  );
}

function TableActionLinkWithDropdown2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Table action link with dropdown">
      <Link2 />
    </div>
  );
}

function Component01Roomy03Cell02RightBodyLink2() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[20px] relative shrink-0" data-name="01 - Roomy/03 - Cell/02 - Right/Body/Link">
      <TableActionLinkWithDropdown2 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px px-0 py-[8px] relative shrink-0">
      <Component01Roomy03Cell02RightBodyLink2 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table row">
      <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableRow />
      <TableRow1 />
      <TableRow2 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1880px]">
      <Table />
    </div>
  );
}

export default function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative size-full">
      <TableActions />
      <Frame29 />
    </div>
  );
}