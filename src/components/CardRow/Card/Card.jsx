import React from "react";
import styles from "./Card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <div className={[styles.card_wrapper, styles.ripple].join(" ")}>
      <FontAwesomeIcon className={"fa-5x"} opacity="0.18" icon={faGamepad} />
      <p>Konsole</p>
    </div>
  );
};

export default Card;
