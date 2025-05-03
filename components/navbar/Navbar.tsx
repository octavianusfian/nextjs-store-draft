import React from "react";
import Container from "../global/Container";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center sm:gap-4 flex-wrap py-8">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>

        <div className="flex items-center justify-between gap-4">
          <div className="flex gap-4">
            <CartButton />
            <DarkMode />
          </div>
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
