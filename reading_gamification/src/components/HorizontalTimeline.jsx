import React, { useContext } from "react";
import { Chrono } from "react-chrono";
import { RowContext } from "../Context/Rowcontext";


const HorizontalTimeline = ({ row }) => {
    const items = row.map((item) => ({
    title: item.published,
    cardTitle: item.book,
    cardSubtitle: item.author,
  }));

  return <Chrono items={items} mode="HORIZONTAL" itemWidth={150} showSingle cardHeight={100}/>;
};

export default HorizontalTimeline;
