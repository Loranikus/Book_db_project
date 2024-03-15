import React, { useContext, useState } from "react";
import { Delete } from "../assets/icons/Delete";
import { Read } from "../assets/icons/Read";
import { Cart } from "../assets/icons/Cart";
import { Tick } from "../assets/icons/Tick";
import { Button, Tooltip, useDisclosure } from "@nextui-org/react";
import { SupaContext } from "../Context/SupaContext";
import { DbUpdateContext } from "../Context/DbUpdateContext";
import Notif from "./Notif";

const ButtonSet = ({ item, loadData }) => {
  const { supabase } = useContext(SupaContext);
  const { updateDb } = useContext(DbUpdateContext);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [del, setDel] = useState(false)

  const handleDelete = async (key) => {
    try {
      const { error } = await supabase.from("bookList").delete().eq("key", key);
    if(!error) {
      setDel(true)
      loadData()
    } else {
      console.error("Chyba při mazání", error.message)
    }
  } catch (error){
    console.error("Chyba při mazání", error.message)
  }
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
            onClick={() => {
              handleWish(item.key, item.wishlist, item.bought);
              onOpen();
            }}
          >
            <Cart />
          </Button>
        </Tooltip>
        <Notif isOpen={isOpen} onClose={onClose} list={item.wishlist} />
      </li>
      <li className="inline-block">
        <Tooltip showArrow={true} content="Vlastním">
          <Button
            isIconOnly
            color="none"
            aria-label="owned"
            disableRipple
            onClick={() => {
              handleOwn(item.key, item.bought);
              onOpen();
            }}
          >
            <Tick />
          </Button>
        </Tooltip>
        <Notif isOpen={isOpen} onClose={onClose} list={item.bought} />
      </li>
      <li className="inline-block">
        <Tooltip showArrow={true} content="Označit jako přečtené">
          <Button
            isIconOnly
            color="none"
            aria-label="mark as read"
            disableRipple
            onClick={() => {
              handleRead(item.key, item.readlist);
              onOpen();
            }}
          >
            <Read />
          </Button>
        </Tooltip>
        <Notif isOpen={isOpen} onClose={onClose} list={item.read} />
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
