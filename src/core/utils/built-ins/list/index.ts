Object.defineProperties(Array.prototype, {
  toBool: {
    value: function (): boolean {
      return this.length.toBool();
    },
    configurable: true,
    writable: true,
  },
});
