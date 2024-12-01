import { useState } from "react";
import { Input } from "./ui/input";
import clsx from "clsx";

import SendIcon from "./icons/SendIcon";

type Props = {
  handleQuestions: (value: string) => void;
  placeholder: string;
};

const NewChatInput = ({ placeholder, handleQuestions }: Props) => {
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setInput(e.target.value);
  };

  const handleKeyboard = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);

    if (e.key === "Enter" && input !== "") {
      handleQuestions(input);

      setInput("");
    }
  };

  return (
    <div className="relative flex w-full items-center">
      <Input
        value={input}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyboard(e)}
        className="border-borderColor h-[58px] border-[1px] bg-[#1E1E1E] pr-6 text-base font-normal text-white placeholder:text-sm placeholder:text-[#A0A0A0]"
      />
      <SendIcon
        width={32}
        height={32}
        className={clsx(
          "absolute left-4",
          input === "" ? "cursor-default" : "cursor-pointer",
        )}
        onClick={() => handleQuestions(input)}
      />
    </div>
  );
};

export default NewChatInput;
