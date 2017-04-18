// @flow
import type { Song, MetaData, Stanza, StanzaType } from "./types"

const parseTitleParagraph = (
  paragraph: string[]
): { title: string, artists: string[] } => ({
  title: paragraph[0] === undefined ? "" : paragraph[0],
  artists: paragraph[1] === undefined ? [] : paragraph[1].split(/\s*,\s*/)
})

const isStanzaType = (line: string): boolean =>
  /^\s*(verse|chorus|pre-chorus|bridge)(?:\s+\d+)?\s*$/i.test(line)

const normalizeType = (type: string): StanzaType => {
  switch (type.toLowerCase()) {
    case "bridge":
      return "bridge"
    case "pre-chorus":
      return "pre-chorus"
    case "chorus":
      return "chorus"
    default:
      return "verse"
  }
}

export const parseStanzaType = (
  line: string
): { type: StanzaType, id?: number } => {
  const [_, type, id] = line.match(/^\s*(.*?)(?:\s+(\d+))?\s*$/i) || []
  return {
    type: normalizeType(type),
    id: id === undefined ? undefined : parseInt(id, 10)
  }
}

const isChordLine = (line: string): boolean => true

export const isCapo = (paragraph?: string[]): boolean =>
  paragraph !== undefined &&
  paragraph.length == 1 &&
  /^\s*capo\s+\d+\s*$/i.test(paragraph[0])

const parseCapo = (line: string): number => {
  const match = line.match(/^\s*capo\s+(\d)+\s*$/i)
  return match && match[1] ? parseInt(match[1], 10) : 0
}

const splitMetaData = (raw: string): { meta: MetaData, body: string[][] } => {
  const paragraphs = raw.split(/\n{2,}/).map(paragraph => paragraph.split(/\n/))
  const { title, artists } = parseTitleParagraph(paragraphs.shift())
  const capo = isCapo(paragraphs[0]) ? parseCapo(paragraphs.shift()[0]) : 0

  return {
    meta: { title, artists, capo },
    body: paragraphs
  }
}

const stanza = (paragraph: string[]): Stanza => {
  const { type, id } = isStanzaType(paragraph[0])
    ? parseStanzaType(paragraph.shift())
    : { type: "verse", id: undefined }

  return {
    type,
    id,
    lines: []
  }
}

export default (raw: string): Song => {
  const { meta, body } = splitMetaData(raw)
  return {
    raw,
    ...meta,
    stanzas: body.map(stanza)
  }
}
