// @flow
export type Chord = string

export type Segment = {
  chords: Chord[],
  text: string
}

export type Line = Segment[]

export type StanzaType = "verse" | "pre-chorus" | "chorus" | "bridge"

export type Stanza = {
  type: StanzaType,
  id?: number,
  lines: Line[]
}

export type MetaData = {
  title: string,
  artists: string[],
  capo: number
}

export type Song = MetaData & {
  raw: string,
  stanzas: Stanza[]
}
