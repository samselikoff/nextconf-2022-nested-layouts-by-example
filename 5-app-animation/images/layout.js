"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";

export default function Layout({ children }) {
  let id = useSelectedLayoutSegment();
  let prev = usePrevious(id);
  // let direction = previous > id ? "left" : "right";
  let direction = id > prev ? 1 : -1;
  console.log(direction);

  return (
    <div className="relative">
      <AnimatePresence initial={false}>
        <motion.div
          key={id}
          className="absolute"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

let variants = {
  enter: (direction) => ({ x: direction * 100 }),
  center: { x: 0 },
  exit: (direction) => ({ x: direction * -100 }),
};

function usePrevious(state) {
  let [tuple, setTuple] = useState([null, state]);

  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }

  return tuple[0];
}
