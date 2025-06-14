import { useEffect, useRef, useState } from "react";
import { t } from "i18next";
import List from "../List/List";
import Map from "../Map/Map";
import Store from "../Store/Store";
import "./Container.scss";
import { faListUl, faLocationDot, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useData } from "../../../contexts/DataContext";

const StoreContainer = () => {
  const { loading } = useData();
  const [view, setView] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const enableFocusOnTabs = useRef(false);

  const tabs = [
    {
      id: 0,
      label: 'stores.navtab.map',
      icon: <FontAwesomeIcon icon={faLocationDot} />,
      component: <Map />
    },
    {
      id: 1,
      label: 'stores.navtab.list',
      icon: <FontAwesomeIcon icon={faListUl} />,
      component: <List />
    }
  ];

  function handleKeyDown(event:any) {
    enableFocusOnTabs.current = true;

    if (event.key === 'ArrowRight') {
      setView((prevIndex) => (prevIndex + 1) % tabs.length);
    } else if (event.key === 'ArrowLeft') {
      setView((prevIndex) => (prevIndex - 1 + tabs.length) % tabs.length);
    }
  }

  useEffect(() => {
    if (tabRefs.current[view] && enableFocusOnTabs.current) {
      tabRefs.current[view].focus();
    }
  }, [view]);

  return (
    <div className="stores-wrapper col-12">
      <div className="stores-container">
        <nav className="nav-tab" role="tablist" aria-label={t('stores.navtab.labeling')}>
          <ul>
            {
              tabs.map((tab, index) => (
                <li key={tab.id}>
                  <button id={`tabnav-${index}`} role="tab" aria-selected={view === index} aria-controls={`panel-${index}`} tabIndex={view === index ? 0 : -1} 
                    onClick={() => {setView(index)}} onKeyDown={(event) => handleKeyDown(event)} ref={(el) => (tabRefs.current[index] = el)}>
                      <i aria-hidden="true">{tab.icon}</i> {t(tab.label)}
                      </button>
                </li>
              ))
            }
          </ul>
        </nav>
        
        <div className="stores-content" >
          {loading && <FontAwesomeIcon icon={faSpinner} className="store-loader" />}
          {!loading &&
            tabs.map((tab, index) => (
              view === index ? (
                <div key={tab.id} id={`tabpanel-${index}`} role="tabpanel" aria-labelledby={`tabnav-${index}`}>{tab.component}</div>
              ) : null
            ))
          }

          <Store />
        </div>
      </div>
    </div>
  );
};

export default StoreContainer;
