// @flow
import { isCapo, parseStanzaType } from "./parser"
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
;[
  ["simple verse", "verse", { type: "verse", id: undefined }],
  ["something odd", "bloop", { type: "verse", id: undefined }],
  ["verse with number", "verse 2", { type: "verse", id: 2 }],
  ["bridge", "bridge", { type: "bridge", id: undefined }],
  ["bridge in all caps", "BRIDGE", { type: "bridge", id: undefined }]
].forEach(([label, line, parsed]) =>
  test(`can extract type from ${label}`, () =>
    expect(parseStanzaType(line)).toEqual(parsed))
)
