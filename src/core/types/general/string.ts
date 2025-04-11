export type StartsWith<Letter extends string, Type extends string> = Extract<
  Type,
  `${Letter}${string}`
>;

export type EndsWith<Letter extends string, Type extends string> = Extract<
  Type,
  `${string}${Letter}`
>;
