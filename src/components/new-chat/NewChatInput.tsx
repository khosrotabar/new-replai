import { useState } from "react";
import { Input } from "../ui/input";
import { useSelector } from "react-redux";
import clsx from "clsx";

import { RootState } from "@/services/states/store";
import SendIcon from "../icons/SendIcon";

type Props = {
  handleNewChat?: (value: string) => void;
  handleContinueChat?: (value: string) => void;
  placeholder: string;
  replayLoading?: boolean;
};

const NewChatInput = ({
  placeholder,
  replayLoading,
  handleNewChat,
  handleContinueChat,
}: Props) => {
  const [input, setInput] = useState<string>("");
  const workspaceLoading = useSelector(
    (state: RootState) => state.workspaces.loading,
  );
  const workspaceChatsLoading = useSelector(
    (state: RootState) => state.workspaceChats.loading,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setInput(e.target.value);
  };

  const handleKeyboard = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input !== "") {
      if (handleNewChat) handleNewChat(input);
      if (handleContinueChat) handleContinueChat(input);

      setInput("");
    }
  };

  const handleClick = () => {
    if (input !== "") {
      if (handleNewChat) handleNewChat(input);
      if (handleContinueChat) handleContinueChat(input);
    }
  };

  return (
    <div className="relative flex w-full items-center">
      <Input
        value={input}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyboard(e)}
        disabled={workspaceLoading || workspaceChatsLoading || replayLoading}
        className="h-[58px] border-[1px] border-borderColor bg-[#1E1E1E] pr-6 text-base font-normal text-white placeholder:text-sm placeholder:text-[#A0A0A0]"
      />
      <SendIcon
        width={32}
        height={32}
        className={clsx(
          "absolute left-4",
          input === "" ? "cursor-default" : "cursor-pointer",
        )}
        onClick={handleClick}
      />
    </div>
  );
};

export default NewChatInput;
