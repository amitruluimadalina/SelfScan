import { useState } from "react";
import Drawer from "./Drawer";
import Navbar from "./Navbar";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function onToggleMobileMenu() {
    setMobileMenuOpen((open) => !open);
  }

  return (
    <header>
      <Navbar onToggleMobileMenu={onToggleMobileMenu} />
      <Drawer
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={onToggleMobileMenu}
      />
    </header>
  );
}
