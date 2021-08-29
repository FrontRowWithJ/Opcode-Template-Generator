import React, { useState } from "react";
import { times } from "lodash";
import MoreButton from "./MoreButton";
import "./app.css";

const App = () => {
  const [numOfButtons, setNumOfButtons] = useState(1);
  const [canPress, setPress] = useState(true);
  return (
    <main>
    <h1>Micro-codesu/Opcode Template Generator</h1>
      {times(numOfButtons, (idx) => (
        <MoreButton
          canPress={canPress}
          setPress={setPress}
          numOfButtons={numOfButtons}
          setNumOfButtons={setNumOfButtons}
          key={idx}
        />
      ))}
    </main>
  );
};

export default App;
