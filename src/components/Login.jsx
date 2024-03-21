import { Input, Button, useDisclosure } from "@nextui-org/react";
import { useContext, useState } from "react";
import { SupaContext } from "../Context/SupaContext";
import { RowContext } from "../Context/Rowcontext";
import { useNavigate } from "react-router-dom";
import { Dialog } from "./Dialog";

const Login = () => {
  const { supabase } = useContext(SupaContext);
  const { row, setRow } = useContext(RowContext);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.warn("Přihlášení selhalo");
        return (
          <Dialog
            text="Neplatné přihlašovací údaje"
            isOpen={isOpen}
            onClose={onClose}
          />
        );
      }

      if (data.user && data.session) {
        console.log("Uživatel přihlášen", data.user);
        navigate("/home");
      }
    } catch (error) {
      console.warn("Přihlášení selhalo");
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
          isClearable
          className="max-w-sm mb-2"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></Input>
        <Input
          type="password"
          label="Zadej heslo"
          labelPlacement="inside"
          isClearable
          className="max-w-sm mb-2"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></Input>

        <Button onClick={handleLogin} className="max-w-xs mb-2">
          Přihlásit
        </Button>
      </form>
    </div>
  );
};

export default Login;
