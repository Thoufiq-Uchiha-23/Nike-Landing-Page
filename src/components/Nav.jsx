import { headerLogo } from '../assets/images'
import { FaArrowUp } from "react-icons/fa";
import { navLinks } from '../constants'
import { useState } from "react";
import { useLocation } from 'react-router-dom'

const Nav = () => {
    const pathname = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }; 

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            {/* Menu Button */}
            <div className="fixed top-[25px] right-[5%] z-50 lg:hidden">
                <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex transition-all font-bold hover:border border-black duration-500 items-center justify-center p-2 rounded-full text-coral-red hover:text-black hover:bg-coral-red"
                aria-controls="mobile-menu"
                aria-expanded="false"
                >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                    <svg className="block h-6 w-6 font-bold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                )}
                </button>
            </div>
            <a href="/">
                <img 
                src={headerLogo} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {
                    navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}
                            className={`fonts-montserrat leading-normal text-lg text-slate-gray`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))
                }
            </ul>
            {/* Mobile Screen Menu */}
            <ul className={`${isOpen ? 'flex' : 'hidden'} flex-1 lg:hidden top-0 transition-all z-40 max-lg:pt-10 left-0 max-lg:flex-col items-center max-lg:min-h-screen max-lg:w-full max-lg:absolute lg:relative lg:flex-row justify-evenly gap-5 font-bold lg:font-lg backdrop-blur-xl text-3xl lg:text-xl tracking-widest bg-coral-red/90`}>
                {
                    navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}
                            className='fonts-montserrat leading-normal text-2xl text-black'
                            >
                                {item.label}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <a href="#home" className='fixed bottom-[7%] lg:hidden right-[7%] border border-black bg-coral-red p-3 text-black z-[700] rounded-full'><FaArrowUp /></a>
        </nav>
    </header>
  )
}

export default Nav