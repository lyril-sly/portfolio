import React from "react";
import { useState } from "react";
import logo from '../assect/logo (2).png'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <section className=" rounded-2xl my-2 mx-4 flex justify-between px-2.5 py-1.5">
                <div>
                    <img className="h-10 w-32" src={logo} alt="" />
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white text-xs focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 mt-6 w-48 rounded-lg shadow-xl md:flex">
                            <ul className="py-2 font-bold">
                                <li className="text-white text-sm px-4 py-2 hover:bg-gray-700">Home</li>
                                <li className="text-white text-sm px-4 py-2 hover:bg-gray-700">Projects</li>
                                <li className="text-white text-sm px-4 py-2 hover:bg-gray-700">Skills</li>
                                <li className="text-white text-sm px-4 py-2 hover:bg-gray-700">Contact</li>
                            </ul>
                            <div>
                            {/* <p className="text-white text-xs">Download Cv</p> */}
                            </div>
                        </div>
                    )}
                </div>

                <div className="hidden md:block md:flex md:gap-6">
                    <ul className="text-white flex gap-4">
                        <li className="text-base">Home</li>
                        <li className="text-base">Projects</li>
                        <li className="text-base">Skills</li>
                        <li className="text-base">Contact</li>
                    </ul>
                    <div>
                    {/* <p className="text-white text-base">Download Cv</p> */}
                    </div>
                </div>
                
            </section>
        </>
    );
}