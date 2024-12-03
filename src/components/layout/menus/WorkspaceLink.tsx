import { useDispatch } from "react-redux";

import { WorkspaceProps } from "@/shared/types";
import { stringToHexColor } from "@/utils/StringToColor";
import ThickIcon from "@/components/icons/ThickIcon";
import { setCurrentWorkspace } from "@/services/states/workspaces";

type Props = {
  workspace: WorkspaceProps;
  currentWorkspaceId: number;
};

const WorkspaceLink = ({ workspace, currentWorkspaceId }: Props) => {
  const dispatch = useDispatch();
  const { id, title } = workspace;

  const handleClick = () => {
    localStorage.setItem("workspace", JSON.stringify(workspace));
    dispatch(setCurrentWorkspace(workspace));
  };

  return (
    <div
      className="relative flex w-full cursor-pointer items-center justify-start gap-2"
      onClick={handleClick}
    >
      <div
        className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-[4px] text-white"
        style={{ backgroundColor: stringToHexColor(title) }}
      >
        <span className="text-sm">{title.substring(0, 2)}</span>
      </div>
      <span className="text-xs text-white">{title}</span>
      {id === currentWorkspaceId && (
        <ThickIcon
          width={12}
          height={12}
          className="absolute left-0 flex-shrink-0"
        />
      )}
    </div>
  );
};

export default WorkspaceLink;
