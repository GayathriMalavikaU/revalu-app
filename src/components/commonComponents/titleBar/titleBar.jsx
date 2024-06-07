import React from "react";

function TitleBar() {
  const url = "https://www.revalu.io/";
  return (
      <a href={url} target="_blank" rel="noopener noreferrer" data-testid="revalu"></a>
  );
}

export default TitleBar;
