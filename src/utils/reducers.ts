import { ChatMessageProps } from "@/shared/types";

export const groupByDate = (
  messages: ChatMessageProps[],
): { [key: string]: ChatMessageProps[] } => {
  return messages.reduce(
    (group, message) => {
      const today = new Date();
      const date =
        typeof message.created === "string"
          ? message.created.split("T")[0]
          : today.toISOString().split("T")[0];

      if (!group[date]) {
        group[date] = [];
      }

      group[date].push(message);

      return group;
    },
    {} as { [key: string]: ChatMessageProps[] },
  );
};
