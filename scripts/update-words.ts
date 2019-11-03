import * as parse from "csv-parse";
import * as fs from "fs";

const pickColumns = (data: any) => {
  const { ENGLISH: englishWord, FRENCH: frenchWord } = data;
  return { englishWord, frenchWord };
};

const parser = (parse as any)(
  { columns: true, skip_empty_lines: true },
  (_err: Error, data: any) => {
    console.log("File was parsed.");
    const row = data.map((row: any) => pickColumns(row));
    const jsonObject = JSON.stringify(row, null, 2);

    const fileName = "2-letters";
    fs.writeFile(`../data/words/${fileName}.json`, jsonObject, error => {
      if (error) {
        console.log(
          "The following error(s) occurred when writing into JSON file: ",
          error
        );
      } else {
        console.log(`Successfully wrote into ${fileName}.json`);
      }
    });
  }
);

process.stdin.pipe(parser);
