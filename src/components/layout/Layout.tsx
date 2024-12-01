import DefaultMenu from "./menus/DefaultMenu";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // useQuery to get workspaces

  // store workspaces in redux

  // store first workspace in current-workspace state if localstorage (current-workspace) is not ready

  // if localstorage (current-workspace) is ready, store it in current-workspace state

  // handle loading states in redux

  return (
    <div className="font-yekan-bakh h-screen w-full" dir="rtl">
      <DefaultMenu />
      <main className="bg-mainColor h-full w-full pr-[214px]">{children}</main>
    </div>
  );
};

export default Layout;
