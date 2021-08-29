import React from "react";
import TemplateText from "./TemplateText";
import "./code-template.css";

const CodeTemplate = (props) => {
  const numOfBits = props.numOfBits;
  return (
    <div
      className="outer"
      onInput={(event) => props.setFilename(event.target.value)}
    >
      <input className="template-label" type="text" placeholder="Label" />
      <div
        ref={props.templateRef}
        className="code-container"
      >
        <div
          className="code-template-top"
          style={{ gridTemplateColumns: `repeat(${numOfBits}, 1fr)` }}
        >
          {props.bitLabels.map((bit, key) => {
            return (
              <span
                style={props.getStyle(numOfBits - bit, numOfBits + 1 - bit, "")}
                key={key}
              >
                {bit}
              </span>
            );
          })}
        </div>
        <div
          className="code-template-middle"
          style={{ gridTemplateColumns: `repeat(${numOfBits}, 1fr)` }}
        >
          {props.children}
        </div>
        <div
          className="code-template-bottom"
          style={{ gridTemplateColumns: `repeat(${numOfBits}, 1fr)` }}
        >
          {new Array(numOfBits).fill(0).map((val, index) => (
            <TemplateText idx={index} key={index} max={numOfBits} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeTemplate;
