import React, { useContext } from "react";
import { Delete } from "../assets/icons/Delete";
import { Read } from "../assets/icons/Read";
import { Cart } from "../assets/icons/Cart";
import { Tick } from "../assets/icons/Tick";
import { Button, Tooltip } from "@nextui-org/react";
import { SupaContext } from "../Context/SupaContext";
import { DbUpdateContext } from "../Context/DbUpdateContext";

const ButtonSet = ({ item }) => {
  const { supabase, setDel } = useContext(SupaContext);
  const {updateDb} = useContext(DbUpdateContext)
  const handleDelete = async (key) => {
    try {
      const { error } = await supabase.from("bookList").delete().eq("key", key);
    } catch (error) {
      console.error("Nepodařilo se smazat řádek");
    }
    setDel(true);
  };

  const handleRead = async (key, read) => {
    try {
      const { error } = await supabase
        .from("bookList")
        .update({ readlist: !read })
        .eq("key", key);
    } catch (error) {
      console.error("Kniha nebyla přidána do seznamu přečtených");
    }
    updateDb();
  };

  const handleOwn = async (key, own) => {
    try {
      const { error } = await supabase
        .from("bookList")
        .update({ bought: !own, wishlist: false })
        .eq("key", key);
    } catch (error) {
      console.error("Kniha nebyla přidána do seznamu vlastněných");
    }
    updateDb();
  };

  const handleWish = async (key, wish, bought) => {
    try {
      if (bought) {
        console.warn("Tuto kniho již vlastníš!");
        return;
      }
      const { error } = await supabase
        .from("bookList")
        .update({ wishlist: !wish })
        .eq("key", key);
    } catch (error) {
      console.error("Kniha nebyla přidána do seznamu přání");
    }
    updateDb();
  };

  return (
    <>
      <li className="inline-block">
        <Tooltip showArrow={true} content="Chci si koupit">
          <Button
            isIconOnly
            color="none"
            aria-label="wishlist"
            disableRipple
            onClick={() => handleWish(item.key, item.wishlist, item.bought)}
          >
            <Cart />
          </Button>
        </Tooltip>
      </li>
      <li className="inline-block">
        <Tooltip showArrow={true} content="Vlastním">
          <Button
            isIconOnly
            color="none"
            aria-label="owned"
            disableRipple
            onClick={() => handleOwn(item.key, item.bought)}
          >
            <Tick />
          </Button>
        </Tooltip>
      </li>
      <li className="inline-block">
        <Tooltip showArrow={true} content="Označit jako přečtené">
          <Button
            isIconOnly
            color="none"
            aria-label="mark as read"
            disableRipple
            onClick={() => handleRead(item.key, item.readlist)}
          >
            <Read />
          </Button>
        </Tooltip>
      </li>
      <li className="inline-block">
        <Tooltip showArrow={true} content="Smazat řádek">
          <Button
            isIconOnly
            color="none"
            aria-label="delete"
            disableRipple
            onClick={() => handleDelete(item.key)}
          >
            <Delete />
          </Button>
        </Tooltip>
      </li>
    </>
  );
};

export default ButtonSet;
