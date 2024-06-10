import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
    { path: "/about", text: "About" },
    { path: "/pricingPage", text: "Pricing" },
    { path: "/contact", text: "Contact" }
]


export const Navbar = () => {
    return (

        <nav className="flex flex-wrap bg-blue-800 bg-opacity-25 p-2 m-2 rounded">
            <Link href={"/"} className="flex items-center">
                <HomeIcon />
                <span className="mx-2">Home</span>
            </Link >
            <div className="flex flex-1"></div>

            {
                navItems.map(navItem => (
                    <ActiveLink key={navItem.path}  {...navItem} />
                ))
            }

        </nav >
    )
};

