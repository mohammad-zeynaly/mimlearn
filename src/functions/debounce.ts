function debounce(func: Function, delay: number) {
  let timeOut: undefined | ReturnType<typeof setTimeout>;
  return (...args: any) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
export default debounce;
