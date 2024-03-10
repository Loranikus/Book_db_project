import { Input, Button } from "@nextui-org/react";
import { useContext, useState } from "react";
import { SupaContext } from "../Context";

const Login = () => {
  const { supabase } = useContext(SupaContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.warn("Přihlášení selhalo");
      }

      if (data.user && data.session) {
        console.log("Uživatel přihlášen", data.user);
      }
    } catch (error) {
      console.warn("Přihlášení selhalo");
    }
    setEmail("");
    setPassword("");
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
      <Button onClick={handleLogin} className="max-w-xs mb-2">
        Přihlásit
      </Button>
    </form>
  );
};

export default Login;
