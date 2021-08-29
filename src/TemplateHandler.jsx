import React from "react";
import TemplateText from "./TemplateText";
import "./template-handler.css";

const TemplateHandler = (props) => {
  return (
    <div>
      {new Array(32).fill(0).map((val, index) => (
        <TemplateText idx={index} key={index} />
      ))}
    </div>
  );
};

export default TemplateHandler;
