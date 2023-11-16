import React, { Suspense } from "react";

const loadModule = async () => {
  // Initializes the shared scope. Fills it with known provided modules from this build and all remotes
  await __webpack_init_sharing__("default");
  const container = window.shell; // or get the container somewhere else
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default);
  const module = await container.get("./hooks");
  return module();
};

// export const Toto = () => {
//   const { data, status } = useQuery({ queryFn: () => loadModule() });
//   status === "success" && data.myFunction();
//   return <>dd</>;
// };

export default function RedButton() {
  const ComponentUisngHook = ({ hooks }) => {
    // console.log("hooks", hooks);
    hooks.useHello();
    return <button style={{ color: "red" }}>Red button</button>;
  };

  const Component = React.lazy(async () => {
    const hooks = await loadModule();

    return {
      __esModule: true,
      default: () => ComponentUisngHook({ hooks }),
    };
  });

  return (
    <Suspense fallback="Loading Button">
      <Component />
    </Suspense>
  );
}

export const GreenButton2 = () => {
  return <button style={{ color: "red" }}>Red button2</button>;
};

export const useSomething = () => {};

//

export function test() {}

export function getMicroAppName() {
  return "app1-demo";
}
