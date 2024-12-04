import { IconProps } from "@/shared/types";

const PlusIcon = ({ width, height, ...props }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="1"
        y="1"
        width="16"
        height="16"
        rx="3"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 13C8.5 13.2761 8.72386 13.5 9 13.5C9.27614 13.5 9.5 13.2761 9.5 13V9.5H13C13.2761 9.5 13.5 9.27614 13.5 9C13.5 8.72386 13.2761 8.5 13 8.5H9.5V5C9.5 4.72386 9.27614 4.5 9 4.5C8.72386 4.5 8.5 4.72386 8.5 5V8.5H5C4.72386 8.5 4.5 8.72386 4.5 9C4.5 9.27614 4.72386 9.5 5 9.5H8.5V13Z"
        fill="white"
      />
    </svg>
  );
};

export default PlusIcon;
