"use client";
// eslint-disable-next-line no-redeclare
import React , { useRef} from "react";
import { useMotionValueEvent, useScroll , motion } from "framer-motion";
import { cn } from "../utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
  const cardsBreakpoints = content.map((_, index) => index / cardLength);
  const closestBreakpointIndex = cardsBreakpoints.reduce(
    (acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (
        acc >= 0 &&
        acc < cardsBreakpoints.length &&
        //@ts-ignore
        distance < Math.abs(latest - cardsBreakpoints[acc])
      ) {
        return index;
      }
      return acc;
    },
    0
  );
  setActiveCard(closestBreakpointIndex);
});


  const backgroundColors = [
    "var(--slate-800)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-5xl font-bold text-slate-200"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-md text-justify text-slate-400 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          "hidden lg:block h-80 w-9/12 rounded-md sticky top-10 overflow-hidden",
          contentClassName
        )}
        //@ts-ignore
       > {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
