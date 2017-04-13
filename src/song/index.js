// @flow

export type Song = { raw: string };

export const fromString = (raw: string): Song => ({
  raw
});
