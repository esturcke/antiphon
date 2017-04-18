// @flow
import { isCapo } from "./parser"
;[
  ["undefined", undefined],
  ["empty array", []],
  ["empty string", [""]],
  ["capo substring", ["foo bar capo 5"]],
  ["multi line", ["Capo 5", "Cupo"]]
].forEach(([label, paragraph]) =>
  test(`${label} is not a capo definition`, () =>
    expect(isCapo(paragraph)).toBe(false))
)
;[
  ["lower case", ["capo 1"]],
  ["upper case", ["Capo 2"]],
  ["all caps", ["CAPO 3"]],
  ["with spaces", ["  capo  4  "]]
].forEach(([label, paragraph]) =>
  test(`${label} is not a capo definition`, () =>
    expect(isCapo(paragraph)).toBe(true))
)
