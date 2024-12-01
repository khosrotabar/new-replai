import { Link } from "react-router-dom";

import ThickIcon from "@/components/icons/ThickIcon";
import { stringToHexColor } from "@/utils/StringToColor";

type Props = {
  href: string;
  text: string;
};

const WorkspaceLink = ({ text, href }: Props) => {
  return (
    <Link
      to={href}
      className="relative flex w-full items-center justify-start gap-2"
      dir="rtl"
    >
      <div
        className="flex h-6 w-6 items-center justify-center rounded-[4px] text-white"
        style={{ backgroundColor: stringToHexColor(text) }}
      >
        <span className="text-sm">{text.substring(0, 2)}</span>
      </div>
      <span className="text-xs text-white">{text}</span>
      <ThickIcon width={12} height={12} className="absolute left-0" />
    </Link>
  );
};

export default WorkspaceLink;
