import React from "react";

export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#22222" : "transparent",
  };
  return <div style={styles} className="box" onClick={props.toggle}></div>;
}
