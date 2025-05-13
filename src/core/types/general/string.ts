export type StartsWith<
  Letter extends string,
  Type extends string = ""
> = Type extends ""
  ? `${Letter}${string}`
  : Extract<Type, `${Letter}${string}`>;

export type EndsWith<
  Letter extends string,
  Type extends string = ""
> = Type extends ""
  ? `${string}${Letter}`
  : Extract<Type, `${string}${Letter}`>;
