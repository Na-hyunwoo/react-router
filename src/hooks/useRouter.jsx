import { useContext, useCallback } from "react";
import { RouterContext } from "../context/RouterContext";

export const useRouter = () => {
  const { path, changePath } = useContext(RouterContext);

  const push = useCallback(url => {
    changePath(url);
  }, [path]);

  return { push };
};


