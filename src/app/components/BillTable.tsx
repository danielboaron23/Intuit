import { useState } from "react";
import { Info, Calendar, Check, Plus, FileText, X, ChevronDown, HelpCircle } from "lucide-react";
import { Input } from "./ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip";
import { PaymentSpeedMenu } from "./PaymentSpeedMenu";
import TooltipQb from "../../imports/TooltipQb";
import { cn } from "./ui/utils";

// Types for our data structure
type BillRow = {
  type: 'parent' | 'child';
  vendor?: string;
  billNumber?: string;
  paymentMethod?: string;
  withdrawalDate?: string;
  paymentSpeed?: 'Standard' | 'Real-Time' | '8 - 10 business days' | 'Faster' | 'Instant';
  deliveryDate?: string;
  isDeliverySuccess?: boolean;
  dueDate?: string;
  processingFee?: string;
  openBalance?: string;
  amount?: string;
  isAmountEditable?: boolean;
  rowBg: string;
  hasNote?: boolean;
  showManage?: boolean;
  showRemove?: boolean;
  withdrawalInput?: boolean; // If true, show date picker input
  speedInput?: boolean; // If true, show dropdown
};

const initialRows: BillRow[] = [
  // --- GROUP 1: Red Ocean ---
  {
    type: 'parent',
    vendor: "Red Ocean",
    paymentMethod: "Bank payment ...1234",
    withdrawalDate: "01/08/2025",
    withdrawalInput: true,
    paymentSpeed: "Real-Time",
    speedInput: true,
    deliveryDate: "Today, 01/08/2025",
    isDeliverySuccess: true,
    dueDate: "01/13/2025",
    processingFee: "$4.99",
    openBalance: "$15,000.00",
    amount: "$15,000.00",
    rowBg: "bg-[#ECEEF1]",
    hasNote: true,
    showManage: true,
  },
  {
    type: 'child',
    billNumber: "1051",
    dueDate: "01/18/2025",
    processingFee: "--",
    openBalance: "$5,000.00",
    amount: "$5,000.00",
    isAmountEditable: true,
    rowBg: "bg-[#FFFFFF]",
    showRemove: true,
  },
  {
    type: 'child',
    billNumber: "1052",
    dueDate: "01/19/2025",
    processingFee: "--",
    openBalance: "$5,000.00",
    amount: "$5,000.00",
    isAmountEditable: true,
    rowBg: "bg-[#FFFFFF]",
    showRemove: true,
  },
  {
    type: 'child',
    billNumber: "1053",
    dueDate: "01/25/2025",
    processingFee: "--",
    openBalance: "$5,000.00",
    amount: "$5,000.00",
    isAmountEditable: true,
    rowBg: "bg-[#FFFFFF]",
    showRemove: true,
  },

  // --- GROUP 2: AG gardens ---
  {
    type: 'parent',
    vendor: "AG gardens",
    paymentMethod: "Bank payment ...6666",
    withdrawalDate: "01/08/2025",
    withdrawalInput: true,
    paymentSpeed: "Standard",
    speedInput: true,
    deliveryDate: "01/13/2025",
    processingFee: "$0.50",
    openBalance: "$2,200.00",
    amount: "$2,200.00",
    rowBg: "bg-[#F4F5F8]", 
    hasNote: true,
    showManage: true,
  },
  {
    type: 'child',
    billNumber: "235670",
    dueDate: "01/27/2025",
    processingFee: "--",
    openBalance: "$1,100.00",
    amount: "$1,100.00",
    isAmountEditable: true,
    rowBg: "bg-[#FFFFFF]",
    showRemove: true,
  },
  {
    type: 'child',
    billNumber: "235671",
    dueDate: "01/28/2025",
    processingFee: "--",
    openBalance: "$1,100.00",
    amount: "$1,100.00",
    isAmountEditable: true,
    rowBg: "bg-[#FFFFFF]",
    showRemove: true,
  },

  // --- GROUP 3: Poe Paper ---
  {
    type: 'parent',
    vendor: "Poe Paper",
    paymentMethod: "Paper check",
    withdrawalDate: "01/08/2025",
    withdrawalInput: true,
    paymentSpeed: "8 - 10 business days", 
    speedInput: false, 
    deliveryDate: "01/21/2025",
    processingFee: "$1.50",
    openBalance: "$1,000.00",
    amount: "$1,000.00",
    rowBg: "bg-[#F4F5F8]",
    hasNote: true,
    showManage: true,
  },
  {
    type: 'child',
    billNumber: "235672",
    dueDate: "01/27/2025",
    processingFee: "--",
    openBalance: "$500.00",
    amount: "$500.00",
    isAmountEditable: true,
    rowBg: "bg-[#FFFFFF]",
    showRemove: true,
  },
  {
    type: 'child',
    billNumber: "235673",
    dueDate: "01/28/2025",
    processingFee: "--",
    openBalance: "$500.00",
    amount: "$500.00",
    isAmountEditable: true,
    rowBg: "bg-[#FFFFFF]",
    showRemove: true,
  },
];

export function BillTable() {
  const [rows, setRows] = useState<BillRow[]>(initialRows);
  const [openRowIndex, setOpenRowIndex] = useState<number | null>(null);

  const handleSpeedChange = (index: number, newSpeed: 'Standard' | 'Real-Time' | 'Faster' | 'Instant') => {
    const newRows = [...rows];
    newRows[index] = { ...newRows[index], paymentSpeed: newSpeed };
    setRows(newRows);
  };

  return (
    <div className="w-full px-[20px] mb-[100px] border-b border-[#D4D7DC] overflow-x-auto">
      <div className="w-full min-w-[1400px]">
        {/* Header Row */}
        <div className="flex items-center h-[72px] bg-white border-b border-[#D4D7DC] px-[16px] sticky top-0 z-10">
          <div className="flex-1 min-w-[120px] text-[12px] font-semibold uppercase text-[#393A3D]">Vendor</div>
          <div className="w-[80px] shrink-0 text-[12px] font-semibold uppercase text-[#393A3D]">Bill #</div>
          <div className="flex-1 min-w-[160px] text-[12px] font-semibold uppercase text-[#393A3D]">Payment Method</div>
          <div className="w-[140px] shrink-0 text-[12px] font-semibold uppercase text-[#393A3D]">Withdrawal Date</div>
          <div className="w-[140px] shrink-0 text-[12px] font-semibold uppercase text-[#393A3D]">Payment Speed</div>
          <div className="w-[140px] shrink-0 flex items-center gap-1 text-[12px] font-semibold uppercase text-[#393A3D]">
            Est. Delivery Date <HelpCircle size={14} className="text-[#6B6C72]" />
          </div>
          <div className="w-[100px] shrink-0 text-[12px] font-semibold uppercase text-[#393A3D]">Due Date</div>
          <div className="w-[100px] shrink-0 text-right text-[12px] font-semibold uppercase text-[#393A3D]">Processing Fee</div>
          <div className="w-[120px] shrink-0 text-right text-[12px] font-semibold uppercase text-[#393A3D]">Open Balance</div>
          <div className="w-[130px] shrink-0 text-right text-[12px] font-semibold uppercase text-[#393A3D]">Amount</div>
          <div className="w-[40px] shrink-0 flex justify-center text-[#393A3D]"><FileText size={16} /></div>
          <div className="w-[100px] shrink-0 text-right text-[12px] font-semibold uppercase text-[#393A3D]">Action</div>
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <div 
            key={i} 
            className={cn(
              "flex items-center h-[60px] px-[16px] border-b border-[#D4D7DC]", 
              row.rowBg
            )}
          >
            {/* Vendor */}
            <div className="flex-1 min-w-[120px] text-[14px] text-[#393A3D] truncate pr-2">
              {row.vendor}
            </div>

            {/* Bill # */}
            <div className="w-[80px] shrink-0 text-[14px] text-[#393A3D] truncate pr-2">
              {row.billNumber}
            </div>

            {/* Payment Method */}
            <div className="flex-1 min-w-[160px] flex items-center gap-2 pr-4">
              <span className="text-[14px] text-[#393A3D] truncate">{row.paymentMethod}</span>
              {row.showManage && (
                <button className="text-[14px] font-semibold text-[#00892E] hover:underline whitespace-nowrap">Manage</button>
              )}
            </div>

            {/* Withdrawal Date */}
            <div className="w-[140px] shrink-0">
              {row.withdrawalInput && (
                <div className="relative w-[130px]">
                  <Input 
                    value={row.withdrawalDate || ""} 
                    className="h-[36px] pr-[30px] bg-white border-[#8D9096] rounded-[4px] text-[16px] font-medium truncate" 
                    readOnly
                  />
                  <Calendar className="absolute right-[8px] top-[6px] text-[#6B6C72] pointer-events-none" size={20} />
                </div>
              )}
            </div>

            {/* Payment Speed */}
            <div className="w-[140px] shrink-0">
              {row.speedInput ? (
                <Popover open={openRowIndex === i} onOpenChange={(open) => setOpenRowIndex(open ? i : null)}>
                  <PopoverTrigger asChild>
                    <button className="flex items-center justify-between px-2 w-[130px] h-[36px] bg-white border border-[#8D9096] rounded-[4px] text-[16px] font-medium text-[#393A3D] focus:outline-hidden focus:ring-2 focus:ring-[#00892E] focus:ring-offset-2 data-[state=open]:border-[#2CA01C]">
                      <span className="truncate mr-1">{row.paymentSpeed}</span>
                      <ChevronDown size={16} className="text-[#393A3D] opacity-50 shrink-0" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 border-none w-auto bg-transparent shadow-none" align="start">
                     <PaymentSpeedMenu 
                       onSelect={(val) => handleSpeedChange(i, val)} 
                       currentValue={row.paymentSpeed as any}
                       onClose={() => setOpenRowIndex(null)}
                     />
                  </PopoverContent>
                </Popover>
              ) : (
                 <span className="text-[14px] text-[#393A3D] block truncate w-[130px]">{row.paymentSpeed}</span>
              )}
            </div>

            {/* Est. Delivery Date */}
            <div className={cn("w-[140px] shrink-0 text-[14px] flex items-center gap-1", 
              row.isDeliverySuccess ? "text-[#108000]" : "text-[#393A3D]"
            )}>
               <span className="truncate">{row.deliveryDate}</span>
               {row.isDeliverySuccess && <Check size={16} className="shrink-0" />}
            </div>

            {/* Due Date */}
            <div className="w-[100px] shrink-0 text-[14px] text-[#393A3D]">
              {row.dueDate}
            </div>

            {/* Processing Fee */}
            <div className="w-[100px] shrink-0 flex items-center justify-end gap-1 text-[14px] text-[#393A3D]">
              {row.processingFee}
              {row.processingFee !== '--' && (
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Info size={14} className="text-[#6B6C72] cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent 
                    side="bottom" 
                    sideOffset={0}
                    className="p-0 bg-transparent border-none shadow-none [&>svg:last-child]:hidden"
                  >
                    <TooltipQb />
                  </TooltipContent>
                </Tooltip>
              )}
            </div>

            {/* Open Balance */}
            <div className="w-[120px] shrink-0 text-right text-[14px] text-[#393A3D]">
              {row.openBalance}
            </div>

            {/* Amount */}
            <div className="w-[130px] shrink-0 flex justify-end">
               {row.isAmountEditable ? (
                 <Input 
                   defaultValue={row.amount} 
                   className="w-[120px] h-[36px] text-right bg-white border-[#8D9096] rounded-[4px] text-[16px] font-medium"
                 />
               ) : (
                 <span className="text-[14px] text-[#393A3D]">{row.amount}</span>
               )}
            </div>

            {/* Note Icon */}
            <div className="w-[40px] shrink-0 flex justify-center">
               {row.hasNote && <Plus size={20} className="text-[#6B6C72]" />}
            </div>

            {/* Action */}
            <div className="w-[100px] shrink-0 flex items-center justify-end gap-2 pr-2">
              {row.showManage ? (
                <button className="flex items-center gap-2 text-[14px] font-semibold text-[#0365AC] hover:underline">
                   Add note <ChevronDown size={14} />
                </button>
              ) : row.showRemove ? (
                <button className="text-[#6B6C72] hover:text-[#393A3D]">
                  <X size={20} />
                </button>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
