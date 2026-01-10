import React from "react";
import svgPaths from "./svg-tacodim0nc";

interface PaymentStatusScreenProps {
  onClose: () => void;
}

export function PaymentStatusScreen({ onClose }: PaymentStatusScreenProps) {
  return (
    <div className="fixed inset-0 z-50 bg-[#F4F5F8] overflow-y-auto w-full h-full font-['Avenir_Next',_sans-serif]">
      {/* HEADER BAR */}
      <div className="fixed top-0 left-0 right-0 h-[56px] bg-[#F4F5F8] z-10 flex items-center justify-between px-[20px]">
        <div className="text-[24px] font-medium text-[#393A3D] leading-[32px]">
          View payment
        </div>
        <div className="flex items-center gap-0">
          <button className="flex items-center gap-[4px] p-[10px] rounded-[4px] hover:bg-black/5 transition-colors">
            <div className="size-[24px] relative">
              <svg className="block size-full" fill="none" viewBox="0 0 2 2" style={{ width: '2px', height: '2px', position: 'absolute', top: '11px', left: '11px' }}>
                 {/* The SVG paths from Figma import for help icon are complex composite. 
                     I will use a standard help icon logic or the SVG paths provided if they map correctly. 
                     The provided SVG paths seem to be fragments. I'll rely on the visual design description which says "Help icon (24x24px)". 
                     Since I have the paths, I will try to use them as provided in the Figma code.
                 */}
                 {/* Re-implementing the Help icon structure from Figma code */}
                 {/* It seems the Figma code uses multiple paths for the help icon. */}
              </svg>
              {/* Using a simpler implementation for the Help Icon matching the visual description since the paths are fragmented */}
              <div className="w-[24px] h-[24px] rounded-full border-[2px] border-[#6B6C72] flex items-center justify-center text-[#6B6C72] font-bold text-[14px]">?</div>
            </div>
            <span className="text-[16px] font-medium text-[#6B6C72] leading-[24px]">Help</span>
          </button>
          <button onClick={onClose} className="p-[10px] rounded-[4px] hover:bg-black/5 transition-colors">
            <div className="size-[24px] flex items-center justify-center text-[#6B6C72]">
              {/* Close X icon */}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d={svgPaths.p1a539100} fill="#6B6C72" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-[56px]" />

      {/* MAIN CONTENT CARD */}
      <div className="flex flex-col items-center pb-[100px] pt-[20px]">
        <div className="w-[772px] bg-white p-[60px] flex flex-col gap-[32px] shadow-sm">
          
          {/* PROGRESS STEPPER */}
          <div className="content-stretch flex flex-col items-start pb-[27px] pt-0 px-0 relative w-full" data-name="Progress Meter">
            {/* Frame 4 (Bars) */}
            <div className="h-[30px] mb-[-27px] relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[33px] py-[10px] relative size-full">
                  <div className="basis-0 bg-[#53b700] grow h-[12px] min-h-px min-w-px shrink-0" data-name="Rectangle" />
                  <div className="basis-0 bg-[#d4d7dc] grow h-[12px] min-h-px min-w-px shrink-0" data-name="Rectangle" />
                </div>
              </div>
            </div>

            {/* Frame 3 (Steps) */}
            <div className="content-stretch flex items-center justify-between mb-[-27px] relative shrink-0 w-full">
              {/* Scheduled */}
              <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[67px]">
                <div className="relative shrink-0 size-[24px]" data-name="Oval">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(16, 128, 0, 1)", "--stroke-0": "rgba(16, 128, 0, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" fill="var(--fill-0, #108000)" id="Oval" r="10" stroke="var(--stroke-0, #108000)" strokeWidth="4" />
                    </svg>
                  </div>
                </div>
                <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#393a3d] text-[12px] text-center w-[min-content]">Scheduled</p>
              </div>

              {/* Processing */}
              <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[67px]">
                <div className="relative shrink-0 size-[24px]" data-name="Oval">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(16, 128, 0, 1)", "--stroke-0": "rgba(16, 128, 0, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" fill="var(--fill-0, #108000)" id="Oval" r="10" stroke="var(--stroke-0, #108000)" strokeWidth="4" />
                    </svg>
                  </div>
                </div>
                <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#393a3d] text-[12px] text-center w-[min-content]">Processing</p>
              </div>

              {/* Delivered */}
              <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[67px]">
                <div className="relative shrink-0 size-[24px]" data-name="Oval">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(186, 190, 197, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" fill="var(--fill-0, white)" id="Oval" r="11.5" stroke="var(--stroke-0, #BABEC5)" />
                    </svg>
                  </div>
                </div>
                <p className="font-['AvenirNext_forINTUIT:Demi',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#393a3d] text-[12px] text-center w-[min-content]">Delivered</p>
              </div>
            </div>
          </div>

          {/* HEADER SECTION */}
          <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative size-full text-[#393a3d] text-center">
            <p className="font-['Avenir_Next',_sans-serif] font-bold leading-[44px] min-w-full relative shrink-0 text-[34px] w-[min-content]">Payment processing</p>
            <p className="font-['Avenir_Next',_sans-serif] font-semibold leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]">Your $15,000.00 payment to Red Ocean Developers is processing.</p>
          </div>

          {/* BILLS SECTION */}
          <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-0 px-0 relative w-full">
            <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
            
            {/* Accordion */}
            <div className="content-stretch flex items-start relative shrink-0">
               <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
                  <p className="font-['Avenir_Next',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#393a3d] text-[16px] text-center text-nowrap">3 bills</p>
                  <div className="bg-[rgba(107,108,114,0)] relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path d="M12.014 16.018C11.8825 16.018 11.7522 15.992 11.6307 15.9415C11.5092 15.8911 11.3989 15.8172 11.306 15.724L5.314 9.715C5.22109 9.62202 5.1474 9.51166 5.09714 9.3902C5.04689 9.26875 5.02104 9.13859 5.02109 9.00715C5.02114 8.87571 5.04707 8.74556 5.09742 8.62414C5.14776 8.50272 5.22152 8.39241 5.3145 8.2995C5.40748 8.20659 5.51784 8.1329 5.6393 8.08264C5.76075 8.03239 5.89091 8.00654 6.02235 8.00659C6.1538 8.00664 6.28394 8.03257 6.40536 8.08292C6.52678 8.13326 6.63709 8.20702 6.73 8.3L12.016 13.6L17.316 8.315C17.5038 8.12762 17.7583 8.02252 18.0236 8.0228C18.2888 8.02308 18.5431 8.12873 18.7305 8.3165C18.9179 8.50427 19.023 8.75879 19.0227 9.02406C19.0224 9.28933 18.9168 9.54362 18.729 9.731L12.72 15.726C12.5326 15.9129 12.2787 16.0179 12.014 16.018Z" fill="#6B6C72" />
                    </svg>
                  </div>
               </div>
            </div>

            {/* Bill 1 */}
            <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
               <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#393a3d]">
                  <p className="font-['Avenir_Next',_sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] w-[187px]">$5,000.00 | Bill no. 1051</p>
                  <p className="font-['Avenir_Next',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap">Bill due date: 01/18/2025</p>
               </div>
               <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                     <div className="content-stretch flex items-center justify-center relative shrink-0">
                        <button className="flex flex-col font-['Avenir_Next',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0365ac] text-[16px] text-nowrap hover:underline">
                           <p className="leading-[24px]">View bill</p>
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* Bill 2 */}
            <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
               <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#393a3d]">
                  <p className="font-['Avenir_Next',_sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] w-[187px]">$5,000.00 | Bill no. 1052</p>
                  <p className="font-['Avenir_Next',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap">Bill due date: 01/19/2025</p>
               </div>
               <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                     <div className="content-stretch flex items-center justify-center relative shrink-0">
                        <button className="flex flex-col font-['Avenir_Next',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0365ac] text-[16px] text-nowrap hover:underline">
                           <p className="leading-[24px]">View bill</p>
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* Bill 3 */}
            <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
               <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#393a3d]">
                  <p className="font-['Avenir_Next',_sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] w-[187px]">$5,000.00 | Bill no. 1053</p>
                  <p className="font-['Avenir_Next',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap">Bill due date: 01/25/2025</p>
               </div>
               <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                     <div className="content-stretch flex items-center justify-center relative shrink-0">
                        <button className="flex flex-col font-['Avenir_Next',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0365ac] text-[16px] text-nowrap hover:underline">
                           <p className="leading-[24px]">View bill</p>
                        </button>
                     </div>
                  </div>
               </div>
            </div>

          </div>

          {/* VENDOR SECTION */}
          <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-0 px-0 relative size-full">
            <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex gap-[24px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full">
               <p className="basis-0 font-['Avenir_Next',_sans-serif] font-semibold grow min-h-px min-w-px relative shrink-0 text-[#393a3d]">Vendor</p>
               <p className="basis-0 font-['Avenir_Next',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-black text-right">Red Ocean Developers</p>
            </div>
            <div className="content-stretch flex gap-[24px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full">
               <p className="basis-0 font-['Avenir_Next',_sans-serif] font-semibold grow min-h-px min-w-px relative shrink-0 text-[#393a3d]">Pay to vendor</p>
               <p className="basis-0 font-['Avenir_Next',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-black text-right">$15,000.00</p>
            </div>
            <div className="content-stretch flex gap-[24px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full">
               <p className="basis-0 font-['Avenir_Next',_sans-serif] font-semibold grow min-h-px min-w-px relative shrink-0 text-[#393a3d]">Processing fee</p>
               <p className="basis-0 font-['Avenir_Next',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-black text-right">$100.00</p>
            </div>
          </div>

          {/* PAY FROM SECTION */}
          <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-0 px-0 relative size-full">
            <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex gap-[24px] items-start not-italic relative shrink-0 text-[16px] w-full">
               <p className="basis-0 font-['Avenir_Next',_sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#393a3d]">Pay from</p>
               <div className="basis-0 font-['Avenir_Next',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-black text-right">
                  <p className="mb-0">Amy’s Bakery</p>
                  <p>Chase Checking (...5555)</p>
               </div>
            </div>
            <div className="content-stretch flex gap-[24px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full">
               <p className="basis-0 font-['Avenir_Next',_sans-serif] font-semibold grow min-h-px min-w-px relative shrink-0 text-[#393a3d]">Withdrawal date</p>
               <p className="basis-0 font-['Avenir_Next',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-black text-right">01/08/2025</p>
            </div>
          </div>

          {/* DELIVER TO SECTION */}
          <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-0 px-0 relative size-full">
            <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
            
            <div className="content-stretch flex gap-[24px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] w-full">
               <p className="basis-0 font-['Avenir_Next',_sans-serif] font-semibold grow min-h-px min-w-px relative shrink-0 text-[#393a3d]">Deliver to</p>
               <p className="basis-0 font-['Avenir_Next',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-black text-right">
                 Red Ocean Developers
                 <br aria-hidden="true" />
                 Citibank Checking (...6600)
               </p>
            </div>

            <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
               <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                  <p className="font-['Avenir_Next',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#393a3d] text-[16px] text-nowrap">Delivery date</p>
               </div>
               <p className="basis-0 font-['Avenir_Next',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black text-right">01/08/2025</p>
            </div>
          </div>

          {/* NOTE SECTION */}
          <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-0 px-0 relative size-full">
            <div aria-hidden="true" className="absolute border-[#d4d7dc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[24px] not-italic relative shrink-0 text-[#393a3d] text-[16px] w-full">
               <p className="font-['Avenir_Next',_sans-serif] font-semibold relative shrink-0 w-full">Note to vendor</p>
               <p className="font-['Avenir_Next',_sans-serif] font-normal relative shrink-0 w-full">This text is an example of a 140-character paragraph that serves as a reminder of the limit we have when we need to convey a short message.</p>
            </div>
          </div>

          {/* FOOTNOTE SECTION */}
          <div className="content-stretch flex flex-col gap-[16px] items-center relative size-full">
             <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[#6b6c72] w-full">
               <p className="font-['Avenir_Next',_sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] w-full">{`Need help with this payment? `}</p>
               <p className="font-['Avenir_Next',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[12px] w-full">
                 <span>{`Select Help to get a callback from an expert. We may ask you for the `}</span>
                 <span className="font-['Avenir_Next',_sans-serif] font-semibold">reference ID</span>: 43645h47674h46
               </p>
             </div>
             <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                   <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <div className="flex flex-col font-['Avenir_Next',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0077c5] text-[14px] text-nowrap">
                         <button className="leading-[1.5] hover:underline">Terms of Service</button>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* FOOTER BAR */}
      <div className="fixed bottom-0 left-0 right-0 h-[68px] bg-white border-t border-[#BABEC5] shadow-[0px_6px_24px_rgba(0,0,0,0.2)] flex items-center justify-end px-[20px] z-50">
        <button onClick={onClose} className="h-[36px] bg-[#2CA01C] text-white text-[16px] font-demi px-[16px] rounded-[4px] min-w-[100px] hover:bg-[#108000] transition-colors">
          Done
        </button>
      </div>
    </div>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M7 10l5 5 5-5" stroke="#6B6C72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
