import React, { useRef } from "react";
import styles from "./CardRow.module.scss";

import Card from "./Card";

const CardRow = () => {
  const wrapperRef = useRef(null);

  const handleOnScroll = (e) => {
    const scrollWidth = wrapperRef.current.scrollWidth;
    if (e.deltaY > 0) wrapperRef.current.scrollLeft += scrollWidth / 10;
    else wrapperRef.current.scrollLeft -= scrollWidth / 10;
  };

  return (
    <div
      className={styles.cardRow_wrapper}
      ref={wrapperRef}
      onWheel={handleOnScroll}
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardRow;
