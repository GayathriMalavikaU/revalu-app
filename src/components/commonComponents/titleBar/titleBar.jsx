import React from "react";

function TitleBar() {
  const url = "https://www.revalu.io/";
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        revalu.io*
      </a>
    </div>
  );
}

export default TitleBar;
