// @flow
import fs from "mz/fs"
import { fromString } from "./index"

const path = (name: string) => `./test-data/songs/${name}`
;["empty", "single-line", "simple-song", "with-capo"]
  .map(name => path(name))
  .forEach(file =>
    it(`parses ${file}`, () =>
      fs
        .readFile(file, "utf-8")
        .then(raw => expect(fromString(raw)).toMatchSnapshot()))
  )
