import React, { useEffect } from "react";
import { RemoteAppLoader } from "./RemoteAppLoader";
import { FederatedButton } from "./FederatedComponent";
// import RedButton from "app1/RedButton";

// what is app1 ?
// what is './RedButton ?

export default function App() {
  useEffect(() => {
    // loadModule();
  }, []);

  // console.log("RedButton", RedButton);
  return (
    <RemoteAppLoader>
      <div>
        Shell-ui
        <FederatedButton />
      </div>
    </RemoteAppLoader>
  );
}
