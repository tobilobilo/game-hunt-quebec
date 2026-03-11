import { describe, it, expect } from "vitest";
import { getAddress } from "./store";
import { Store } from "../types/store";

describe("getAddress", () => {
  it("returns empty string when store is undefined", () => {
    expect(getAddress(undefined)).toBe("");
  });

  it("joins street, city and region when present", () => {
    const store = {
      address: { street: "123 Main", city: "Townsville", region: "QC" },
    } as Store;
    expect(getAddress(store)).toBe("123 Main, Townsville, QC");
  });

  it("skips missing parts and joins remaining", () => {
    const store = { address: { city: "Townsville" } } as Store;
    expect(getAddress(store)).toBe("Townsville");
  });
});
