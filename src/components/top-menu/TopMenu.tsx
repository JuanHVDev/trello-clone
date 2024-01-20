import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react"

export default function TopMenu()
{
  return (
    <Navbar position="static" isBlurred isBordered>
      <NavbarBrand>
        <p className="font-bold text-3xl text-inherit">Kanban Zen</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="primary" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/boards" color="primary">
            Boards
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
