// @flow
import type { Song } from "./types"
import parse from "./parser"

export const fromString = (raw: string): Song => parse(raw)
