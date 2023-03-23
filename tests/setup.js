import { cleanup } from "@testing-library/vue";
import matchers from "@testing-library/jest-dom/matchers"; // This file runs before tests run
import { expect, afterEach } from "vitest";

expect.extend(matchers); //configure additional matchers to be available
afterEach(() => {
  cleanup(); // Cleanup tests that have run so that don't affect subsequent tests
});
