import React, { useEffect } from "react";
import { FeaturesEntity } from "../fetch/data";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import dayjs from "dayjs";

interface Props {
  title: string;
  features: FeaturesEntity[];
  setPageTitle: (title: string) => void;
}

const Home: React.FC<Props> = ({ title, features, setPageTitle }) => {
  useEffect(() => {
    setPageTitle(title);
  }, [setPageTitle, title]);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Place</th>
          <th>Magnitude</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {features.map((item) => (
          <tr key={item.id}>
            <td className={styles.placeColumn}>
              <Link to={`/details/${item.id}`}>{item.properties.place}</Link>
            </td>
            <td className={styles.magColumn}>{item.properties.mag}</td>
            <td>
              {dayjs(item.properties.time).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Home;
