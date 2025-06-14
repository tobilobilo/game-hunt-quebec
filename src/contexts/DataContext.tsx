import { LatLngExpression } from "leaflet";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Store = {
  name: string,
  slug: string,
  position: LatLngExpression,
};

type DataContextType = {
  stores: Store[] | null;
  loading: boolean;
  error: string | null;
};


const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [stores, setStores] = useState<Store[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    /* const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('/api/me'); // <- Replace with your endpoint
        if (!res.ok) throw new Error('Failed to fetch user');
        const data: User = await res.json();
        setUser(data);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
  
    fetchUser(); */

    const tempStores: Store[] = [
    {
      name: "Retro MTL",
      slug: "retro-mtl",
      position: [45.5520502, -73.5513515]
    },
    {
      name: "Coin Game Over (Le)",
      slug: "coin-game-over",
      position: [45.500548,-73.426426]
    }
  ];

    setTimeout(() => { // fake loading
      setLoading(false);
      setStores(tempStores);
    }, 2000);
  }, []);

  return (
    <DataContext.Provider value={{ stores, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within DataProvider');
  return context;
};