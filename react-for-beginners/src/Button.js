import PropTypes from "prop-types";
import { useState } from "react";

function Button({ text }) {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("call an api");

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
