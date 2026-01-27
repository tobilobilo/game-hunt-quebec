import Button from "../../ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useStore } from "../../../hooks/useStore";
import { faArrowPointer, faDiamondTurnRight } from "@fortawesome/free-solid-svg-icons";
import { getAddress } from "../../../utils/store";

const Ctas = () => {
  const { t } = useTranslation();
  const { store } = useStore();


  return (
    <>
      <div className="store-ctas">
        {store?.website && <>
          <Button href={store.website} textKey={t("stores.ctas.website")} icon={faArrowPointer} size="btn-sm" external={true} />
        </>}
        {getAddress(store) && <>
          <Button href={`https://www.google.com/maps/dir/?api=1&destination=${getAddress(store)}`} textKey={t("stores.ctas.directions")} icon={faDiamondTurnRight} size="btn-sm" external={true} />
        </>}
      </div>
    </>
  );   
};

export default Ctas;