import { Fragment } from "react";
import { ImageWithFallback } from "./ImageWithFallback";

type Props = {
  text: string;
};

const EditedReply = ({ text }: Props) => {
  const lines = text.split("\n");

  const urlRegex =
    /\b(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[^\s]*)?\/?\b/gi;

  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;

  const isImageUrl = (url: string) =>
    /\.(jpeg|jpg|gif|png|bmp|webp|svg|ico)$/i.test(url);

  return (
    <>
      {lines.map((line, index) => {
        const parts = line.split(
          new RegExp(`(${urlRegex.source}|${emailRegex.source})`, "gi"),
        );
        const lastPart = parts[parts.length - 3];

        if (
          line.trim().length > 0 &&
          !line.trim().endsWith(".") &&
          !line.trim().endsWith(":") &&
          !line.trim().endsWith("?") &&
          !line.trim().endsWith("؟") &&
          lines.length === index + 1 &&
          !isImageUrl(lastPart)
        ) {
          line += ".";
        }

        const formattedLine = line
          .split(/(\*\*.*?\*\*)/)
          .map((segment, segmentIndex) => {
            if (segment.startsWith("**") && segment.endsWith("**")) {
              return (
                <Fragment key={`${segment}-${segmentIndex}`}>
                  <strong>{segment.slice(2, -2)}</strong>
                </Fragment>
              );
            }

            const subParts = segment.split(
              new RegExp(`(${urlRegex.source}|${emailRegex.source})`, "gi"),
            );

            return (
              <Fragment key={segmentIndex}>
                {subParts.map((part, partIndex) => {
                  if (partIndex !== subParts.length - 2) {
                    if (isImageUrl(part)) {
                      return <ImageWithFallback key={partIndex} src={part} />;
                    }
                    if (urlRegex.test(part)) {
                      return (
                        <a
                          key={partIndex}
                          href={
                            part.includes("http") || part.includes("https")
                              ? part
                              : `http://${part}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primaryColor"
                        >
                          {part}
                        </a>
                      );
                    }

                    if (emailRegex.test(part)) {
                      return (
                        <a key={partIndex} href={`mailto:${part}`}>
                          {part}
                        </a>
                      );
                    }

                    return (
                      <Fragment key={partIndex}>
                        <span>{part}</span>
                      </Fragment>
                    );
                  }
                })}
              </Fragment>
            );
          });

        return (
          <Fragment key={index}>
            {formattedLine}
            <br />
          </Fragment>
        );
      })}
    </>
  );
};

export default EditedReply;
