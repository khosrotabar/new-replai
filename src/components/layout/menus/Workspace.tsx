import LeftChavron from "@/components/icons/LeftChavron";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { stringToHexColor } from "@/utils/StringToCOlor";

const WorkSpace = () => {
  return (
    <div className="absolute bottom-[80px] right-0 w-full px-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="relative flex w-full cursor-pointer items-center justify-start gap-2">
            <div
              className="flex h-6 w-6 items-center justify-center rounded-[4px] text-white"
              style={{ backgroundColor: stringToHexColor("ورک اسپیس ۱") }}
            >
              <span className="text-sm">رپ</span>
            </div>
            <span className="text-xs">ورک اسپیس ۱</span>
            <LeftChavron width={6} height={10} className="absolute left-0" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="border-borderColor mr-10 h-[216px] w-[180px] border-[1px] bg-[#1E1E1E]"
          side="left"
        >
          <div></div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default WorkSpace;
