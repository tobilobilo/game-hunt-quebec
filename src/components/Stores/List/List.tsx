import Masonry from 'react-masonry-css';
import "./List.scss";
import { useData } from '../../../contexts/DataContext';
import ListStore from './ListStore/ListStore';

const List = () => {
  const { stores, loading } = useData();

  const breakpointCols = {
    default: 7,
    1700: 6,
    1400: 5,
    1100: 4,
    800: 3,
    600: 2,
  };

  return (
    <div id="list">
      <Masonry
        breakpointCols={breakpointCols}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        <section className="mansonry-brick">
          <h2>RealStores</h2>
          <ul>
            {stores && stores.map(store => (
              <li><ListStore store={store} /></li>
            ))}
          </ul>
        </section>

        <section className="mansonry-brick">
          <h2>Abery</h2>
          <ul>
            <li><a>Walmart gers gs hesrh h hrjhshedsrhrd hgs hsr</a></li>
            <li><a>Walmart</a></li>
            <li><button>Target</button></li>
            <li><button>Target</button></li>
            <li><button>Best Buy</button></li>
            <li><button>Best Buy</button></li>
            <li><button>Best Buy</button></li>
          </ul>
        </section>

        <section className="mansonry-brick">
          <h2>Cameron</h2>
          <ul>
            <li><button>Canadian Tire</button></li>
            <li><button>Hudson's Bay</button></li>
            <li><button>RBC Store</button></li>
          </ul>
        </section>

        <section className="mansonry-brick">
          <h2>Foudra</h2>
          <ul>
            <li><button>Walmart</button></li>
            <li><button>Walmart</button></li>
            <li><button>Target</button></li>
            <li><button>Target</button></li>
            <li><button>Best Buy</button></li>
            <li><button>Best Buy</button></li>
          </ul>
        </section>

        <section className="mansonry-brick">
          <h2>Montréal</h2>
          <ul>
            <li><button>Canadian Tire</button></li>
            <li><button>Hudson's Bay</button></li>
            <li><button>Hudson's Bay</button></li>
            <li><button>Hudson's Bay</button></li>
            <li><button>Hudson's Bay</button></li>
            <li><button>RBC Store</button></li>
          </ul>
        </section>

        <section className="mansonry-brick">
          <h2>Portus</h2>
          <ul>
            <li><button>Walmart</button></li>
            <li><button>Target</button></li>
            <li><button>Best Buy</button></li>
          </ul>
        </section>

        <section className="mansonry-brick">
          <h2>Sapone</h2>
          <ul>
            <li><button>Canadian Tire</button></li>
            <li><button>Hudson's Bay</button></li>
            <li><button>RBC Store</button></li>
          </ul>
        </section>

        <section className="mansonry-brick">
          <h2>Terevar</h2>
          <ul>
            <li><button>Walmart</button></li>
            <li><button>Target</button></li>
            <li><button>Target</button></li>
            <li><button>Target</button></li>
            <li><button>Target</button></li>
            <li><button>Best Buy</button></li>
          </ul>
        </section>

        <section className="mansonry-brick">
          <h2>Yuza</h2>
          <ul>
            <li><button>Canadian Tire</button></li>
            <li><button>Hudson's Bay</button></li>
            <li><button>RBC Store</button></li>
          </ul>
        </section>
      </Masonry>
    </div>
  );
};

export default List;