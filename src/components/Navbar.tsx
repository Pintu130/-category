'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null)
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}>
            <Menu setActive={setActive}>
                <Link href={'/'}>
                    <MenuItem setActive={setActive} active={active} item="Home" >

                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Category">
                    <div className="flex flex-col space-y-5 text-sm">
                        <HoveredLink href="/category">Smartphones</HoveredLink>
                        <HoveredLink href="/category">Laptops</HoveredLink>
                        <HoveredLink href="/category">Fragrances</HoveredLink>
                        <HoveredLink href="/category">Skincare</HoveredLink>
                        <HoveredLink href="/category">Groceries</HoveredLink>
                        <HoveredLink href="/category">Home-decoration</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={'/contact'}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us" >
                        dfa
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar