import "./textanimation.css";

/*
  TODO: Add configuration for animation
  i.e. type(name), duration, delay, etc.
*/
export function WaveText({ text }: { text: String }) {
  const animatedText = text.split("").map((char, i) => {
    const style = {
      animationDelay: (2 * (i / 10)) + "s",
      animationName: "min-max-yeast",
      animationDuration: "2s",
      animationIterationCount: "infinite",
      animationDirection: "alternate"
    };
    return <span
      aria-hidden="true"
      key={i}
      style={style}
    >
      {char}
    </span>
  });

  return (
    <>
      {animatedText}
    </>
  )
}

export function BouncyBoiText({ text }: { text: String }) {
  const animatedText = text.split("").map((char, i) => {
    const style = {
      animationDelay: (2 * Math.random()) + "s",
      animationName: "min-max-gravity",
      animationDuration: "2s",
      animationIterationCount: "infinite",
      animationDirection: "alternate"
    };
    return <span
      aria-hidden="true"
      key={i}
      style={style}
    >
      {char}
    </span>
  });

  return (
    <>
      {animatedText}
    </>
  )
}