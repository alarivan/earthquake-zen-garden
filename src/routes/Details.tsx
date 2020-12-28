import React, { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import styles from "./Details.module.css";
import FlexRow from "../components/FlexRow";
import { FeaturesEntity } from "../fetch/data";

interface Props {
  features: FeaturesEntity[];
  setPageTitle: (title: string) => void;
}
interface DetailsParams {
  featureId: string;
}

const Details: React.FC<Props> = ({ features, setPageTitle }) => {
  const { featureId } = useParams<DetailsParams>();
  const feature = features.find(({ id }) => id === featureId);

  useEffect(() => {
    if (feature) {
      setPageTitle(feature.properties.title);
    }
  }, [setPageTitle, feature]);

  if (!feature) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.container}>
      <FlexRow title="Place" value={feature.properties.place} />
      <FlexRow title="Magnitude" value={feature.properties.mag} />
      <FlexRow title="time" value={feature.properties.time} />
      <FlexRow title="status" value={feature.properties.status} />
      <FlexRow title="tsunami" value={feature.properties.tsunami} />
      <FlexRow title="type" value={feature.properties.type} />
    </div>
  );
};

export default Details;
