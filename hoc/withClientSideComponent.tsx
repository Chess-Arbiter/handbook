import React, { ReactNode, useEffect, useState } from "react";

export default function withClientSideComponent(Component: React.FC<any>) {
  return function Remder(props: any) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      setIsReady(true);
    }, []);

    if (!isReady) {
      return null;
    }
    return <Component {...props} />; 
  };
}
