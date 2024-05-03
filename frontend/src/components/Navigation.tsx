import { useState } from "react";
import Navbar from "./Navbar";
import Drawer from "./Drawer";

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
