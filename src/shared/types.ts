export type IconProps = React.SVGAttributes<Element> & {
  width: number;
  height: number;
};

export type ChatsProps = {
  question: string;
  replai: string;
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

export type WorkspaceChat = {
  date: string;
  chats: [
    {
      id: number;
      title: string;
    },
  ];
};
