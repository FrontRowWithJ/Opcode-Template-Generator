import React, { useState, useRef } from "react";
import "./template-button.css";
import CodeTemplate from "./CodeTemplate";
import DownloadButton from "./DownloadButton";
const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => i + start);

const TemplateButton = (props) => {
  const templateRef = useRef(null);
  const [isButtonShowing, setButtonShowing] = useState(true);
  const [filename, setFilename] = useState("");
  const argLeft =
    props.templateNumber === 1 || props.templateNumber === 2 ? "DR" : "AD Left";
  const argRight = ["", "SB", "OP", "AD Right"][props.templateNumber];
  return isButtonShowing ? (
    <button
      className="template-button"
      onClick={() => {
        setButtonShowing(false);
        let buttons = new Array(props.numOfButtons).fill(false);
        buttons[props.templateNumber] = true;
        props.setButtonRenders(buttons);
        props.setPress(true);
      }}
    >
      {props.buttonName}
    </button>
  ) : (
    <div className="template-container">
      {props.templateNumber === 0 ? (
        <CodeTemplate
          numOfBits={42}
          bitLabels={[...range(0, 9), ...range(13, 22), 24, 25, 41]}
          templateRef={templateRef}
          getStyle={getStyle}
          setFilename={setFilename}
        >
          <MicroCodeMiddle />
        </CodeTemplate>
      ) : (
        <CodeTemplate
          numOfBits={32}
          bitLabels={[0, 4, 5, 9, 10, 14, 15, 31]}
          templateRef={templateRef}
          getStyle={getStyle}
          setFilename={setFilename}
        >
          <OpcodeMiddle left={argLeft} right={argRight} />
        </CodeTemplate>
      )}
      <DownloadButton downloadRef={templateRef} filename={filename} />
    </div>
  );
};

const OpcodeMiddle = (props) => {
  const l = props.left === "DR" ? "blue" : "orange";
  const r = props.right === "SB" ? "red" : "orange";
  return (
    <React.Fragment>
      <span style={getStyle(1, 18, "green")}>Opcode</span>
      <span style={getStyle(18, 23, l)}>{props.left}</span>
      <span style={getStyle(23, 28, "red")}>SA</span>
      <span style={getStyle(28, 33, r)}>{props.right}</span>
    </React.Fragment>
  );
};

const getStyle = (start, end, color) => {
  return { gridColumnStart: start, gridColumnEnd: end, color: color };
};

const MicroCodeMiddle = () => {
  return (
    <React.Fragment>
      <span style={getStyle(1, 18, "red")}>NA</span>
      <span style={getStyle(18, 21, "red")}>MS</span>
      <span style={getStyle(21, 22, "red")}>MC</span>
      <span style={getStyle(22, 23, "red")}>IL</span>
      <span style={getStyle(23, 24, "red")}>PI</span>
      <span style={getStyle(24, 25, "red")}>PL</span>
      <span style={getStyle(25, 26, "blue")}>TD</span>
      <span style={getStyle(26, 27, "blue")}>TA</span>
      <span style={getStyle(27, 28, "blue")}>TB</span>
      <span style={getStyle(28, 29, "blue")}>MB</span>
      <span style={getStyle(29, 34, "blue")}>FS</span>
      <span style={getStyle(34, 35, "blue")}>MD</span>
      <span style={getStyle(35, 36, "blue")}>RW</span>
      <span style={getStyle(36, 37, "blue")}>MM</span>
      <span style={getStyle(37, 38, "blue")}>MW</span>
      <span style={getStyle(38, 39, "blue")}>RV</span>
      <span style={getStyle(39, 40, "blue")}>RC</span>
      <span style={getStyle(40, 41, "blue")}>RN</span>
      <span style={getStyle(41, 42, "blue")}>RZ</span>
      <span style={getStyle(42, 43, "blue")}>FL</span>
    </React.Fragment>
  );
};

export default TemplateButton;
