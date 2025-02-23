const expect = (val) => ({
  toBe: (_val) =>
    val === _val
      ? true
      : (() => {
          throw new Error("Not Equal");
        })(),
  notToBe: (_val) =>
    val !== _val
      ? true
      : (() => {
          throw new Error("Equal");
        })(),
});
