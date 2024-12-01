import { useState } from "react";

import Layout from "@/components/layout/Layout";
import Welcome from "@/components/Welcome";
import NewChatBox from "@/components/NewChatBox";

const NewChat = () => {
  const [showWelcome, setShowWelcom] = useState(true);
  const firstVisit = localStorage.getItem("first-visit");

  const handleWelcome = (value: boolean) => {
    setShowWelcom(value);
  };

  return (
    <Layout>
      <div className="flex h-full w-full items-center justify-center">
        {!firstVisit && showWelcome ? (
          <Welcome handleWelcome={handleWelcome} />
        ) : (
          <NewChatBox />
        )}
      </div>
    </Layout>
  );
};

export default NewChat;
