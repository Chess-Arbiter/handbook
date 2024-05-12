import { useEffect, useRef } from "react";

export default function usePrevious(value: "laws" | "more") {
  const ref = useRef("");

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
