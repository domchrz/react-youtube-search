export default function throttle() {
  let throttle: boolean = false;
  return (callback: Function, time: number) => {
    if (throttle) return;
    throttle = true;
    callback();
    setTimeout(() => {
      throttle = false;
    }, time);
  };
}
