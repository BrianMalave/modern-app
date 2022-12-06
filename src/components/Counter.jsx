import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

function Counter({ from, to, textBefore, textAfter }) {
  const ref = useRef(null);

  useEffect(() => {
    const controls = animate(from, to, {
      duration: 5,
      onUpdate(value) {
        ref.current.textContent = textBefore + value.toFixed(0) + textAfter;
      },
    });
    return () => controls.stop();
  }, [from, to]);

  return <p ref={ref} />;
}

export default Counter;