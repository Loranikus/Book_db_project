import { Input, Button, useDisclosure } from "@nextui-org/react";
import { useContext, useState } from "react";
import { SupaContext } from "../Context/SupaContext";
import Dialog from "./Dialog";

const Registration = () => {
  const { supabase } = useContext(SupaContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mess, setMess] = useState(null);
  const { onOpen, isOpen, onClose } = useDisclosure();

  const handleRegistration = async (e) => {
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });

      if (error) {
        setMess("Při vytváření uživatele došlo k chybě");
      } else {
        setEmail("");
        setPassword("");
        setMess(
          "Uživatel vytvořen, počkej na potvrzovací e-mail, který dorazí za chvíli"
        );
        console.log("Uživatel vytvořen");
      }
    } catch (error) {
      setMess("Registrace neúspěšná");
    }
  };

  return (
    <>
      <form className="flex flex-col flex-wrap w-full items-center h-full">
        <Input
          type="email"
          label="Vyplň email"
          labelPlacement="inside"
          placeholder="123@priklad.cz"
          isClearable
          className="max-w-xs mb-2"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></Input>
        <Input
          type="password"
          label="Zadej heslo"
          labelPlacement="inside"
          isClearable
          className="max-w-xs mb-2"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></Input>
        <Button onClick={handleRegistration} className="max-w-xs mb-2">
          Registrovat
        </Button>
      </form>
      <Dialog text={mess} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Registration;
