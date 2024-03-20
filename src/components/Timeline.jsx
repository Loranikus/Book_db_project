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
  const [isLoading, setIsLoading] = useState(true);


  const loadData = async () => {
    try {
      const { data, error } = await supabase.from("bookList").select();
      if (error) {
        console.error("Error fetching data from Supabase:", error.message);
      } else {
        setRow(data || []); 
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data from Supabase:", error.message);
    }
  };

  useEffect(() => {
    if (auth) {
      loadData();
    }
  }, [auth, supabase, updateDb]);

  useEffect(() => {

    if (row.length > 0) {
      setIsLoading(false);
    }
  }, [row]);

  const sortedRow = [...row].sort((a, b) => {
    const dateA = new Date(a.published);
    const dateB = new Date(b.published);
    return dateA - dateB;
  });

  const items = sortedRow.map((item) => ({
    id: item.key,
    title: item.published,
    cardTitle: item.book,
    cardSubtitle: item.author,
    cardDetailedText: item.desc,
    url: item.link,
  }));

  return (
    <div className="mt-2 flex flex-wrap w-full justify-center" >
      <Card>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            itemWidth={150}
            disableToolbar={true}
          />
        )}
      </Card>
    </div>
  );
};

export default Timeline;
