import { IconProps } from "@/shared/types";

const LogoutIcon = ({ width, height, ...props }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 17.1429V17.1429C10 18.7208 11.2792 20 12.8571 20H16C17.6569 20 19 18.6569 19 17V7C19 5.34315 17.6569 4 16 4H12.8571C11.2792 4 10 5.27919 10 6.85714V6.85714"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 12H5M5 12L7.5 9.5M5 12L7.5 14.5"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogoutIcon;
