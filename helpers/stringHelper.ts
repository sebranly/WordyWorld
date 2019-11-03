const pluralize = (word: string, count: number) =>
  count === 1 ? `${count} ${word}` : `${count} ${word}s`;

export { pluralize };
