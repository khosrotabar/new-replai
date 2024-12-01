import Logo from "@/components/icons/Logo";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ConversationsIcon from "@/components/icons/ConversationsIcon";
import DatabaseIcon from "@/components/icons/DatabaseIcon";
import SuggestQuestionIcon from "@/components/icons/SuggestQuestionIcon";
import LogoutIcon from "@/components/icons/LogoutIcon";
import AccordionLink from "./AccordionLink";
import DashBoardIcon from "@/components/icons/DashboardIcon";
import WorkSpace from "./Workspace";

const DefaultMenu = () => {
  const location = useLocation();
  const path = location.pathname.split("/").filter(Boolean);
  const currentPath = path[0];

  return (
    <div className="fixed right-0 top-0 z-50 h-full w-[214px] py-6 pr-6">
      <div className="bg-secondColor border-borderColor relative flex h-full w-full flex-col items-start justify-start rounded-[16px] border-[1px] px-4 pb-4 pt-[26px] text-white">
        <Logo width={86} height={26} />

        <Link
          to="/"
          className={clsx(
            "hover:text-primaryColor mt-[89px] flex items-center justify-start gap-2 text-xs",
            currentPath === "dashboard" ? "text-primaryColor" : "text-white",
          )}
        >
          <DashBoardIcon width={24} height={24} />
          <span>داشبورد</span>
        </Link>

        <Accordion type="single" collapsible className="mt-10 w-full">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center justify-start gap-2 pl-2 text-xs text-white">
                <ConversationsIcon width={24} height={24} />
                <span>گفتگوها</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col items-start justify-center gap-5 pr-6 pt-6 text-xs">
                <AccordionLink
                  link="/new-chat"
                  text="گفتگوی جدید"
                  machedPath="new-chat"
                />
                <AccordionLink
                  link="/users-conversations"
                  text="گفتگوی کاربران"
                  machedPath="users-conversations"
                />
                <AccordionLink
                  link="/users-questions"
                  text="سوالات کاربران"
                  machedPath="users-questions"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Link
          to="/knowledge-base"
          className={clsx(
            "hover:text-primaryColor mt-10 flex items-center justify-start gap-2 text-xs",
            currentPath === "knowledge-base"
              ? "text-primaryColor"
              : "text-white",
          )}
        >
          <DatabaseIcon width={24} height={24} />
          <span>پایگاه دانش</span>
        </Link>

        <Link
          to="/suggested-questions"
          className={clsx(
            "hover:text-primaryColor mt-10 flex items-center justify-start gap-2 text-xs",
            currentPath === "suggested-questions"
              ? "text-primaryColor"
              : "text-white",
          )}
        >
          <SuggestQuestionIcon width={24} height={24} />
          <span>سوال‌های پیشنهادی</span>
        </Link>

        <WorkSpace />

        <div className="absolute bottom-4 right-4 flex cursor-pointer items-center justify-start gap-2 text-xs text-white">
          <LogoutIcon width={24} height={24} />
          <span>خروج</span>
        </div>
      </div>
    </div>
  );
};

export default DefaultMenu;
