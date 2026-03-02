import React, { useEffect, useState } from "react";

export default function withClientSideComponent<P extends object>(
  Component: React.ComponentType<P>,
  Fallback?: React.ReactElement
) {
  return function Render(props: P) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      setIsReady(true);
    }, []);

    if (!isReady) {
      return Fallback ?? <div />;
    }

    return <Component {...props} />;
  };
}
