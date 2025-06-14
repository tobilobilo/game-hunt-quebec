import { useMemo } from "react";
import "./ListStore.scss";
import { Link } from "react-router";
import { useAppNavigation } from "../../../../hooks/useNavigation";
import { useTranslation } from "react-i18next";

const ListStore = ({store}: any) => {
  //const { stores, loading } = useData();
  const { getStorePath } = useAppNavigation();
  const { i18n } = useTranslation();

  const href = useMemo(() => getStorePath(store.slug), [store.slug, i18n.language]);

  return (
    <Link to={href}>
      {store.name}
    </Link>
  );
};

export default ListStore;