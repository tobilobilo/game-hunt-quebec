import Masonry from "react-masonry-css";
import "./List.scss";
import { useData } from "../../../contexts/data/useData";
import { getLabel } from "../../../utils/label";
import i18next from "i18next";
import ListBrick from "./ListBrick";

const List = () => {
  const { stores, places } = useData();

  const breakpointCols = {
    default: 7,
    1700: 6,
    1400: 5,
    1100: 4,
    800: 3,
    600: 2,
  };

  const masonryProps = {
    breakpointCols,
    className: "masonry-grid",
    columnClassName: "masonry-grid_column",
  };

  const orderedQcZones = places?.zones["QC"].sort((a, b) =>
    a.name.localeCompare(b.name),
  );
  const storesQc = stores
    ?.filter((store) => store?.address?.region === "QC")
    .sort((a, b) => a.name.localeCompare(b.name));

  const orderedCanRegions = places?.regions["CA"]
    .filter((region) => region.code !== "QC")
    .sort((a, b) =>
      getLabel(a.name, i18next.language).localeCompare(
        getLabel(b.name, i18next.language),
      ),
    );
  const storesCan = stores
    ?.filter((store) => {
      return (
        store?.address?.country == "CA" &&
        store?.address?.region &&
        store?.address?.region !== "QC"
      );
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const orderedUsRegions = places?.regions["US"].sort((a, b) =>
    getLabel(a.name, i18next.language).localeCompare(
      getLabel(b.name, i18next.language),
    ),
  );
  const storesUs = stores
    ?.filter((store) => store?.address?.country == "US")
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div id="list">
      <Masonry {...masonryProps}>
        {
          // Quebec
          orderedQcZones &&
            orderedQcZones.map((zone, index) => {
              const storesInZone = storesQc?.filter(
                (store) => store.address.zone === zone.code,
              );
              return (
                storesQc &&
                storesInZone &&
                storesInZone.length > 0 && (
                  <ListBrick
                    name={zone.name}
                    stores={storesQc?.filter(
                      (store) => store.address.zone === zone.code,
                    )}
                    key={`brick-1-${index}`}
                  />
                )
              );
            })
        }
      </Masonry>

      {storesCan && storesCan.length > 0 && (
        <div className="list-section">
          <h3>{i18next.t("stores.list.elsewhere_canada")}</h3>
          <Masonry {...masonryProps}>
            {
              // Other provinces
              orderedCanRegions &&
                orderedCanRegions.map((region, index) => {
                  const storesInRegion = storesCan?.filter(
                    (store) => store?.address?.region === region.code,
                  );
                  return (
                    storesInRegion &&
                    storesInRegion.length > 0 && (
                      <ListBrick
                        name={getLabel(region?.name, i18next.language)}
                        stores={storesInRegion}
                        key={`brick-2-${index}`}
                      />
                    )
                  );
                })
            }
          </Masonry>
        </div>
      )}

      {storesUs && storesUs.length > 0 && (
        <div className="list-section">
          <h3>{i18next.t("stores.list.elsewhere_usa")}</h3>
          <Masonry {...masonryProps}>
            {
              // In USA
              orderedUsRegions &&
                orderedUsRegions.map((region, index) => {
                  const storesInRegion = storesUs?.filter(
                    (store) => store?.address?.region === region.code,
                  );
                  return (
                    storesInRegion &&
                    storesInRegion.length > 0 && (
                      <ListBrick
                        name={getLabel(region?.name, i18next.language)}
                        stores={storesInRegion}
                        key={`brick-3-${index}`}
                      />
                    )
                  );
                })
            }
          </Masonry>
        </div>
      )}
    </div>
  );
};

export default List;
