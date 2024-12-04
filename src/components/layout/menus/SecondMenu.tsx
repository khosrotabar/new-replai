import { Button } from "@/components/ui/button";

import ChatIcon from "@/components/icons/ChatIcon";
import PlusIcon from "@/components/icons/PlusIcon";
import ScrollContent from "@/components/ScrollContent";
import WorkspaceChats from "./WorkspaceChats";

const SampleChatLink = ({ text }: { text: string }) => {
  return (
    <div className="flex w-full cursor-pointer items-center justify-start gap-2 rounded-[8px] border-[1px] border-[transparent] px-2 py-2 hover:border-[1px] hover:border-[#404040] hover:bg-[#282828]">
      <ChatIcon width={24} height={24} className="flex-shrink-0" />
      <span className="text-sm font-normal text-[#FF6200]">{text}</span>
    </div>
  );
};

const SecondMenu = () => {
  const handleRedirect = () => {
    window.location.href = "/new-chat";
  };

  return (
    <div className="fixed right-[214px] top-0 z-50 h-full w-[276px] py-6 pr-6">
      <div className="relative flex h-full w-full flex-col items-start justify-start rounded-[16px] border-[1px] border-borderColor bg-secondColor p-2 text-white">
        <Button
          onClick={handleRedirect}
          className="flex h-10 w-full items-center justify-start gap-3 rounded-[8px] border-[1px] border-borderColor bg-[#1E1E1E] px-3"
        >
          <PlusIcon width={18} height={18} />
          <span className="mt-1 text-xs">گفتگوی جدید</span>
        </Button>

        <div className="mt-10 flex w-full flex-col items-start gap-4">
          <span className="pr-[19px] text-xs font-light text-[#A4A4A4]">
            نمونه‌‌ها
          </span>
          <ScrollContent color="#888">
            <div className="flex max-h-[150px] w-full flex-col items-start gap-2 px-2">
              <SampleChatLink text="نمونه چت یک" />
              <SampleChatLink text="نمونه چت یک" />
              <SampleChatLink text="نمونه چت یک" />
              <SampleChatLink text="نمونه چت یک" />
            </div>
          </ScrollContent>
        </div>

        <div className="w-full px-2">
          <div className="my-4 h-[1px] w-full bg-[#2A2A2A]" />
        </div>

        <WorkspaceChats />
      </div>
    </div>
  );
};

export default SecondMenu;
