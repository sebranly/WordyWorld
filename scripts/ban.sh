#!/usr/bin/env sh
# Please do not use `set -e` in this one

EXCLUSION_FILE_1='package-lock.json'

EXCLUSION_HTTPS='https'
EXCLUSION_SUBSTRING='substring'

FORBIDDEN=(
  "delete props"
  "expect(false)"
  "expect(true)"
  "from 'lodash'"
  'from "lodash'
  FunctionComponent
  http
  "it('should"
  'it("should'
  'it(`should'
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
  "toEqual('"
  'toEqual("'
  'toEqual(`'
  toHaveBeenCalled
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
    # Add new ones here like line above (i.e. `grep` without `xargs`)
    grep --color --with-filename -n -F "$i" && \
    echo "\n\033[0;31mFound $i references. Please remove them before committing\n" && exit 1
done

exit 0
