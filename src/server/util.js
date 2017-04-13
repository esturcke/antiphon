// @flow

/**
 * Endpoint definitions.
 */
export const ENDPOINTS = {
  SONGS: "/songs/",
  SONG: "/song/"
};

/**
 * Check if `id` is a valid song ID.
 */
export const valid = (id: string): boolean => !!id.length && !/\./.test(id);

/**
 * Get the URI for the song `id`
 */
export const uri = (id: string): string => `${ENDPOINTS.SONG}${id}`;
