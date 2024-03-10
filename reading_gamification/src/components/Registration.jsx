import { Input, Button } from "@nextui-org/react";
import { useContext, useState } from "react";
import { SupaContext } from "../Context";

const Registration = () => {
  const { supabase } = useContext(SupaContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async (e) => {
    await supabase.auth.signUp({ email, password });
    setEmail("");
    setPassword("");
    console.log("Uživatel vytvořen")
  };

  return (
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
  );
};

export default Registration;
