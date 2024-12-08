import { Skeleton } from "../ui/skeleton";
import ChatsLayout from "../layout/ChatsLayout";
import UserIcon from "../icons/UserIcon";
import BotIcon from "../icons/BotIcon";

const ChatLoading = () => {
  return (
    <ChatsLayout>
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative flex h-full w-[768px] flex-col gap-4 pt-[80px]">
          <div className="flex w-full items-center justify-center">
            <Skeleton className="h-8 w-[108px] rounded-[5px] bg-[#42425366] px-5 py-1" />
          </div>
          {Array.from({ length: 2 }, (_, index) => {
            return (
              <div key={index} className="flex flex-col gap-4">
                <div className="flex w-full items-center gap-6 rounded-[16px] border-[1px] border-borderColor bg-[#1E1E1E] px-6 py-4">
                  <UserIcon width={36} height={36} className="text-[#FFCC00]" />
                  <Skeleton className="h-6 w-full bg-neutral-600" />
                </div>
                <div className="flex w-full items-start gap-6 px-6 pb-3 pt-6">
                  <BotIcon width={36} height={36} className="flex-shrink-0" />
                  <div
                    className="relative mt-1 flex w-full flex-col items-end gap-2"
                    dir="ltr"
                  >
                    <Skeleton className="h-6 w-full bg-neutral-600" />
                    <Skeleton className="h-6 w-[50%] bg-neutral-600" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ChatsLayout>
  );
};

export default ChatLoading;
