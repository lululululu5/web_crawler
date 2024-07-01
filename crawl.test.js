import { normalizeURL, getURLsFromHTML } from "./crawl.js";
import { test, expect } from "@jest/globals";

test("cleans protocol from url", () => {
  expect(normalizeURL("https://blog.boot.dev/path")).toBe("blog.boot.dev/path");
});

test("cleans trailing / from url", () => {
  expect(normalizeURL("blog.boot.dev/path/")).toBe("blog.boot.dev/path");
});

test("Check for empty html document", () => {
  expect(getURLsFromHTML("", "https://boot.dev")).toBe(null);
});

test("finds all a-tags in html document", () => {
  expect(
    getURLsFromHTML(
      `<a href="https://boot.dev">Learn Backend Development</a>`,
      "https://boot.dev"
    )
  ).toEqual(["boot.dev"]);
});

test("add multiple a-tags", () => {
  expect(
    getURLsFromHTML(
      `<a href="https://boot.dev">Learn Backend Development</a> yada yada <a href="https://booty.dev">Learn Backend Development</a>`,
      "https://boot.dev"
    )
  ).toEqual(["boot.dev", "booty.dev"]);
});

test("handles relative URLs", () => {
  expect(
    getURLsFromHTML(
      `<a href="/relative/path">Relative Path</a>`,
      "https://boot.dev"
    )
  ).toEqual(["boot.dev/relative/path"]);
});
