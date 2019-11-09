if [[ $# -eq 0 ]] ; then
  echo 'Please give the number of letters'
  exit 0
fi

rm ./src/data/words/"$1-letters".json
cat ~/Downloads/"Database - $1L.csv" | node ./scripts/updateWords.js $1