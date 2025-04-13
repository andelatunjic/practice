export const throttle = (func, delay) => {
  let isThrottled = false;

  return (...args) => {
    if (isThrottled) return;

    func(...args);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, delay);
  };
};

export function throttle2(func, wait) {
  let isThrottled = false;

  return function throttled(...args) {
    if (isThrottled) return;

    func.apply(this, args);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, wait);
  };
}
