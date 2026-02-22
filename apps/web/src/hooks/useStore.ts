import { useParams } from "react-router";
import { useData } from "../contexts/data/useData";

export const useStore = () => {
  const { stores } = useData();
  const { storeId } = useParams();

  const store = stores?.find((store) => store.slug === storeId);

  return { store };
};
