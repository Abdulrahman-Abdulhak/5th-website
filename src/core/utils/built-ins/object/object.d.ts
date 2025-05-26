declare global {
  interface ObjectConstructor {
    /**
     * Evaluates the xor expression as boolean expression such as: val1 xor val2
     * @param val1
     * @param val2
     */
    xor(val1: any, val2: any): boolean;
  }

  interface Object {
    /**
     * Returns the boolean form of the object, if the object is of an array type it will return false
     */
    toBool(): boolean;

    /**
     * Check whether the value of the object if it's primitive or not.
     *
     * won't work on null or undefined values.
     * @see [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#primitive_values)
     */
    isPrimitive(): boolean;
  }
}

export {};
