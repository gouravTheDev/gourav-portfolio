'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div onClick={() => scrollToSection('home')}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </div>
        <div onClick={() => scrollToSection('work')}>
          <MenuItem setActive={setActive} active={active} item="Experience" />
        </div>
        <div onClick={() => scrollToSection('skills')}>
          <MenuItem setActive={setActive} active={active} item="Skills" />
        </div>
        <div onClick={() => scrollToSection('education')}>
          <MenuItem setActive={setActive} active={active} item="Education" />
        </div>
        <div onClick={() => scrollToSection('contact')}>
          <MenuItem setActive={setActive} active={active} item="Contact" />
        </div>
      </Menu>
    </div>
  )
}

export default Navbar