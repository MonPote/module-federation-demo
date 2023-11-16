import React from "react";

if (!window.MyCtx) {
  window.MyCtx = React.createContext();
}

export const Provider = ({ children }) => {
  return (
    <window.MyCtx.Provider value={"world"}>{children}</window.MyCtx.Provider>
  );
};
