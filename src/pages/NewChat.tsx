import { useState } from "react";

import ChatsLayout from "@/components/layout/ChatsLayout";
import Welcome from "@/components/Welcome";
import NewChatBox from "@/components/new-chat/NewChatBox";

const NewChat = () => {
  const [showWelcome, setShowWelcom] = useState(true);
  const firstVisit = localStorage.getItem("first-visit");

  const handleWelcome = (value: boolean) => {
    setShowWelcom(value);
  };

  return (
    <ChatsLayout>
      <div className="flex h-full w-full items-center justify-center">
        {!firstVisit && showWelcome ? (
          <Welcome handleWelcome={handleWelcome} />
        ) : (
          <NewChatBox />
        )}
      </div>
    </ChatsLayout>
  );
};

export default NewChat;
