import React, { Component, useEffect, useState } from "react";

export default function withClientSideComponent(
  Component: React.FC<Component>
) {
  return function Render(props: any) {
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
