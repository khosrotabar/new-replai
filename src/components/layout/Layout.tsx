import DefaultMenu from "./menus/DefaultMenu";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-yekan-bakh h-screen w-full" dir="rtl">
      <DefaultMenu />
      <main className="bg-mainColor h-full w-full pr-[214px]">{children}</main>
    </div>
  );
};

export default Layout;
