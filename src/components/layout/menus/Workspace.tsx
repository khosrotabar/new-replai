import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSelector } from "react-redux";
import { Skeleton } from "@/components/ui/skeleton";

import LeftChavron from "@/components/icons/LeftChavron";
import WorkspaceLink from "./WorkspaceLink";
import { stringToHexColor } from "@/utils/StringToColor";
import { RootState } from "@/services/states/store";
import ScrollContent from "@/components/ScrollContent";

const WorkSpace = () => {
  const { workspaces, currentWorkspace, loading } = useSelector(
    (state: RootState) => state.workspaces,
  );

  if (loading) {
    return (
      <div className="absolute bottom-[80px] right-0 w-full px-4">
        <Skeleton className="h-6 w-full rounded-[5px] bg-neutral-600" />
      </div>
    );
  }

  return (
    <div className="absolute bottom-[80px] right-0 w-full px-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="relative flex w-full cursor-pointer items-center justify-start gap-2">
            <div
              className="flex h-6 w-6 items-center justify-center rounded-[4px] text-white"
              style={{
                backgroundColor: stringToHexColor(currentWorkspace.title ?? ""),
              }}
            >
              <span className="text-sm">
                {currentWorkspace?.title?.substring(0, 2)}
              </span>
            </div>
            <span className="truncate text-xs">{currentWorkspace?.title}</span>
            <LeftChavron
              width={6}
              height={10}
              className="absolute left-[10px]"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="border-borderColor custom-shadow -mt-7 mr-1 h-[216px] w-[180px] rounded-[16px] border-[1px] bg-[#1E1E1E] py-6 pl-2 pr-2"
          side="left"
        >
          <ScrollContent color="#888">
            <div className="flex h-[168px] w-full flex-col gap-6 pr-3">
              {workspaces.map((workspace) => (
                <WorkspaceLink
                  key={`${workspace.title}-${workspace.id}`}
                  workspace={workspace}
                  currentWorkspaceId={currentWorkspace.id}
                />
              ))}
            </div>
          </ScrollContent>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default WorkSpace;
