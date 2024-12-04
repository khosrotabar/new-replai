import { useState } from "react";

export const ImageWithFallback = ({ src }: { src: string }) => {
  const [isError, setIsError] = useState(false);

  if (isError) return null;

  return (
    <img
      src={src}
      alt=""
      onError={() => setIsError(true)}
      style={{ maxWidth: "100%", height: "auto" }}
      className="my-2"
    />
  );
};
