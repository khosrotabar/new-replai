import { motion } from "framer-motion";
import { Button } from "./ui/button";

import BotIcon from "./icons/BotIcon";

type Props = {
  handleWelcome: (value: boolean) => void;
};

const Welcome = ({ handleWelcome }: Props) => {
  const handleClick = () => {
    localStorage.setItem("first-visit", "true");
    handleWelcome(false);
  };

  return (
    <motion.div
      className="flex flex-col items-end gap-4"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div className="h-[288px] w-[768px] rounded-[16px] bg-[#1E1E1E] p-6">
        <div className="flex items-start justify-center gap-6">
          <BotIcon width={36} height={36} />
          <div className="flex w-fit flex-col gap-[30px] text-sm text-white">
            <span className="mt-[5px] font-[600]">
              به چت بات ریپلای خوش آمدید.
            </span>
            <p className="font-normal leading-[30px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه مجله در ستون و
              سطر آنچنان که لازم است.
            </p>
            <ul className="mr-4 font-normal">
              <li className="leading-[30px]">
                برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
              </li>
              <li className="leading-[30px]">
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده{" "}
              </li>
              <li className="leading-[30px]">
                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                است
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Button
        className="bg-primaryColor h-10 w-[95px] rounded-[8px] text-sm font-light text-white hover:bg-[#2546ff]"
        onClick={handleClick}
      >
        متوجه شدم
      </Button>
    </motion.div>
  );
};

export default Welcome;
