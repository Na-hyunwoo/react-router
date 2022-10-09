import { useContext } from "react";
import { RouterContext } from "../context/RouterContext";

const Routes = ({children}) => {
  const { path } = useContext(RouterContext);

  let element = null;

  children.forEach(child => {
    if (child.props.path === path) {
      element = child.props.component;
      return;
    }
  })

  return element;
}

export default Routes;