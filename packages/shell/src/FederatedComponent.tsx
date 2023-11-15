import React, { Suspense } from "react";

const loadModule = async () => {
  console.log("loadModule");
  // Initializes the shared scope. Fills it with known provided modules from this build and all remotes
  await __webpack_init_sharing__("default");
  const container = window.app1; // or get the container somewhere else
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default);
  const module = await container.get("./RedButton");
  console.log("module", module());
  return module();
};

export const FederatedButton = () => {
  const Component = React.lazy(() => loadModule());

  return (
    <Suspense fallback="Loading Button">
      <Component />
    </Suspense>
  );
};
