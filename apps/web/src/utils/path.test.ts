import { describe, it, expect, vi } from "vitest";
import * as pathUtils from "./path";

describe("basename", () => {
  it("returns empty string in development", () => {
    vi.stubEnv("MODE", "development");

    expect(pathUtils.basename()).toBe("");
  });

  it("returns production base path", () => {
    vi.stubEnv("MODE", "production");

    expect(pathUtils.basename()).toBe("/game-hunt-quebec");
  });
});

describe("routerPath", () => {
  it("concatenates basename with path in production", () => {
    vi.stubEnv("MODE", "production");

    expect(pathUtils.routerPath("/stores")).toBe("/game-hunt-quebec/stores");
  });

  it("returns only path in development", () => {
    vi.stubEnv("MODE", "development");

    expect(pathUtils.routerPath("/stores")).toBe("/stores");
  });
});
