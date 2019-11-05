#!/usr/bin/env sh
# Please do not use `set -e` in this one

EXCLUSION_FILE_1='package-lock.json'

EXCLUSION_HTTPS='https'
EXCLUSION_SUBSTRING='substring'
EXCLUSION_TO_BE_GREATER='toBeGreater'
EXCLUSION_TO_BE_LESS='toBeLess'

FORBIDDEN=(
  "delete props"
  "Equal(0"
  "Equal(1"
  "Equal(2"
  "Equal(3"
  "Equal(4"
  "Equal(5"
  "Equal(6"
  "Equal(7"
  "Equal(8"
  "Equal(9"
  "Equal('"
  'Equal("'
  'Equal(`'
  "Equal(false"
  "Equal(true"
  "expect(false)"
  "expect(true)"
  "from 'lodash'"
  'from "lodash'
  FunctionComponent
  http
  "it('should"
  'it("should'
  'it(`should'
  "length).to"
  "not.toBeDefined()"
  "not.toBeUndefined()"
  substr
  "'./.."
  \"./..
  [,
  SFC
  "toBe(null)"
  "toBe(undefined)"
  "toBeCalledTimes(0)"
  toBeFalsy
  toBeTruthy
  toEqual
  toHaveBeen
)

# Test against these file types
FILES_PATTERN='\.(css|js|json|md|ts|tsx)$'

for i in "${FORBIDDEN[@]}"
do
  files=$(git ls-tree -r HEAD --name-only | \
    grep -v "$EXCLUSION_FILE_1" | \
    # Add new ones here like line above (i.e. `grep`)
    grep -E $FILES_PATTERN
  )

  # No files matching FILES_PATTERN. Exit with success, allowing commit
  if [ -z "$files" ]; then
    exit 0
  fi

  # Fail commit if any contain FORBIDDEN text.
  echo "$files" | \
    xargs grep -v $EXCLUSION_HTTPS | \
    grep -v $EXCLUSION_SUBSTRING | \
    grep -v $EXCLUSION_TO_BE_GREATER | \
    grep -v $EXCLUSION_TO_BE_LESS | \
    # Add new ones here like line above (i.e. `grep` without `xargs`)
    grep --color --with-filename -n -F "$i" && \
    echo "\n\033[0;31mFound $i references. Please remove them before committing\n" && exit 1
done

exit 0
