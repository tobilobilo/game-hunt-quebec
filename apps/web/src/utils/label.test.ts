import { describe, it, expect } from "vitest";
import { getLabel } from "./label";
import { Label } from "../types/label";

const sample = { fr: "Salut", en: "Hello" } as Label;

describe("getLabel", () => {
  it("returns locale specific label when available", () => {
    expect(getLabel(sample, "en")).toBe("Hello");
  });

  it("falls back to fr when locale missing", () => {
    expect(getLabel(sample, "es")).toBe("Salut");
  });

  it("falls back to fr when locale undefined", () => {
    expect(getLabel(sample, undefined)).toBe("Salut");
  });
});
