import svgPaths from "./svg-swul2wa5sn";

function Label() {
  return (
    <div className="content-stretch flex h-[24px] items-center px-[16px] py-0 relative rounded-[4px] shrink-0" data-name="Label">
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Demi',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00892e] text-[16px] text-center text-nowrap">
        <p className="leading-[24px]">Select account</p>
      </div>
    </div>
  );
}

function ButtonFill() {
  return (
    <div className="bg-[rgba(0,137,46,0)] content-stretch flex flex-col items-center relative rounded-[4px] shrink-0" data-name="Button Fill">
      <div className="h-[6px] shrink-0 w-[100px]" data-name="Min-Width Shim" />
      <Label />
      <div className="h-[6px] shrink-0 w-[100px]" data-name="Min-Width Shim" />
    </div>
  );
}

function Focus() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-name="Focus">
      <ButtonFill />
    </div>
  );
}

function ButtonShape() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-center overflow-clip relative shrink-0" data-name="Button shape">
      <Focus />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-end left-[240px] top-[40px]" data-name="Button">
      <ButtonShape />
    </div>
  );
}

function PiecesBankAccount() {
  return (
    <div className="absolute border-[#babec5] border-[0px_1px_0px_0px] border-solid h-[94px] left-0 top-[-7px] w-[420px]" data-name="Pieces / Bank Account">
      <div className="absolute flex flex-col font-['AvenirNext_forINTUIT:Medium',sans-serif] justify-center leading-[0] left-0 not-italic text-[#6b6c72] text-[14px] text-nowrap top-[26px] translate-y-[-50%]">
        <p className="leading-[20px]">Bank account</p>
      </div>
      <p className="absolute font-['AvenirNext_forINTUIT:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#393a3d] text-[16px] text-nowrap top-[46px]">BANK OF AMERICA, ... (...6714)</p>
      <Button />
    </div>
  );
}

function Thumb() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name=".Thumb">
      <div className="absolute bg-white left-0 rounded-[18px] shadow-[0px_5px_10px_0px_rgba(0,0,0,0.1),0px_2px_2px_0px_rgba(0,0,0,0.3)] size-[18px] top-0" data-name="Thumb" />
    </div>
  );
}

function Base() {
  return (
    <div className="bg-[#2ca01c] content-stretch flex flex-col items-end p-px relative rounded-[20px] shrink-0 w-[36px]" data-name="Base">
      <Thumb />
    </div>
  );
}

function Switch01On01On() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Switch/01 - On/01 - On">
      <Base />
    </div>
  );
}

function Switch() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Switch">
      <Switch01On01On />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center relative shrink-0 w-full" data-name="row">
      <p className="basis-0 font-['AvenirNext_forINTUIT:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#393a3d] text-[16px]">Make one payment per vendor</p>
      <Switch />
    </div>
  );
}

function PiecesBulkVendors() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[94px] items-start left-[460px] pb-0 pl-0 pr-[40px] pt-[16px] top-[-7px] w-[312px]" data-name="Pieces / Bulk Vendors">
      <div aria-hidden="true" className="absolute border-[#babec5] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#6b6c72] text-[14px] text-nowrap w-full">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden">Combine multiple bills</p>
      </div>
      <Row />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Avenir_Next_forINTUIT:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6c72] text-[14px] text-nowrap">
        <p className="leading-[20px]">Withdrawal date</p>
      </div>
    </div>
  );
}

function FieldLabel() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-h-[20px] relative shrink-0 w-full z-[5]" data-name="Field label">
      <Label1 />
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="basis-0 font-['Avenir_Next_forINTUIT:Medium',sans-serif] grow h-[21px] leading-[1.3] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#393a3d] text-[16px] text-nowrap">Earliest</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path d={svgPaths.p16e9b500} fill="var(--fill-0, #6B6C72)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DefaultIconSizerDoNotUse() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name=".Default Icon Sizer (Do not use)">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <DefaultIconSizerDoNotUse />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white min-h-[36px] relative rounded-[4px] shrink-0 w-full z-[4]" data-name="Input">
      <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[8px] py-[6px] relative w-full">
          <Text />
          <Icon1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8d9096] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Input1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Input">
      <FieldLabel />
      <Input />
    </div>
  );
}

function DropdownSelect() {
  return (
    <div className="absolute content-start flex flex-wrap items-start left-0 top-0 w-[148px]" data-name="Dropdown (Select)">
      <Input1 />
    </div>
  );
}

function GlobalWithdrawalDate() {
  return (
    <div className="h-[60px] overflow-clip relative shrink-0 w-[148px]" data-name="Global withdrawal date">
      <DropdownSelect />
    </div>
  );
}

function PiecesBatchWithdrawalDate() {
  return (
    <div className="absolute content-stretch flex h-[94px] items-start left-[811px] pb-0 pt-[16px] px-0 top-[-7px] w-[804px]" data-name="Pieces / Batch Withdrawal Date">
      <GlobalWithdrawalDate />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 grow h-[80px] min-h-px min-w-px relative shrink-0">
      <PiecesBankAccount />
      <PiecesBulkVendors />
      <PiecesBatchWithdrawalDate />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-end leading-[0] not-italic relative shrink-0 text-[#393a3d] text-right">
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Bold',sans-serif] justify-center relative shrink-0 text-[24px] w-[202px]">
        <p className="leading-[32px]">$18,200.00</p>
      </div>
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Regular',sans-serif] h-[28px] justify-center relative shrink-0 text-[16px] w-[213px]">
        <p className="leading-[24px]">Total processing fees: $2.50</p>
      </div>
    </div>
  );
}

function PiecesTotalAmount() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-full items-end relative shrink-0" data-name="Pieces / Total Amount">
      <p className="font-['AvenirNext_forINTUIT:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#393a3d] text-[16px] text-nowrap text-right">Total amount</p>
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <Frame1 />
      <div className="flex flex-row items-center self-stretch">
        <PiecesTotalAmount />
      </div>
    </div>
  );
}

export default function StageMaster() {
  return (
    <div className="bg-[#f4f5f8] relative size-full" data-name="Stage Master">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[36px] py-[16px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}