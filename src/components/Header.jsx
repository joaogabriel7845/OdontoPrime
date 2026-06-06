import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/odontoprime.png"
import NavItem from "./NavItem";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";

function Header() {

    const [menuAberto, setMenuAberto] = useState(false)

    return (
        <>
            {menuAberto && (
                <div 
                    onClick={() => setMenuAberto(false)}
                    className="fixed inset-0 bg-black/50 z-90 md:hidden"
                />
            )}
            <motion.div
                animate={{ x: menuAberto ? 0 : "-100%" }}
                initial={{ x: "-100%"}}
                transition={{duration: 0.3}}
                className="fixed top-0 left-0 h-screen w-64 bg-drawer font-[Inter] z-100 flex flex-col p-10 gap-5 md:hidden"
            >
                <button onClick={() => setMenuAberto(false)} className="self-end">
                    <FontAwesomeIcon color="white" icon={faXmark}/>
                </button>

                <a onClick={() => setMenuAberto(false)} href="#home">
                    <NavItem label={"Ínicio"}/>
                </a>
                <a onClick={() => setMenuAberto(false)} href="#services">
                    <NavItem label={"Serviços"}/>
                </a>
                <a onClick={() => setMenuAberto(false)} href="#about">
                    <NavItem label={"Sobre"}/>
                </a>
                <a onClick={() => setMenuAberto(false)} href="#testimonial">
                    <NavItem label={"Depoimentos"}/>
                </a>
                <a onClick={() => setMenuAberto(false)} href="#contact">
                    <NavItem label={"Contato"}/>
                </a>

            </motion.div>
            
            <div className="w-screen md:w-full fixed top-0 left-0 z-50 h-30 p-5 flex justify-between items-center shadow-md border-b border-blue bg-prussian">
                
                <div className="flex flex-col items-center">
                    
                    <div className="w-10 h-10">
                        <img className="w-10 h-10" src={logo} alt="" />
                    </div>

                    <h1 className="hidden md:inline text-xl text-white font-[Merriweather]">OdontoPrime</h1>

                </div>
            
                <a href="#home" className="md:hidden text-xl text-white font-[Merriweather]">OdontoPrime</a>
                
                <nav className="hidden md:flex p-2 justify-center">

                    <ul className="flex gap-5">

                        <a href="#home">
                            <NavItem label={"Ínicio"}/>
                        </a>
                        <a href="#services">
                            <NavItem label={"Serviços"}/>
                        </a>
                        <a href="#about">
                            <NavItem label={"Sobre"}/>
                        </a>
                        <a href="#testimonial">
                            <NavItem label={"Depoimentos"}/>
                        </a>
                        <a href="#contact">
                            <NavItem label={"Contato"}/>
                        </a>
                        
                    </ul>

                </nav>

                <a href="#whatsapp" className="hidden md:block transition-all font-[inter] p-3 bg-dusk hover:opacity-90 border border-transparent hover:border-white/30 active:scale-95 text-white rounded-md">
                    Agendar Avaliação
                </a>

                <button onClick={() => setMenuAberto(!menuAberto)} className="md:hidden">
                    <div className="w-10 h-10 flex items-center justify-center">
                        <FontAwesomeIcon color="white" fontSize={24} icon={faBars}/>
                    </div>
                </button>

            </div>

        </>
    )
}

export default Header;