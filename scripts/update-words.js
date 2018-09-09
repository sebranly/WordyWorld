const parse = require('csv-parse');
const fs = require('fs');

function pickColumns({ ENGLISH: englishWord, FRENCH: frenchWord }) {
  return { englishWord, frenchWord };
}

const parser = parse({ columns: true, skip_empty_lines: true }, (err, data) => {
  console.log('File was parsed.');
  const row = data.map((row) => pickColumns(row));
  const jsonObject = JSON.stringify(row, null, 2);

  const fileName = '2-letters';
  fs.writeFile(`../data/words/${fileName}.json`, jsonObject, (error) => {
    if (error) {
      console.log('The following error(s) occurred when writing into JSON file: ', error);
    } else {
      console.log(`Successfully wrote into ${fileName}.json`);
    }
  });
});

process.stdin.pipe(parser);
