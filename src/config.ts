// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Recrush I/O";
export const SITE_DESCRIPTION =
  "Once upon a time, optimizing a system meant that you had to become an expert and possibly require years of training and learning from mistakes. Now. let's change the game, just make the right choice.";
export const TWITTER_HANDLE = "@recrushio";
export const MY_NAME = "Recrush I/O";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
