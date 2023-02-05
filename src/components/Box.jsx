import React from "react";

export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };
  // Once we receive props, we can access React's onClick prop, which is only accessible to native HTML elements
  return <div style={styles} className="box" onClick={props.toggle}></div>;
}
