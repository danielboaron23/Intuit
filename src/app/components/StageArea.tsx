import { ChevronDown } from "lucide-react";
import { Switch } from "./ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function StageArea() {
  return (
    <div className="bg-[#F4F5F8] px-[20px] md:px-[36px] py-[16px] flex flex-wrap items-center shrink-0 gap-[20px] md:gap-[40px] w-full">
      {/* Section 1: Bank Account */}
      <div className="w-full md:w-auto md:min-w-[300px] lg:w-[420px] flex flex-col relative shrink-0 md:border-r border-[#BABEC5] pb-2 md:pb-0 border-b md:border-b-0">
        <span className="font-medium text-[14px] text-[#6B6C72] leading-[20px]">
          Bank account
        </span>
        <div className="flex items-center justify-between mt-[6px] pr-[1px]">
          <span className="font-medium text-[16px] text-[#393A3D] leading-[24px] truncate">
            BANK OF AMERICA, ... (...6714)
          </span>
          <button className="text-[16px] text-[#00892E] font-semibold leading-[24px] hover:text-[#006d25] transition-colors mt-[0px] mr-[13px] mb-[0px] ml-[5px] whitespace-nowrap">
            Select account
          </button>
        </div>
      </div>

      {/* Section 2: Combine Multiple Bills */}
      <div className="w-full md:w-auto md:min-w-[250px] lg:w-[312px] flex flex-col relative shrink-0 md:border-r border-[#BABEC5] md:pr-[40px] pb-2 md:pb-0 border-b md:border-b-0">
        <span className="font-medium text-[14px] text-[#6B6C72] leading-[20px]">
          Combine multiple bills
        </span>
        <div className="flex items-center gap-[8px] mt-[6px]">
          <span className="font-medium text-[16px] text-[#393A3D] leading-[24px] flex-1">
            Make one payment per vendor
          </span>
          <Switch 
            defaultChecked 
            className="data-[state=checked]:bg-[#2CA01C]" 
          />
        </div>
      </div>

      {/* Section 3: Withdrawal Date */}
      <div className="w-full md:w-auto flex flex-col shrink-0 pb-2 md:pb-0">
        <span className="font-medium text-[14px] text-[#6B6C72] leading-[20px] mb-[4px]">
          Withdrawal date
        </span>
        <Select defaultValue="earliest">
          <SelectTrigger className="h-[36px] w-full md:w-[148px] bg-white border-[#8D9096] rounded-[4px] text-[#393A3D] text-[16px] font-medium px-[8px]">
            <SelectValue placeholder="Select date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="earliest">Earliest</SelectItem>
            <SelectItem value="custom">Custom</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Section 4: Total Amount - Pushed to right */}
      <div className="w-full md:flex-1 flex flex-col items-start md:items-end mt-2 md:mt-0">
        <span className="font-medium text-[16px] text-[#393A3D] leading-[24px]">
          Total amount
        </span>
        <span className="font-bold text-[24px] text-[#393A3D] leading-[32px]">
          $18,200.00
        </span>
        <span className="font-regular text-[16px] text-[#393A3D] leading-[24px]">
          Total processing fees: $2.50
        </span>
      </div>
    </div>
  );
}
