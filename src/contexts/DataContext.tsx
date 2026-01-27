import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Store } from "../types/store";
import { Places } from "../types/places";

type DataContextType = {
  stores: Store[] | null;
  places: Places | null;
  loading: boolean;
  error: string | null;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [stores, setStores] = useState<Store[] | null>(null);
  const [places, setPlaces] = useState<Places | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('/data/stores.json');
        if (!res.ok) throw new Error('Failed to fetch store data');
        const data: Store[] = await res.json();
        setStores(data);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    const fetchPlaces = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('/data/places.json');
        if (!res.ok) throw new Error('Failed to fetch places data');
        const data: Places = await res.json();
        setPlaces(data);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
  
    fetchStores();
    fetchPlaces();
  }, []);

  return (
    <DataContext.Provider value={{ stores, places, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within DataProvider');
  return context;
};