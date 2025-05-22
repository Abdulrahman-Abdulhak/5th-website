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
  }
}

export {};
