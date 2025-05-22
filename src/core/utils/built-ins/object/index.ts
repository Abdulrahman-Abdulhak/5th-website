Object.xor = (val1, val2) => {
  const and = val1 && val2;
  const or = val1 || val2;
  return or && !and;
};

Object.defineProperties(Object.prototype, {
  toBool: {
    value: function (): boolean {
      return !!this.valueOf();
    },
    configurable: true,
    writable: true,
  },
});
