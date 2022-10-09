import { useState, useEffect } from "react";
import { RouterContext } from "../context/RouterContext";

const Router = ({children}) => {
  const [path, setPath] = useState(window.location.pathname);

  const changePath = path => {
    setPath(path);
    window.history.pushState({path: path}, "", path);
  };

  const contextValue = {
    path,
    changePath: changePath
  };

  useEffect(() => {
    const handleOnpopstate = (e) => {
      setPath(e.state?.path || "/");
    }

    window.addEventListener("popstate", handleOnpopstate);

    return () => {
      window.removeEventListener("popstate", handleOnpopstate);
    }

  }, [])

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
}

export default Router;