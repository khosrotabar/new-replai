import { SyncLoader } from "react-spinners";

import { ReplayProps } from "@/shared/types";
import BotIcon from "./icons/BotIcon";
import EditTextIcon from "./icons/EditTextIcon";
import UserIcon from "./icons/UserIcon";
import ErrorIcon from "./icons/ErrorIcon";
import TypingEffect from "./TypingEffect";

type Props = {
  message: ReplayProps;
  replayLoading: boolean;
  replayError: boolean;
  isLastMessage: boolean;
};

const NewQuestionAndReplai = ({
  message,
  replayLoading,
  replayError,
  isLastMessage,
}: Props) => {
  const { question, reply } = message;

  return (
    <div className="flex w-full flex-col gap-4 text-sm font-normal text-white">
      <div className="flex w-full items-center gap-6 rounded-[16px] border-[1px] border-borderColor bg-[#1E1E1E] px-6 py-4">
        <UserIcon width={36} height={36} className="text-[#FFCC00]" />
        <p dir="auto">{question}</p>
      </div>
      {replayError && isLastMessage ? (
        <div className="border-errorColor flex w-full items-center gap-6 rounded-[16px] border-[1px] px-6 py-3">
          <ErrorIcon width={36} height={36} />
          <span>متاسفانه مشکلی پیش آمده است...</span>
        </div>
      ) : (
        <div className="flex w-full items-start gap-6 px-6 pb-3 pt-6">
          <BotIcon width={36} height={36} className="flex-shrink-0" />
          {replayLoading && isLastMessage ? (
            <SyncLoader color="#FFF" size={6} className="mt-2" />
          ) : (
            <div className="flex w-full flex-col items-end gap-2">
              <div className="w-full text-right text-sm font-normal text-white">
                <TypingEffect text={reply} />
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

export default NewQuestionAndReplai;
