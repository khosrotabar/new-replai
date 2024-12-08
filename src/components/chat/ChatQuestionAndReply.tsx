import { ChatMessageProps } from "@/shared/types";
import UserIcon from "../icons/UserIcon";
import BotIcon from "../icons/BotIcon";
import EditTextIcon from "../icons/EditTextIcon";
import ErrorIcon from "../icons/ErrorIcon";
import EditedReply from "../EditedReply";
import { SyncLoader } from "react-spinners";

type Props = {
  message: ChatMessageProps;
  messageLoading: boolean;
  isLastMessage: boolean;
};

const ChatQuestionAndReply = ({
  message,
  messageLoading,
  isLastMessage,
}: Props) => {
  const { content, message_answer } = message;
  return (
    <div className="flex w-full flex-col gap-4 text-sm font-normal text-white">
      <div className="flex w-full items-center gap-6 rounded-[16px] border-[1px] border-borderColor bg-[#1E1E1E] px-6 py-4">
        <UserIcon width={36} height={36} className="text-[#FFCC00]" />
        <p dir="auto">{content}</p>
      </div>
      {message_answer === "" || !message_answer ? (
        <div className="flex w-full items-center gap-6 rounded-[16px] border-[1px] border-errorColor px-6 py-3">
          <ErrorIcon width={36} height={36} />
          <span>متاسفانه مشکلی پیش آمده است...</span>
        </div>
      ) : (
        <div className="flex w-full items-start gap-6 px-6 pb-3 pt-6">
          <BotIcon width={36} height={36} className="flex-shrink-0" />
          {messageLoading && isLastMessage ? (
            <SyncLoader color="#FFF" size={6} className="mt-2" />
          ) : (
            <div className="relative mt-1 flex w-full flex-col items-end gap-2">
              <div className="w-full text-right text-sm font-normal leading-7 text-white">
                <EditedReply text={message_answer} />
              </div>
              <EditTextIcon
                width={24}
                height={24}
                className="cursor-pointer text-[#8F8F8F] hover:text-white"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatQuestionAndReply;
