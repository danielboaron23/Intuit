import React, { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { PaymentStatusScreen } from "./PaymentStatusScreen";

interface BillPayPaymentsScreenProps {
  onClose: () => void;
}

const tableData = [
  {
    id: "rfj8r44i89",
    vendor: "Red Ocean Developers",
    billNo: "3 bills",
    withdrawalDate: "01/08/2025",
    paidFrom: "Chase checking (...1234)",
    method: "Bank payment",
    amount: "15,000.00",
    status: "Processing",
    statusColor: "text-[#393A3D]",
    subStatus: "",
  },
  {
    id: "rfj8r44i89",
    vendor: "AG gardens",
    billNo: "2 bills",
    withdrawalDate: "01/08/2025",
    paidFrom: "Chase checking (...1234)",
    method: "Bank payment",
    amount: "2,200.00",
    status: "Scheduled",
    statusColor: "text-[#2CA01C]",
    subStatus: "In 5 days",
  },
  {
    id: "rfj8r44i89",
    vendor: "Poe Paper",
    billNo: "2 bills",
    withdrawalDate: "01/08/2025",
    paidFrom: "Chase checking (...1234)",
    method: "Paper Check",
    amount: "1,000.00",
    status: "Scheduled",
    statusColor: "text-[#2CA01C]",
    subStatus: "In 23 days",
  },
];

export function BillPayPaymentsScreen({ onClose }: BillPayPaymentsScreenProps) {
  const [showDetails, setShowDetails] = useState(false);

  if (showDetails) {
    return <PaymentStatusScreen onClose={() => setShowDetails(false)} />;
  }

  return (
    <div className="w-full min-h-screen bg-white font-['Avenir_Next',_sans-serif] flex flex-col">
      {/* Header Bar */}
      <div className="h-[56px] w-full bg-[#ECEEF1] px-[20px] flex items-center justify-between shrink-0">
        <h1 className="text-[24px] font-medium text-[#393A3D] leading-[32px]">Bill Pay payments</h1>
        <button 
          onClick={onClose} 
          className="p-[10px] mr-[6px] text-[#6B6C72] hover:text-[#393A3D] transition-colors rounded-full hover:bg-black/5"
          aria-label="Close"
        >
          <X size={24} />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-[1920px] mx-auto px-[20px] pt-[20px] overflow-hidden flex flex-col">
        
        {/* Filters Button */}
        <div className="mb-[20px] shrink-0">
          <button className="flex items-center gap-[8px] h-[40px] pl-[16px] pr-[8px] py-[6px] border-[2px] border-[#6B6C72] rounded-[4px] bg-transparent hover:bg-gray-50 transition-colors">
            <span className="text-[16px] font-semibold text-[#393A3D] font-['Avenir_Next']">Filters</span>
            <ChevronDown size={24} className="text-[#393A3D]" />
          </button>
        </div>

        {/* Table Container - Responsive Wrapper */}
        <div className="w-full overflow-x-auto pb-8">
          <div className="min-w-[1400px] w-full">
            
            {/* Table Header */}
            <div className="flex items-stretch h-[36px] border-b-[2px] border-[#D4D7DC] bg-white">
              {[
                { label: "ID", align: "left" },
                { label: "VENDOR", align: "left" },
                { label: "BILL NO.", align: "left" },
                { label: "WITHDRAWAL DATE", align: "left" },
                { label: "PAID FROM", align: "left" },
                { label: "PAYMENT METHOD", align: "left" },
                { label: "PAYMENT AMOUNT", align: "right" },
                { label: "STATUS", align: "left" },
                { label: "ACTION", align: "right" }
              ].map((col, index, arr) => (
                <div 
                  key={col.label} 
                  className={`flex-1 flex items-center px-[16px] py-[8px]
                    ${col.align === "right" ? "justify-end" : "justify-start"}
                    ${index !== arr.length - 1 ? "border-r border-[#D4D7DC]" : ""}
                  `}
                >
                  <span className="text-[14px] font-semibold text-[#393A3D] uppercase leading-[20px]">
                    {col.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Table Rows */}
            {tableData.map((row, rowIndex) => (
              <div 
                key={rowIndex} 
                className="flex items-stretch h-[72px] border-b border-[#D4D7DC] bg-white hover:bg-[#F4F5F8] transition-colors"
              >
                {/* ID */}
                <div className="flex-1 flex items-center px-[16px] py-[8px] border-r border-dashed border-[#D4D7DC]">
                  <span className="text-[14px] text-[#393A3D]">{row.id}</span>
                </div>

                {/* Vendor */}
                <div className="flex-1 flex items-center px-[16px] py-[8px] border-r border-dashed border-[#D4D7DC]">
                  <span className="text-[14px] text-[#393A3D]">{row.vendor}</span>
                </div>

                {/* Bill No */}
                <div className="flex-1 flex items-center px-[16px] py-[8px] border-r border-dashed border-[#D4D7DC]">
                  <span className="text-[14px] text-[#393A3D]">{row.billNo}</span>
                </div>

                {/* Withdrawal Date */}
                <div className="flex-1 flex items-center px-[16px] py-[8px] border-r border-dashed border-[#D4D7DC]">
                  <span className="text-[14px] text-[#393A3D]">{row.withdrawalDate}</span>
                </div>

                {/* Paid From */}
                <div className="flex-1 flex items-center px-[16px] py-[8px] border-r border-dashed border-[#D4D7DC]">
                  <span className="text-[14px] text-[#393A3D]">{row.paidFrom}</span>
                </div>

                {/* Payment Method */}
                <div className="flex-1 flex items-center px-[16px] py-[8px] border-r border-dashed border-[#D4D7DC]">
                  <span className="text-[14px] text-[#393A3D]">{row.method}</span>
                </div>

                {/* Amount */}
                <div className="flex-1 flex items-center justify-end px-[16px] py-[8px] border-r border-dashed border-[#D4D7DC]">
                  <span className="text-[14px] font-semibold text-[#393A3D]">${row.amount}</span>
                </div>

                {/* Status */}
                <div className="flex-1 flex flex-col justify-center px-[16px] py-[8px] border-r border-dashed border-[#D4D7DC]">
                  <span className={`text-[14px] font-semibold ${row.statusColor}`}>
                    {row.status}
                  </span>
                  {row.subStatus && (
                    <span className="text-[12px] text-[#6B6C72] leading-[16px]">
                      {row.subStatus}
                    </span>
                  )}
                </div>

                {/* Action */}
                <div className="flex-1 flex items-center justify-end px-[16px] py-[8px]">
                  <button 
                    onClick={() => setShowDetails(true)}
                    className="text-[14px] font-medium text-[#0077C5] hover:underline"
                  >
                    View details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
