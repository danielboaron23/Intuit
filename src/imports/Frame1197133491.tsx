import React from 'react';
import svgPaths from "./svg-4ikj7qb3fn";

function Close() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p81ec040} fill="var(--fill-0, #6B6C72)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Control({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-[rgba(57,58,61,0)] content-stretch flex gap-[4px] items-start p-[6px] relative rounded-[4px] shrink-0 cursor-pointer" 
      data-name="Control"
      onClick={onClick}
    >
      <Close />
    </div>
  );
}

function ButtonIconControl({ onClose }: { onClose?: () => void }) {
  return (
    <div className="absolute content-stretch flex items-start right-[12px] top-[12px]" data-name="Button - Icon Control">
      <Control onClick={onClose} />
    </div>
  );
}

function Header({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-white h-[60px] overflow-clip relative shrink-0 w-full" data-name=".Header">
      <div className="absolute bg-white inset-0" data-name="Header" />
      <p className="absolute font-['AvenirNext_forINTUIT:Medium',sans-serif] leading-[24px] left-[calc(50%+1px)] not-italic text-[#393a3d] text-[16px] text-center text-nowrap top-[calc(50%-12px)] translate-x-[-50%]">Bill payments</p>
      <ButtonIconControl onClose={onClose} />
    </div>
  );
}

function IconInfo() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name=".Icon/Info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id=".Icon/Info">
          <circle cx="10.005" cy="10.0049" fill="var(--fill-0, #0077C5)" id="bg" r="8.335" />
          <g id="icon">
            <path d={svgPaths.p3de4caf0} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p3c2fe300} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pf0a3100} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Informational() {
  return (
    <div className="absolute left-0 overflow-clip size-[20px] top-0" data-name="Informational">
      <IconInfo />
    </div>
  );
}

function BadgeIconStatus() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Badge - Icon Status">
      <Informational />
    </div>
  );
}

function TitleBody() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Title + Body">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393a3d] text-[0px] text-[14px] w-full">
        <span>
          {`Instant payments can't be canceled`}
          <br aria-hidden="true" />
        </span>
        <span className="font-['AvenirNext_forINTUIT:Regular',sans-serif]">Once scheduled, they’re processed immediately.</span>
      </p>
    </div>
  );
}

function IconMessage() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px px-0 py-[2px] relative shrink-0" data-name="Icon + Message">
      <BadgeIconStatus />
      <TitleBody />
    </div>
  );
}

function Close1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p15c4a800} fill="var(--fill-0, #6B6C72)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Control1() {
  return (
    <div className="bg-[rgba(0,137,46,0)] content-stretch flex gap-[4px] items-start p-[2px] relative rounded-[4px] shrink-0" data-name="Control">
      <Close1 />
    </div>
  );
}

function ButtonIconControl1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button - Icon Control">
      <Control1 />
    </div>
  );
}

function PageMessage() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name=".Page message">
      <div aria-hidden="true" className="absolute border border-[#0097e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
          <IconMessage />
          <ButtonIconControl1 />
        </div>
      </div>
    </div>
  );
}

function PageMessage1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[479px]" data-name="Page Message">
      <PageMessage />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[20.91%_23.13%_17.21%_23.13%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.9963 49.5052">
        <g id="Group">
          <path d={svgPaths.p2241f172} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p15236b00} fill="var(--fill-0, #008481)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[17.5%_37.17%_69.42%_35.61%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.7733 10.4633">
        <g id="Group">
          <path d={svgPaths.pd2a7580} fill="var(--fill-0, #008481)" id="Vector" />
          <path d={svgPaths.p26046100} fill="var(--fill-0, #008481)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[41.27%_27.78%_21.85%_27.95%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.4177 29.5026">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p1915b000} fill="var(--fill-0, #00C1BF)" fillRule="evenodd" id="Vector (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.pe0d6d00} fill="var(--fill-0, #00C1BF)" fillRule="evenodd" id="Vector (Stroke)_2" />
          <path clipRule="evenodd" d={svgPaths.p34d51d80} fill="var(--fill-0, #00C1BF)" fillRule="evenodd" id="Vector (Stroke)_3" />
          <path clipRule="evenodd" d={svgPaths.p35f69800} fill="var(--fill-0, #00C1BF)" fillRule="evenodd" id="Vector (Stroke)_4" />
          <path clipRule="evenodd" d={svgPaths.p287a2c80} fill="var(--fill-0, #00C1BF)" fillRule="evenodd" id="Vector (Stroke)_5" />
          <path d={svgPaths.p128f7100} fill="var(--fill-0, #2DA048)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[17.5%_23.13%_17.21%_23.13%]" data-name="Group">
      <Group />
      <Group1 />
      <div className="absolute inset-[33.69%_27.78%_21.9%_27.82%] mix-blend-multiply" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.5235 35.5235">
          <g id="Vector" opacity="0.15" style={{ mixBlendMode: "multiply" }}>
            <path d={svgPaths.p2c0cab00} fill="var(--fill-0, #00C1BF)" />
          </g>
        </svg>
      </div>
      <Group2 />
    </div>
  );
}

function Art() {
  return (
    <div className="absolute contents inset-[17.5%_23.13%_17.21%_23.13%]" data-name="art">
      <Group3 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[17.5%_23.13%_17.21%_23.13%]" data-name="Group">
      <Art />
    </div>
  );
}

function Scheduled() {
  return (
    <div className="bg-white overflow-clip relative shrink-0 size-[80px]" data-name="Scheduled">
      <Group4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[10px] pt-0 px-0 relative shrink-0 w-full">
      <Scheduled />
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] h-[28.888px] leading-[28.888px] not-italic relative shrink-0 text-[#393a3d] text-[22px] text-center w-full">Review and schedule</p>
    </div>
  );
}

function Bank() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Bank">
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#393a3d] text-[16px] text-nowrap">
        <p className="leading-[24px]">Chase checking (...6714)</p>
      </div>
    </div>
  );
}

function AcountDetails() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Acount details">
      <Bank />
    </div>
  );
}

function BankAccount() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[5px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Bank account">
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] h-[20px] leading-[20px] not-italic relative shrink-0 text-[#393a3d] text-[15px] w-full">Pay from</p>
      <AcountDetails />
    </div>
  );
}

function BankAcctAndCoa() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Bank acct and COA">
      <BankAccount />
    </div>
  );
}

function InputField() {
  return (
    <div className="absolute content-stretch flex gap-[4.815px] items-center right-[-1.53px] top-1/2 translate-y-[-50%]" data-name="Input Field">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[28.888px] not-italic relative shrink-0 text-[#393a3d] text-[16.851px] text-nowrap text-right">7</p>
    </div>
  );
}

function Subtotal() {
  return (
    <div className="h-[28.888px] relative shrink-0 w-full" data-name="Subtotal">
      <p className="absolute bottom-[13.07%] font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[19.258px] left-0 not-italic text-[#393a3d] text-[16px] top-[17.7%] w-[280px]" dir="auto">
        Number of bills
      </p>
      <InputField />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Subtotal />
    </div>
  );
}

function InputField1() {
  return (
    <div className="absolute content-stretch flex gap-[4.815px] items-center right-[-1.53px] top-1/2 translate-y-[-50%]" data-name="Input Field">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] h-[27.684px] leading-[28.888px] not-italic relative shrink-0 text-[#393a3d] text-[16.851px] text-right w-[90.274px]">3</p>
    </div>
  );
}

function Subtotal1() {
  return (
    <div className="h-[28.888px] relative shrink-0 w-full" data-name="Subtotal">
      <p className="absolute bottom-[14.1%] font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[19.258px] left-0 not-italic text-[#393a3d] text-[16px] top-[16.67%] w-[238.322px]">{`Scheduled payments `}</p>
      <InputField1 />
    </div>
  );
}

function InputField2() {
  return (
    <div className="absolute content-stretch flex gap-[4.815px] items-center right-[-1.53px] top-1/2 translate-y-[-50%]" data-name="Input Field">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] h-[27.684px] leading-[28.888px] not-italic relative shrink-0 text-[#393a3d] text-[16.851px] text-right w-[90.274px]">$1.50</p>
    </div>
  );
}

function Subtotal2() {
  return (
    <div className="h-[28.888px] relative shrink-0 w-full" data-name="Subtotal">
      <p className="absolute bottom-[15.36%] font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[19.258px] left-0 not-italic text-[#393a3d] text-[16px] top-[15.4%] w-[269px]">Processing fee for paper checks</p>
      <InputField2 />
    </div>
  );
}

function Underline() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Underline">
      <div className="absolute bottom-full left-0 right-0 top-0" data-name="Underline">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(57, 58, 61, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 1">
            <line id="Underline" stroke="var(--stroke-0, #393A3D)" strokeDasharray="1 1" x2="100" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component16Px01Default() {
  return (
    <div className="content-stretch flex flex-col items-start p-[2px] relative shrink-0" data-name=".16px/01 - Default">
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#393a3d] text-[16px] text-nowrap">
        <p className="leading-[24px]">(if applicable)</p>
      </div>
      <Underline />
    </div>
  );
}

function Component16Px() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="16px">
      <Component16Px01Default />
    </div>
  );
}

function InputField3() {
  return (
    <div className="basis-0 content-stretch flex gap-[4.815px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Input Field">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] h-[27.684px] leading-[28.888px] not-italic relative shrink-0 text-[#393a3d] text-[16.851px] text-right w-[90.274px]">$0.50</p>
    </div>
  );
}

function Subtotal3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-0 py-px relative shrink-0 w-full" data-name="Subtotal">
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[19.258px] not-italic relative shrink-0 text-[#393a3d] text-[16px] text-nowrap">Processing fee for ACH payments</p>
      <Component16Px />
      <InputField3 />
    </div>
  );
}

function InputField4() {
  return (
    <div className="absolute content-stretch flex gap-[4.815px] items-center right-[-1.53px] top-1/2 translate-y-[-50%]" data-name="Input Field">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] h-[27.684px] leading-[28.888px] not-italic relative shrink-0 text-[#393a3d] text-[16.851px] text-right w-[90.274px]">$100.00</p>
    </div>
  );
}

function CircleQuestion() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="circle-question">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="circle-question">
          <g id="Vector">
            <path d={svgPaths.p17de5a00} fill="var(--fill-0, #6B6C72)" />
            <path d={svgPaths.p17463d00} fill="var(--fill-0, #6B6C72)" />
            <path d={svgPaths.p1123b300} fill="var(--fill-0, #6B6C72)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 top-[2.56px]">
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[19.258px] not-italic relative shrink-0 text-[#393a3d] text-[16px] text-nowrap" dir="auto">
        Processing fee for instant payments
      </p>
      <CircleQuestion />
    </div>
  );
}

function Subtotal4() {
  return (
    <div className="h-[28.888px] relative shrink-0 w-full" data-name="Subtotal">
      <InputField4 />
      <Frame8 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame3 />
      <Subtotal1 />
      <Subtotal2 />
      <Subtotal3 />
      <Subtotal4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
      <BankAcctAndCoa />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 479 1">
            <line id="Line 315" stroke="var(--stroke-0, black)" strokeOpacity="0.3" x2="479" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-end not-italic relative shrink-0 text-[#393a3d] text-nowrap">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[28px] relative shrink-0 text-[20px] text-right">$18,200.00</p>
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[16px]">
        <p className="leading-[24px] text-nowrap">Total processing fees: $102.00</p>
      </div>
    </div>
  );
}

function TotalAmountsV() {
  return (
    <div className="content-stretch flex items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Total amounts V1">
      <p className="basis-0 font-['AvenirNext_forINTUIT:Demi',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#393a3d] text-[20px]">Total payment amount</p>
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic overflow-clip relative shrink-0 text-[#393a3d] w-full">
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[20px] relative shrink-0 text-[14px] w-full">Payment Authorization</p>
      <p className="font-['AvenirNext_forINTUIT:Regular',sans-serif] leading-[24px] relative shrink-0 text-[0px] text-[16px] w-full">
        <span>{`By selecting `}</span>
        <span className="font-['AvenirNext_forINTUIT:Demi',sans-serif]">Schedule payments</span>, I authorize Intuit to withdraw funds from my account and deliver this payment to the vendor specified. I verify that the amount of funds to be paid is correct. I understand the vendor may change the delivery method for this payment but my withdrawal date will not change.
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame6 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 479 1">
            <line id="Line 315" stroke="var(--stroke-0, black)" strokeOpacity="0.3" x2="479" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <TotalAmountsV />
      <Frame2 />
    </div>
  );
}

function Frame10({ onClose }: { onClose?: () => void }) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center px-[20px] py-0 relative size-full">
          <Header onClose={onClose} />
          <PageMessage1 />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-0 relative rounded-[4px] shrink-0" data-name="Label">
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Demi',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">Schedule payments</p>
      </div>
    </div>
  );
}

function ButtonFill() {
  return (
    <div className="bg-[#00892e] content-stretch flex flex-col items-center relative rounded-[4px] shrink-0 w-full" data-name="Button Fill">
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
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity" data-name="Button shape">
      <Focus />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button">
      <ButtonShape />
    </div>
  );
}

function PrimaryAndSecondary() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center right-[20px] top-[16px]" data-name="Primary and secondary">
      <Button />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-[519px]" data-name=".Footer">
      <PrimaryAndSecondary />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_#d4d7dc]" />
    </div>
  );
}

function Frame({ children }: { children?: React.ReactNode }) {
  return (
    <div className="content-stretch flex flex-col h-[68px] items-center justify-end relative shrink-0 w-full mt-auto">
      <div className="bg-gradient-to-b from-[rgba(255,255,255,0)] h-[56px] shrink-0 to-[#ffffff] w-[519px]" />
      <Footer />
    </div>
  );
}

export default function Frame9({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shadow-[0px_6px_24px_0px_rgba(0,0,0,0.2)] size-full h-full overflow-y-auto">
      <Frame10 onClose={onClose} />
      <Frame />
    </div>
  );
}
