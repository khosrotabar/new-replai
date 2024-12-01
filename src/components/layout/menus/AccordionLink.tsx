import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

const AccordionLink = ({
  link,
  text,
  machedPath,
}: {
  link: string;
  text: string;
  machedPath: string;
}) => {
  const location = useLocation();
  const path = location.pathname.split("/").filter(Boolean);
  const currentPath = path[0];

  return (
    <Link
      to={link}
      className={clsx(
        "hover:text-primaryColor",
        machedPath === currentPath ? "text-primaryColor" : "text-white",
      )}
    >
      {text}
    </Link>
  );
};

export default AccordionLink;
