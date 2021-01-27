import React, { createContext, useState } from "react";

const UrlContext = createContext();

function UrlProvider(props) {
  const [url, seturl] = useState("");

  return (
    <UrlContext.Provider value={[url, seturl]}>
      {props.children}
    </UrlContext.Provider>
  );
}
export { UrlProvider, UrlContext };
