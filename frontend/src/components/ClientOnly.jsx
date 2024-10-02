import React, { useEffect, useState } from "react";

const ClientOnly = (porps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{porps.children}</>;
};

export default ClientOnly;