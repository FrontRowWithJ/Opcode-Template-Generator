import React, { useState } from "react";
import TemplateButton from "./TemplateButton";
import "./more-button.css";
const TEMPLATE_NAMES = [
  "Micro-code",
  "Register",
  "Immediate",
  "Jump And Branch",
];
const MoreButton = (props) => {
  const [canDuplicate, setDuplicate] = useState(true);
  const [isMoreButton, setMoreButton] = useState(true);
  const [buttonRenders, setButtonRenders] = useState(
    new Array(TEMPLATE_NAMES.length).fill(true)
  );
  return (
    <div className="more-button-container">
      {isMoreButton ? (
        <button
          style={{ opacity: props.canPress ? 1 : 0.3 }}
          className="more-button"
          onClick={() => {
            if (canDuplicate && props.canPress) {
              setMoreButton(false);
              props.setNumOfButtons(props.numOfButtons + 1);
              setDuplicate(false);
              props.setPress(false);
            }
          }}
        ></button>
      ) : (
        TEMPLATE_NAMES.map((name, index) =>
          buttonRenders[index] ? (
            <TemplateButton
              setPress={props.setPress}
              buttonName={name}
              key={index}
              templateNumber={index}
              setButtonRenders={setButtonRenders}
              numOfButtons={TEMPLATE_NAMES.length}
            />
          ) : (
            <React.Fragment key={index}></React.Fragment>
          )
        )
      )}
    </div>
  );
};

export default MoreButton;
