import { useState } from "react";
import "./Store.scss";
import { useTranslation } from "react-i18next";

const Store = () => {
  const { t } = useTranslation();
  const [showingStore, setShowingStore] = useState(true);

  function closeStore() {
    setShowingStore(false);
  }

  return (
    <>
      {showingStore && <div className="store-overlay">
        <div className="store-content">
          <button className="store-close" onClick={closeStore} aria-label={t("action.close")}>×</button>
          <img src="https://baconmockup.com/800/200" alt="placeholder" className="store-img" />
        </div>
      </div> }
    </>
  );
};

export default Store;