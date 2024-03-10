import { Input, Button } from "@nextui-org/react";
import { useContext, useState } from "react";
import { SupaContext } from "../Context/SupaContext";
import { RowContext } from "../Context/Rowcontext";

const Login = () => {
  const { supabase } = useContext(SupaContext);
  const {row, setRow} = useContext(RowContext)
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
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error("Odhlášení selhalo");
      } else {
        console.log("Uživatel byl odhlášen")
        setRow([]);
      }
    } catch (error) {
      console.error("Odhlášení selhalo", error.message);
    }
  };
  return (
    <div className="flex flex-col flex-wrap w-full items-center h-full">
      <form>
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
      <Button onClick={handleLogout} className="max-w-xs mb-2">
        Odhlásit
      </Button>
    </div>
  );
};

export default Login;
