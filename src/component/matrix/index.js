import React from "react";

import RainStream from "./rainStream";

export default function MatixRain() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "black",
      }}
    >
      <RainStream />
    </div>
  );
}
