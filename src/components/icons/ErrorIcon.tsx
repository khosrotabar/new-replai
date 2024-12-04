import { IconProps } from "@/shared/types";

const ErrorIcon = ({ width, height, ...props }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="36" height="36" rx="2" fill="#FF4845" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.2231 10.4465C17.5616 9.85115 18.4384 9.85115 18.7769 10.4465L26.887 24.7112C27.2158 25.2895 26.7875 26 26.1101 26H9.88992C9.21247 26 8.78416 25.2895 9.11297 24.7112L17.2231 10.4465ZM17.25 16.75C17.25 16.3358 17.5858 16 18 16C18.4142 16 18.75 16.3358 18.75 16.75V20.25C18.75 20.6642 18.4142 21 18 21C17.5858 21 17.25 20.6642 17.25 20.25V16.75ZM18 22C17.5858 22 17.25 22.3358 17.25 22.75C17.25 23.1642 17.5858 23.5 18 23.5C18.4142 23.5 18.75 23.1642 18.75 22.75C18.75 22.3358 18.4142 22 18 22Z"
        fill="white"
      />
    </svg>
  );
};

export default ErrorIcon;
