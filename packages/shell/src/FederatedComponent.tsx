import React, { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";

const loadModule = async () => {
  // Initializes the shared scope. Fills it with known provided modules from this build and all remotes
  await __webpack_init_sharing__("default");
  const container = window.app1; // or get the container somewhere else
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default);
  const module = await container.get("./RedButton");

  return module();
};

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export const FederatedButton = () => {
  const Component = React.lazy(() => loadModule());

  const allExports = useQuery({
    queryKey: ["allexports"],
    queryFn: () => loadModule(),
  });

  if (allExports.status === "success" && allExports.data?.getMicroAppName) {
    console.log("micro app name", allExports.data.getMicroAppName());
  }

  console.log("allExports", allExports);

  return (
    <Suspense fallback="Loading Button">
      <Component />
    </Suspense>
  );
};
