import { useState } from "react";
import { Link } from "react-router-dom";

import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../img/brand.png";

const NavbarItem = ({ label, classProps, path, link }) => {
    if (link) {
        return (
            <li className={`mx-4 cursor-pointer ${classProps ? classProps : ""}`}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {label}
                </a>
            </li>
        );
    }
    return (
        <li className={`mx-4 cursor-pointer ${classProps ? classProps : ""}`}>
            <Link to={path}>{label}</Link>
        </li>
    );
};

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className="flex justify-between items-center md:pt-4 md:px-20 ">
            <div className="">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-32 cursor-pointer" />
                </Link>
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center">
                <NavbarItem path="/app" label="App" />
                <NavbarItem path="/roadmap" label="Roadmap" />
                <NavbarItem link="https://docs.safu.space/" label="Docs" />
                <NavbarItem
                    path="/profile"
                    label="Profile"
                    classProps="bg-[#C3FBD8] py-2 px-7 mx-4 rounded-full hover:bg-[#76bd80] hover:text-white text-black"
                />
            </ul>
            <div className="flex relative md:hidden mr-4">
                {toggleMenu ? null : (
                    <HiMenuAlt4
                        fontSize={28}
                        className="text-white md:hidden cursor-pinter"
                        onClick={() => {
                            setToggleMenu(true);
                        }}
                    />
                )}
                {toggleMenu && (
                    <ul className="z-10 fixed top-0 right-2 right-0 px-4 w-[70vw] h-screen text-3xl shadow-2xl md:hidden list-none flex flex-col justify-start items-start rounded-md blue-glassmorphism text-white animate-slide-in">
                        <li className="my-2 self-end">
                            <AiOutlineClose fontSize={28} onClick={() => setToggleMenu(false)} />
                        </li>
                        <div>
                            <NavbarItem path="/app" label="App" classProps="mb-4" />
                            <NavbarItem path="/roadmap" label="Roadmap" classProps="mb-4" />
                            <NavbarItem link="https://docs.safu.space/" label="Docs" classProps="mb-4" />
                            <NavbarItem path="/profile" label="Profile" />
                        </div>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
