import { useContext } from "react";
import { RouterContext } from "../context/RouterContext";
import { useRouter } from "../hooks/useRouter";

const About = () => {
  const { push } = useRouter();

  const handleClick = () => {
    push("/");
  };

  return (
    <div>
      <h2>Now In About</h2>
      <div className="card">
        <button onClick={handleClick}>
          Go To Root
        </button>
      </div>
    </div>
  );
}

export default About;