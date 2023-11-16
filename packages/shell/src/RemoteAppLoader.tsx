import React, { useEffect, useState } from "react";

const appAUrl = "http://localhost:3001/remoteEntry.js";

// Q for team : what is app1 ?

// Fetch Remote A dynamically:
const fetchRemoteA = (resolve) => {
  console.log("calling");
  // We define a script tag to use the browser for fetching the remoteEntry.js file
  const script = document.createElement("script");
  script.src = appAUrl; // This could be defined anywhere

  // When the script is loaded we need to resolve the promise back to Module Federation
  script.onload = () => {
    resolve();
  };
  // Lastly we inject the script tag into the document's head to trigger the script load
  document.head.appendChild(script);
};

export const RemoteAppLoader = (props) => {
  const [hasLoadRemoteScript, setHasLoadRemoteScript] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      new Promise(fetchRemoteA).then((module) => {
        console.log("finished loading", module);
        setHasLoadRemoteScript(true);
      });
    }, 500);
  }, []);

  if (!hasLoadRemoteScript) {
    return <div>Loading remoteEntry...</div>;
  }

  return props.children;
};
