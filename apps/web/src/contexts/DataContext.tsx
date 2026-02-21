import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Store } from "../types/store";
import { Places } from "../types/places";
import { Event as EventType } from "../types/event";
import { basename } from "../utils/path";

type DataContextType = {
  stores: Store[];
  places: Places | null;
  events: EventType[];
  loading: boolean;
  error: string | null;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [stores, setStores] = useState<Store[]>([]);
  const [places, setPlaces] = useState<Places | null>(null);
  const [events, setEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (dataType: string, filename: string, errorMessage: string) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(basename().concat('/data/', filename));
      if (!res.ok) throw new Error(errorMessage);
      const data = await res.json();
      setData(dataType, data);
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const setData = (dataType: string, data: any) => {
    switch (dataType) {
      case 'stores':
        setStores(data);
        break;
      case 'places':
        setPlaces(data);
        break;
      case 'events':
        setEvents(data);
        break;
      default:
        console.warn(`Unknown data type: ${dataType}`);
    }
  };

  useEffect(() => {  
    fetchData('stores', 'stores.json', 'Failed to fetch store data');
    fetchData('places', 'places.json', 'Failed to fetch places data');
    fetchData('events', 'events.json', 'Failed to fetch events data');
  }, []);

  return (
    <DataContext.Provider value={{ stores, places, events, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within DataProvider');
  return context;
};