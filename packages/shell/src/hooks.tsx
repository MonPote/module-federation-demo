import { useContext } from "react";

export function useHello() {
  const value = useContext(window.MyCtx);
  console.log("useHello value", value);
  return value;
}

export function myFunction() {
  return "myFunction";
}
