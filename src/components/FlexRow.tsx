import React from "react";
import styles from "./FlexRow.module.css";

interface Props {
  title: string;
  value: string | number;
}

const FlexRow: React.FC<Props> = ({ title, value }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

export default FlexRow;
