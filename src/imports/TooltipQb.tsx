import React from "react";

function BeakContainerTop() {
  return (
    <div className="h-[8px] relative shrink-0 w-[64px]" data-name="beak container - top">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 8">
        <g id="beak container - top">
          <path d="M24 8L40 8L32 0L24 8Z" fill="var(--fill-0, #393A3D)" id="beak - top" />
        </g>
      </svg>
    </div>
  );
}

function BeakTop() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="beak - top">
      <BeakContainerTop />
    </div>
  );
}

function BeakContainerLeft() {
  return (
    <div className="h-[48px] relative w-[8px]" data-name="beak container - left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 48">
        <g id="beak container - left"></g>
      </svg>
    </div>
  );
}

function BeakLeft() {
  return (
    <div className="content-stretch flex items-center relative" data-name="beak - left">
      <div className="flex h-[8px] items-center justify-center relative shrink-0 w-[48px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <BeakContainerLeft />
        </div>
      </div>
    </div>
  );
}

function Block1() {
  return (
    <div className="opacity-0 relative shrink-0 size-[8px]" data-name="Block/08">
      <div className="absolute bg-[#ff59cc] inset-0" data-name="Spacer - 08" />
    </div>
  );
}

function Block() {
  return <div className="shrink-0 size-[8px]" data-name="Block/08" />;
}

function TooltipContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="tooltip content">
      <Block />
      <div className="flex flex-col font-['AvenirNext_forINTUIT:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="mb-0">{`The fee is 1% of the payment amount, `}</p>
        <p className="mb-0">{`with a minimum of $10 and a maximum `}</p>
        <p>of $100 per payment.</p>
      </div>
      <Block />
    </div>
  );
}

function Bubble() {
  return (
    <div className="bg-[#393a3d] content-stretch flex items-start p-[8px] relative rounded-[4px] shrink-0" data-name="bubble">
      <Block1 />
      <TooltipContent />
      <Block1 />
    </div>
  );
}

function BeakContainerRight() {
  return (
    <div className="h-[48px] relative shrink-0 w-[8px]" data-name="beak container - right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 48">
        <g id="beak container - right"></g>
      </svg>
    </div>
  );
}

function BeakRight() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="beak - right">
      <BeakContainerRight />
    </div>
  );
}

function BeakBubbleBeak() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="beak + bubble + beak">
      <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[8px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <BeakLeft />
        </div>
      </div>
      <Bubble />
      <BeakRight />
    </div>
  );
}

function BeakContainer() {
  return (
    <div className="h-[8px] relative shrink-0 w-[64px]" data-name="beak - container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 8">
        <g id="beak - container"></g>
      </svg>
    </div>
  );
}

function BeakBottom() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="beak - bottom">
      <BeakContainer />
    </div>
  );
}

function TooltipTooltipMasterAutoLayout() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name=".Tooltip/Tooltip - Master (Auto Layout)">
      <BeakTop />
      <BeakBubbleBeak />
      <BeakBottom />
    </div>
  );
}

export default function TooltipQb() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Tooltip (QB)">
      <TooltipTooltipMasterAutoLayout />
    </div>
  );
}
