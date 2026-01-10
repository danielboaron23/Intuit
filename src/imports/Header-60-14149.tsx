export default function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative size-full text-[#393a3d] text-center" data-name="Header">
      <p className="font-['AvenirNext_forINTUIT:Bold',sans-serif] leading-[44px] min-w-full relative shrink-0 text-[34px] w-[min-content]">Payment processing</p>
      <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]">Your $15,000.00 payment to Red Ocean Developers is processing.</p>
    </div>
  );
}