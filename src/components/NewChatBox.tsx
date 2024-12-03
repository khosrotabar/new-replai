import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { ChatsProps } from "@/shared/types";
import NewChatInput from "./NewChatInput";
import NewChatSamples from "./NewChatSamples";
import QuestionAndReplai from "./QuestionAndReplai";
import ScrollContent from "./ScrollContent";

const NewChatBox = () => {
  const [questions, setQuestions] = useState<ChatsProps[]>([]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [questions]);

  const handleQuestions = (value: string) => {
    setQuestions([...questions, { question: value, replai: "" }]);

    // api to send question and get replai to fill in  replai
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full w-[768px]"
    >
      {!questions.length ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-8">
          <span className="text-[32px] font-[800] text-[#A0A0A0]">
            چه سوالی از ریپلای دارید؟
          </span>
          <NewChatInput
            handleQuestions={handleQuestions}
            placeholder="سوال خود را بنویسید"
          />
          <NewChatSamples />
        </div>
      ) : (
        <div className="relative flex h-full w-full flex-col items-center justify-start pt-[80px]">
          <ScrollContent color="transparent">
            <div className="flex max-h-[calc(100vh-270px)] w-full flex-col items-center gap-4 px-2">
              {questions.map((q, index) => (
                <QuestionAndReplai
                  key={`${q}-${index}`}
                  question={q.question}
                  replai={q.replai}
                />
              ))}
              <div ref={endRef} className="w-full" />
            </div>
          </ScrollContent>
          <div className="w-full px-2">
            <div className="bg-mainColor absolute bottom-0 flex h-[190px] w-full items-center">
              <NewChatInput
                handleQuestions={handleQuestions}
                placeholder="گفتگو را ادامه دهید..."
              />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default NewChatBox;
