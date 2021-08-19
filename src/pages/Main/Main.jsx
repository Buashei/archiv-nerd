import React from "react";
import styles from "./Main.module.scss";

import CardRow from "../../components/CardRow/";

const Main = () => {
  return (
    <div className={styles.main_wrapper}>
      <CardRow />
    </div>
  );
};

export default Main;
