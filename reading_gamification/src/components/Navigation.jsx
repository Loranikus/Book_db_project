import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useContext } from "react";
import { SupaContext } from "../Context/SupaContext";
import { RowContext } from "../Context/Rowcontext";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const {auth} = useContext(AuthContext)
  const { supabase } = useContext(SupaContext);
  const {row, setRow} = useContext(RowContext);
  const navigate = useNavigate()
  
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error("Odhlášení selhalo");
      } else {
        console.log("Uživatel byl odhlášen");
        setRow([]);
        navigate("/")
      }
    } catch (error) {
      console.error("Odhlášení selhalo", error.message);
    }
  };
  return (
    <>
      <Navbar className="flex">
        <NavbarContent className="flex justify-end">
          <NavbarItem>
            <Link href={auth ? "/home" : "/"} color="foreground" isBlock>
              Domů
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/login" color="foreground" isBlock>
              Přihlášení
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/registration" color="foreground" isBlock>
              Registrace
            </Link>
          </NavbarItem>
        </NavbarContent>
        <Button isDisabled={!auth} onClick={handleLogout} className="max-w-xs mb-2">
          Odhlásit
        </Button>
      </Navbar>
    </>
  );
};

export default Navigation;
