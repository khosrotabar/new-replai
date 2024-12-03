import * as ScrollArea from "@radix-ui/react-scroll-area";

type Props = {
  children: React.ReactNode;
  color: string;
};

const ScrollContent = ({ children, color }: Props) => {
  return (
    <ScrollArea.Root className="w-full">
      <ScrollArea.Viewport dir="rtl">{children}</ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical" className="w-1">
        <ScrollArea.Thumb
          className="rounded-full bg-[#888]"
          style={{ backgroundColor: color }}
        />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
};

export default ScrollContent;
