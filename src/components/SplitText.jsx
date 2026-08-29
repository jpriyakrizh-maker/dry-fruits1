import React, { useEffect, useState } from "react";

function SplitText({
  text,
  className = "",
  delay = 50,
  duration = 1.25,
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
}) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 className={className}>
      {text.split(" ").map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          <span
            style={{
              display: "inline-block",
              overflow: "hidden",
              marginRight: "0.25em",
            }}
          >
            {word.split("").map((char, charIndex) => {
              const index =
                text
                  .split(" ")
                  .slice(0, wordIndex)
                  .join("").length +
                wordIndex +
                charIndex;

              return (
                <span
                  key={charIndex}
                  style={{
                    display: "inline-block",
                    opacity: started ? to.opacity : from.opacity,
                    transform: started
                      ? `translateY(${to.y}px)`
                      : `translateY(${from.y}px)`,
                    transition: `opacity ${duration}s ease, transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1)`,
                    transitionDelay: `${index * delay}ms`,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>

          {wordIndex < text.split(" ").length - 1 && " "}
        </React.Fragment>
      ))}
    </h1>
  );
}

export default SplitText;