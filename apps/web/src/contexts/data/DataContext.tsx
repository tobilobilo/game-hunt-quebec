import { createContext } from "react";
import { Store } from "../../types/store";
import { Places } from "../../types/places";
import { Event as EventType } from "../../types/event";

type DataContextType = {
  stores: Store[];
  places: Places | null;
  events: EventType[];
  loading: boolean;
  error: string | null;
};

export const DataContext = createContext<DataContextType | undefined>(undefined);
