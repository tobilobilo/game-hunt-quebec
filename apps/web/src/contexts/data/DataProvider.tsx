import { ReactNode, useEffect, useState } from "react";
import { DataContext } from "./DataContext";
import { Store } from "../../types/store";
import { Places } from "../../types/places";
import { Event as EventType } from "../../types/event";
import { basename } from "../../utils/path";

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [stores, setStores] = useState<Store[]>([]);
  const [places, setPlaces] = useState<Places | null>(null);
  const [events, setEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const setData = (dataType: string, data: unknown) => {
    switch (dataType) {
      case "stores":
        setStores(data as Store[]);
        break;
      case "places":
        setPlaces(data as Places);
        break;
      case "events":
        setEvents(data as EventType[]);
        break;
      default:
        console.warn(`Unknown data type: ${dataType}`);
    }
  };

  useEffect(() => {
    const fetchData = async (
      dataType: string,
      filename: string,
      errorMessage: string,
    ) => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(basename().concat("/data/", filename));
        if (!res.ok) throw new Error(errorMessage);
        const data = await res.json();
        setData(dataType, data);
      } catch (err: unknown) {
        setError((err as Error).message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData("stores", "stores.json", "Failed to fetch store data");
    fetchData("places", "places.json", "Failed to fetch places data");
    fetchData("events", "events.json", "Failed to fetch events data");
  }, []);

  return (
    <DataContext.Provider value={{ stores, places, events, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
