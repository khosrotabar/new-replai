import { RootState } from "@/services/states/store";
import { useSelector } from "react-redux";
import { Skeleton } from "./ui/skeleton";

type Props = {
  handleQuestions: (value: string) => void;
};

type SampleProps = {
  text: string;
  handleQuestions: (value: string) => void;
};

const Sample = ({ text, handleQuestions }: SampleProps) => {
  return (
    <div
      onClick={() => handleQuestions(text)}
      className="cursor-pointer text-wrap rounded-[16px] border-[1px] border-borderColor px-3 py-2 text-xs font-normal text-[#D9D9D9] hover:bg-neutral-800"
      dir="auto"
    >
      {text}
    </div>
  );
};

const NewChatSamples = ({ handleQuestions }: Props) => {
  const { loading, currentWorkspace } = useSelector(
    (state: RootState) => state.workspaces,
  );
  const { samples } = currentWorkspace;

  if (loading) {
    return (
      <div className="grid w-full grid-cols-3 gap-4">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className="flex flex-col gap-[6px] rounded-[16px] border-[1px] border-borderColor px-3 py-2"
          >
            <Skeleton className="h-4 w-full bg-neutral-600" />
            <Skeleton className="h-4 w-[121px] bg-neutral-600" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid w-full grid-cols-3 gap-4">
      {samples.map((sample) => (
        <Sample
          key={`${sample.text}`}
          text={sample.text}
          handleQuestions={handleQuestions}
        />
      ))}
    </div>
  );
};

export default NewChatSamples;
