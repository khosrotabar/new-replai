import BotIcon from "./icons/BotIcon";
import EditTextIcon from "./icons/EditTextIcon";
import UserIcon from "./icons/UserIcon";

type Props = {
  question: string;
  replai: string;
};

const QuestionAndReplai = ({ question, replai }: Props) => {
  return (
    <div className="flex w-full flex-col gap-4 text-sm font-normal text-white">
      <div className="border-borderColor flex w-full items-center gap-6 rounded-[16px] border-[1px] bg-[#1E1E1E] px-6 py-4">
        <UserIcon width={36} height={36} className="text-[#FFCC00]" />
        <span>{question}</span>
      </div>
      <div className="flex w-full items-start gap-6 px-6 pb-3 pt-6">
        <BotIcon width={36} height={36} className="flex-shrink-0" />
        <div className="flex w-full flex-col items-end justify-end">
          <p>{replai}</p>
          <EditTextIcon
            width={24}
            height={24}
            className="cursor-pointer text-[#8F8F8F] hover:text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionAndReplai;
