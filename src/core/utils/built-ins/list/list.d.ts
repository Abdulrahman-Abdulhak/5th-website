declare global {
  interface Array<T> {
    /**
     * Returns false when the list is empty, otherwise it returns true
     */
    toBool(): boolean;
  }
}

export {};
