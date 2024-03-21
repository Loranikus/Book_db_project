import { Input, Button, useDisclosure } from "@nextui-org/react";
import { useContext, useState } from "react";
import { SupaContext } from "../Context/SupaContext";
import { RowContext } from "../Context/Rowcontext";
import { useNavigate } from "react-router-dom";
import Dialog from "./Dialog";

const Login = () => {
  const { supabase } = useContext(SupaContext);
  const { row, setRow } = useContext(RowContext);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [mess, setMess] = useState(null);
  const [redir, setRedir] = useState(null)

  const handleRedirect = () => {
    onClose();
    navigate(redir);
  };

  const handleLogin = async (e) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.warn("Přihlášení selhalo");
        setMess("Neplatné přihlašovací údaje");
        setRedir("/")
        onOpen();
        return;
      }

      if (data.user && data.session) {
        console.log("Uživatel přihlášen", data.user);
        setMess("Příhlášení úspěšné")
        setRedir("/home")
        onOpen()
      }
    } catch (error) {
      console.warn("Přihlášení selhalo");
      setMess("Přihlášení selhalo");
      onOpen();
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col flex-wrap w-full items-center h-full">
      <form className="flex flex-col items-center">
        <Input
          type="email"
          label="Vyplň email"
          labelPlacement="inside"
          placeholder="123@priklad.cz"
          className="max-w-sm mb-2"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></Input>
        <Input
          type="password"
          label="Zadej heslo"
          labelPlacement="inside"
          className="max-w-sm mb-2"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></Input>

        <Button onClick={handleLogin} className="max-w-xs mb-2">
          Přihlásit
        </Button>
      </form>
      <Dialog text={mess} isOpen={isOpen} onClose={handleRedirect} />
    </div>
  );
};

export default Login;
