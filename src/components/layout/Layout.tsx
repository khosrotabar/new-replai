import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { getWorkspaces } from "@/services/api/workspaces";
import { setWorkspaces } from "@/services/states/workspaces";
import DefaultMenu from "./menus/DefaultMenu";
import SecondMenu from "./menus/SecondMenu";

const Layout = ({ children }: { children: React.ReactNode }) => {
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
    <div className="font-yekan-bakh h-screen w-full" dir="rtl">
      <DefaultMenu />
      <SecondMenu />
      <main className="bg-mainColor h-full w-full pr-[490px]">{children}</main>
    </div>
  );
};

export default Layout;
