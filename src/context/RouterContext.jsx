import { createContext } from "react";

export const RouterContext = createContext({
  path: "",
  changePath: () => undefined,
})