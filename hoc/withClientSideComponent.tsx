import React, { useEffect, useState } from "react";

export default function withClientSideComponent(
  Component: any,
  Fallback?: any
) {
  return function Render(props: any) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      setIsReady(true);
    }, []);

    if (!isReady) {
      return Fallback || <div />;
    }
    
    return <Component {...props} />;
  };
}
