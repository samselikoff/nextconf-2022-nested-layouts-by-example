"client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

let i = 0;
export default function Layout({ children }) {
  i++;
  // console.log(children);
  // console.log(rest);
  console.log(i);

  return (
    <div>
      <nav>
        <Link href="/5-animate/foo">Foo</Link>
        <Link href="/5-animate/bar">Bar</Link>
      </nav>
      <div>
        Here's the stringified children:{" "}
        {JSON.stringify(children, ignoreCircularReferences())}
      </div>
      <div>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 2 }}
            // ke
            // key={JSON.stringify(children, ignoreCircularReferences())}
            key={i}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export const config = {
  // dynamic: "force-dynamic", // 'auto' | 'force-dynamic' | 'error' | 'force-static'
  revalidate: 0,
};

/*
  Replacer function to JSON.stringify that ignores
  circular references and internal React properties.
  https://github.com/facebook/react/issues/8669#issuecomment-531515508
*/
const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (key.startsWith("_")) return; // Don't compare React's internal props.
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};
