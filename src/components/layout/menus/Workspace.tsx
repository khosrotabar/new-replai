import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import LeftChavron from "@/components/icons/LeftChavron";
import { stringToHexColor } from "@/utils/StringToColor";
import WorkspaceLink from "./WorkspaceLink";
import * as ScrollArea from "@radix-ui/react-scroll-area";

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
            <LeftChavron
              width={6}
              height={10}
              className="absolute left-[10px]"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="border-borderColor custom-shadow -mt-7 mr-1 h-[216px] w-[180px] rounded-[16px] border-[1px] bg-[#1E1E1E] py-6 pl-2 pr-1"
          side="left"
        >
          <ScrollArea.Root>
            <ScrollArea.Viewport>
              <div className="flex h-[168px] w-full flex-col gap-6 pr-4">
                <WorkspaceLink text="بیمه سامان" href="#" />
                <WorkspaceLink text="پویانمایی" href="#" />
                <WorkspaceLink text="آستان قدس" href="#" />
                <WorkspaceLink text="ورک اسپیس ۴" href="#" />
                <WorkspaceLink text="ورک اسپیس ۴" href="#" />
                <WorkspaceLink text="ورک اسپیس ۴" href="#" />
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical" className="w-1">
              <ScrollArea.Thumb className="rounded-full bg-[#888]" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default WorkSpace;
