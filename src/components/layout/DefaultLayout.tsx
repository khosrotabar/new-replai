import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { getWorkspaces } from "@/services/api/workspaces";
import { setWorkspaces } from "@/services/states/workspaces";
import DefaultMenu from "./menus/DefaultMenu";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const { data, isLoading } = useQuery({
    queryKey: ["workspaces"],
    queryFn: () => getWorkspaces(),
    retry: false,
  });

  useEffect(() => {
    if (data && !isLoading) {
      const localWorkspace = localStorage.getItem("workspace");
      let currentWorkspace;

      if (localWorkspace) {
        currentWorkspace = JSON.parse(localWorkspace);
      } else {
        currentWorkspace = data[0];
        localStorage.setItem("workspace", JSON.stringify(data[0]));
      }

      dispatch(
        setWorkspaces({
          workspaces: data,
          loading: false,
          currentWorkspace: currentWorkspace,
        }),
      );
    }
  }, [data, isLoading]);

  // TODO: handle error

  return (
    <div className="h-screen w-full font-yekan-bakh" dir="rtl">
      <DefaultMenu />
      <main className="h-full w-full bg-mainColor pr-[490px]">{children}</main>
    </div>
  );
};

export default DefaultLayout;
