import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getWorkspaceChats } from "@/services/api/workspaces";
import { RootState } from "@/services/states/store";
import { setWorkspaceChats } from "@/services/states/workspace-chats";
import ChatIcon from "@/components/icons/ChatIcon";
import ScrollContent from "@/components/ScrollContent";
import { Skeleton } from "@/components/ui/skeleton";

const WorkspaceChatLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      to={href}
      className="flex w-full cursor-pointer items-center justify-start gap-2 rounded-[8px] border-[1px] border-[transparent] px-2 py-2 hover:border-[1px] hover:border-[#404040] hover:bg-[#282828]"
    >
      <ChatIcon width={24} height={24} className="flex-shrink-0" />
      <span className="max-w-[140px] truncate whitespace-nowrap text-sm font-normal">
        {text}
      </span>
    </Link>
  );
};

const WorkspaceChats = () => {
  const dispatch = useDispatch();
  const { id } = useSelector(
    (state: RootState) => state.workspaces.currentWorkspace,
  );
  const workspaceChats = useSelector(
    (state: RootState) => state.workspaceChats,
  );
  const workspacesLoading = useSelector(
    (state: RootState) => state.workspaces.loading,
  );
  const { data, isLoading } = useQuery({
    queryKey: ["workspace-chats", id],
    queryFn: () => getWorkspaceChats(id),
    enabled: id !== undefined,
  });

  useEffect(() => {
    if (data) {
      dispatch(setWorkspaceChats(data));
    }
  }, [data]);

  // TODO: handle error

  if (isLoading || workspacesLoading) {
    return (
      <div className="mt-4 flex w-full flex-col gap-10">
        {Array.from({ length: 2 }, (_, index) => (
          <div key={index} className="flex w-full flex-col gap-2">
            <Skeleton className="h-5 w-[100px] bg-neutral-600" />
            {Array.from({ length: 2 }, (_, index) => (
              <Skeleton
                key={index + 5}
                className="h-6 w-full rounded-[5px] bg-neutral-600"
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <ScrollContent color="#888">
      <div className="mt-4 flex h-[calc(100vh-400px)] w-full flex-col gap-10 px-2">
        {workspaceChats.map((item) => (
          <div key={item.date} className="flex w-full flex-col gap-2">
            <span className="pr-[11px] text-xs font-light text-[#A4A4A4]">
              {item.date}
            </span>
            <div className="flex w-full flex-col items-start gap-2">
              {item.chats.map((chat, index) => (
                <WorkspaceChatLink
                  key={`${chat.title}-${index}`}
                  href={chat.id ? `/chat/${chat.id}` : "/new-chat"}
                  text={chat.title}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollContent>
  );
};

export default WorkspaceChats;
