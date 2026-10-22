import { renderHook } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DataContext } from "./DataContext";
import { useData } from "./useData";
import type { Store } from "../../types/store";
import type { Places } from "../../types/places";
import type { Event as EventType } from "../../types/event";

const mockContextValue = {
  stores: [] as Store[],
  places: null as Places | null,
  events: [] as EventType[],
  loading: false,
  error: null,
};

describe("useData", () => {
  it("returns context value when used within a DataProvider", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <DataContext.Provider value={mockContextValue}>
        {children}
      </DataContext.Provider>
    );

    const { result } = renderHook(() => useData(), { wrapper });

    expect(result.current).toBe(mockContextValue);
    expect(result.current.stores).toEqual([]);
    expect(result.current.places).toBeNull();
    expect(result.current.events).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it("throws when used outside of a DataProvider", () => {
    expect(() => renderHook(() => useData())).toThrow(
      "useData must be used within DataProvider",
    );
  });
});
