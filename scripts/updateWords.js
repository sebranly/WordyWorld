const csvParse = require("csv-parse");
const fs = require("fs");
const lodash = require("lodash");

const pickColumns = data => {
  const { ENGLISH: englishWord, FRENCH: frenchWord } = data;
  return { englishWord, frenchWord };
};

const parser = csvParse(
  { columns: true, skip_empty_lines: true },
  (_err, data) => {
    console.log("File was parsed.");
    const rows = data.map(row => pickColumns(row));
    const orderedRows = rows; // lodash.sortBy(rows, ["englishWord"]);
    const jsonObject = JSON.stringify(orderedRows, null, 2);

    const numberLetters = process.argv[2];
    const fileName = `${numberLetters}-letters.json`;

    fs.writeFile(`./src/data/words/${fileName}`, jsonObject, error => {
      if (error) {
        const errorMessage = `The following error(s) occurred when writing into ${fileName}: `;
        console.log(errorMessage, error);
      } else {
        console.log(`Successfully wrote into ${fileName}`);
      }
    });
  }
);

process.stdin.pipe(parser);
