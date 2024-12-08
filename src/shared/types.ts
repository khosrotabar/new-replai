export type IconProps = React.SVGAttributes<Element> & {
  width: number;
  height: number;
};

export type ReplayProps = {
  question?: string;
  chat_id?: number | null;
  reply: string;
  message_id: number | null;
  suggestions: string[];
};

export type WorkspaceProps = {
  id: 65;
  title: string;
  version: string;
  image: string | null;
  samples: {
    text: string;
  }[];
};

export type WorkspaceChatProps = {
  date: string;
  chats: [
    {
      id: number | null;
      title: string;
    },
  ];
};

export type ChatMessageProps = {
  audio: null;
  content: string;
  created: string;
  id: number;
  like: null;
  message_answer?: string;
};
