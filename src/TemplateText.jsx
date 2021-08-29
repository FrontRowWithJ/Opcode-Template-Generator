import React, { useState } from "react";
import "./template-text.css";

const NEXT = 0;
const PREV = 1;
const STAY = 2;
const TemplateText = (props) => {
  const [action, setAction] = useState(undefined);
  return (
    <input
      className="template-input"
      minLength={0}
      maxLength={1}
      style={{ gridColumnStart: props.idx + 1, gridColumnEnd: props.idx + 2 }}
      type="text"
      onKeyDown={(event) => filterInput(event, setAction)}
      onKeyUp={(event) =>
        setInput(event.target, props.idx, action, setAction, props.max)
      }
      onFocus={(event) => setCaretPosition(event.target, 1)}
    />
  );
};

const filterInput = (event, setAction) => {
  const key = event.key;
  const value = event.target.value;
  if (
    key !== "0" &&
    key !== "1" &&
    key !== "Backspace" &&
    key !== "Enter" &&
    key !== undefined &&
    key !== "ArrowLeft" &&
    key !== "ArrowRight"
  )
    event.preventDefault();

  switch (key) {
    case "0":
    case "1":
      if (value.length === 1) event.target.value = key;
      setAction(NEXT);
      break;
    case "ArrowRight":
      setAction(NEXT);
      break;
    case "Backspace":
      if (value.length === 0) setAction(PREV);
      break;
    case "ArrowLeft":
      setAction(PREV);
      break;
    default:
  }
};

const setInput = (node, index, action, setAction, max) => {
  switch (action) {
    case NEXT:
      [...node.parentElement.children][Math.min(index + 1, max - 1)].focus();
      setAction(STAY);
      break;
    case PREV:
      [...node.parentElement.children][Math.max(0, index - 1)].focus();
      setAction(STAY);
      break;
    default:
  }
};

const setCaretPosition = (elem, caretPos) => {
  if (elem.createTextRange) {
    const range = elem.createTextRange();
    range.move("character", caretPos);
    range.select();
  } else {
    if (elem.selectionStart) {
      elem.focus();
      elem.setSelectionRange(caretPos, caretPos);
    } else elem.focus();
  }
};

export default TemplateText;
