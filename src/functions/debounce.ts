import {SyntheticEvent}  from "react"

function debounce(func: Function, delay: number) {
  let timeOut: undefined | ReturnType<typeof setTimeout>;
  return (...args: [SyntheticEvent]) => {
    console.log("in file debounce args => ", args);
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
export default debounce;
