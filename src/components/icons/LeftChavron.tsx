import { IconProps } from "@/shared/types";

const LeftChavron = ({ width, height, ...props }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 1L1 5L5 9"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LeftChavron;
