// Internal
import { getFromEnv } from "../helpers/env";

export const MAX_LETTER_COUNT = 10;
export const MIN_LETTER_COUNT = 2;
export const NODE_ENV = getFromEnv("NODE_ENV") || "development";
export const HEADER_Y = 25;
export const IS_TEST = NODE_ENV === "test";
