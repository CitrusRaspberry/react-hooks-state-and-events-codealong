import React, { useState } from "react";

function Toggle() {
  const [isOn, switchIt] = useState(false);

  function toggleBtn() {
    switchIt(isOn => !isOn);
  }

  return <button onClick={toggleBtn}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
