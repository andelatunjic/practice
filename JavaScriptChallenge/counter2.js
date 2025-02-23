/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

const createCounter = (init) => {
  let help = init;
  return {
    increment: () => {
      help++;
      return help;
    },
    decrement: () => {
      help--;
      return help;
    },
    reset: () => {
      help = init;
      return help;
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
