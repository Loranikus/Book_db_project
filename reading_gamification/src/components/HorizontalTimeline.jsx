import React, { useState, useContext } from "react";
import { Chrono } from "react-chrono";
import { RowContext } from "../Context/Rowcontext";

const HorizontalTimeline = () => {
  const { row } = useContext(RowContext);

  const timelineItems = [];

  row.forEach((item) => {
    const timelineItem = {
      title: item.published,
      cardTitle: item.book,
      cardSubtitle: item.author,
    };
  });
  return (
    <>
      <Chrono
        items={timelineItems}
        mode="HORIZONTAL"
        itemWidth={150}
        showSingle
      />
    </>
  );
};

export default HorizontalTimeline;
