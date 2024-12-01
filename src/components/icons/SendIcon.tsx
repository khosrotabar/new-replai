import { IconProps } from "@/shared/types";

const SendIcon = ({ width, height, ...props }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.0234 22.574L9.25988 16.4569C8.86397 16.2809 8.86397 15.7191 9.25988 15.5431L23.0234 9.42599C23.4286 9.24588 23.8503 9.64329 23.6946 10.0585L21.6636 15.4732C21.5362 15.8128 21.5362 16.1872 21.6636 16.5268L23.6946 21.9415C23.8503 22.3567 23.4286 22.7541 23.0234 22.574Z"
        stroke="#A0A0A0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SendIcon;
