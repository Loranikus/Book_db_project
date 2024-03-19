import React, { useContext, useState, useEffect } from "react";
import { Chrono } from "react-chrono";
import { RowContext } from "../Context/Rowcontext";
import { SupaContext } from "../Context/SupaContext";
import { DbUpdateContext } from "../Context/DbUpdateContext";
import { AuthContext } from "../Context/AuthContext";
import { Card } from "@nextui-org/react";

const Timeline = () => {
  const { auth } = useContext(AuthContext);
  const { updateDb } = useContext(DbUpdateContext);
  const { supabase } = useContext(SupaContext);
  const { row, setRow } = useContext(RowContext);
  const [tmlItems, setTmlItems] = useState([]);

  const loadData = async () => {
    try {
      const { data, error } = await supabase.from("bookList").select();
      if (error) {
        console.error("Error fetching data from Supabase:", error.message);
      } else {
        setRow(data);
      }
    } catch (error) {
      console.error("Error fetching data from Supabase:", error.message);
    }
  };

  useEffect(() => {
    if (auth === true) {
      loadData();
    }
  }, [auth, supabase, updateDb]);

  useEffect(() => {
    if (row.length > 0) {
      setTmlItems((prevItems) => [...prevItems, row]);
    }
  }, [row]);

  const items = tmlItems.map((item) => ({
    id: item.key,
    title: item.published,
    cardTitle: item.book,
    cardSubtitle: item.author,
    cardDetailedText: item.desc,
    url: item.link,
  }));
  console.log(items);
  return (
    <div className="mt-2 flex flex-wrap w-full justify-center">
      <Card>
        <Chrono items={items} mode="VERTICAL_ALTERNATING" itemWidth={150} />
      </Card>
    </div>
  );
};

export default Timeline;
