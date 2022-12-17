import { useEffect, useState } from "react";

export default function withClientSideComponent(Component) {
  return function Remder(props) {
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
