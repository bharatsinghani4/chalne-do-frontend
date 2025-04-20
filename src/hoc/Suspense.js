import React from "react";

const Suspense = ({ children }) => {
  return <React.Suspense fallback={"loading..."}>{children}</React.Suspense>;
};

export default Suspense;
