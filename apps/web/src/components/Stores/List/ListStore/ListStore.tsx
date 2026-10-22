import "./ListStore.scss";
import { Link } from "react-router";
import { useAppNavigation } from "../../../../hooks/useNavigation";
import { Store } from "../../../../types/store";

interface ListStore {
  store: Store;
}

const ListStore = ({ store }: ListStore) => {
  const { getStorePath } = useAppNavigation();

  const href = getStorePath(store.slug);

  return <Link to={href}>{store.name}</Link>;
};

export default ListStore;
