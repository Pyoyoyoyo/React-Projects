import React, { useState } from "react";
import "./style.css";

export const MyCoolButton = props => {
  const [commentHistory, setCommentHistory] = useState([]);
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
    setCommentHistory([...commentHistory, props.comment]);
  };

  console.log("MyCoolButton " + props.tovchNer);

  return (
    <div className="CoolButtonContainer">
      <span style={css}>
        {props.tovchNer ? props.tovchNer : "Үнэхээр ЛАГ товч"}
      </span>
      <br />
      <input
        className="MyCoolButton"
        type="button"
        onClick={clickHandler}
        value={props.text ? `${count})  ${props.text}` : "Click Me!!!!"}
      />

      <div>
        {commentHistory.map((el, index) => (
          <div key={index}>{el}</div>
        ))}
      </div>
    </div>
  );
};

const css = {
  color: "red"
};
