import { useContext } from "react";
import { RouterContext } from "../context/RouterContext";
import { useRouter } from "../hooks/useRouter";

const Root = () => {
  const { push } = useRouter();

  const handleClick = (e) => {
    push("/about");
  };

  return (
    <div>
      <h2>Now In Root</h2>
      <div className="card">
        <button onClick={handleClick}>
          Go To About
        </button>
      </div>
    </div>
  );
};

export default Root;

