// @flow

export type Chord = string;

export type Segment = {
  chords: Chord[],
  text: string
};

export type Line = Segment[];

export type Stanza = {
  type: "verse" | "pre-chorus" | "chorus" | "bridge",
  lines: Line[]
};

export type Song = {
  title?: string,
  artist?: string,
  raw: string,
  stanzas: Stanza[]
};

export const fromString = (raw: string): Song => ({
  raw,
  stanzas: []
});
