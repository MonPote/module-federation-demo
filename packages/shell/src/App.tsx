import React, { useEffect } from "react";
import { RemoteAppLoader } from "./RemoteAppLoader";
// import RedButton from "app1/RedButton";

// what is app1 ?
// what is './RedButton ?

// const loadModule = async () => {
//   console.log("loadModule");
//   // Initializes the shared scope. Fills it with known provided modules from this build and all remotes
//   await __webpack_init_sharing__("default");
//   const container = window.app1; // or get the container somewhere else
//   // Initialize the container, it may provide shared modules
//   await container.init(__webpack_share_scopes__.default);
//   const module = await container.get("./RedButton");
//   console.log("module", module);
//   return module;
// };

export default function App() {
  useEffect(() => {
    // loadModule();
  }, []);

  // console.log("RedButton", RedButton);
  return (
    <RemoteAppLoader>
      <div>
        Shell-ui
        {/* <RedButton /> */}
      </div>
    </RemoteAppLoader>
  );
}
