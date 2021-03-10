import * as React from "react";

const Ctx = React.createContext();

export function PortalManager({ zIndex, children }) {
  return <Ctx.Provider value={{ zIndex }}>{children}</Ctx.Provider>;
}

export function usePortalManager() {
  return React.useContext(Ctx);
}
