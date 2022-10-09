"client";

import { useState } from "react";

export default function Page() {
  let [count, set] = useState(0);

  return (
    <div>
      <p>foo</p>
      <p>bar</p>
      <p>Count is: {count}</p>
      <button onClick={() => set(count + 1)}>+</button>
    </div>
  );
}
