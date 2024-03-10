import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

const Navigation = () => {
  return (
    <>
      <Navbar className="flex">
        <NavbarContent className="flex justify-end" >
          <NavbarItem>
            <Link href="/" color="foreground" isBlock>Domů</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/search" color="foreground" isBlock>Vyhledávač</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/login" color="foreground" isBlock>Přihlášení</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/registration" color="foreground" isBlock>Registrace</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Navigation;
