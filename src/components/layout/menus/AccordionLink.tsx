import clsx from "clsx";
import { Link } from "react-router-dom";

const AccordionLink = ({
  link,
  text,
  path,
}: {
  link: string;
  text: string;
  path: string;
}) => {
  return (
    <Link
      to={link}
      className={clsx(
        "hover:text-primaryColor",
        path === "new-chat" ? "text-primaryColor" : "text-white",
      )}
    >
      {text}
    </Link>
  );
};

export default AccordionLink;
