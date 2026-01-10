import svgPaths from "./svg-amqpyn3mgl";

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

function Frame() {
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

function Frame2() {
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
      <Frame2 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Frame />
      <Subtotal1 />
      <Subtotal2 />
      <Subtotal3 />
      <Subtotal4 />
    </div>
  );
}