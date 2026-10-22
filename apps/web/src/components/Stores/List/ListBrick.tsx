import { Store } from "../../../types/store";
import ListStore from "./ListStore/ListStore";

interface ListBrick {
  name: string;
  stores: Store[];
}

const ListBrick = ({ name, stores }: ListBrick) => {
  return (
    <section className="mansonry-brick">
      <h2>{name}</h2>
      <ul>
        {stores?.map((store) => (
          <li key={`store-list-${store.slug}`}>
            <ListStore store={store} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ListBrick;
