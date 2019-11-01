const pluralize = (word, count) =>
	count === 1
		? `${count} ${word}`
		: `${count} ${word}s`;

export { pluralize };