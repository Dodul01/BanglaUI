import { Link } from "react-router-dom"
import GradientText from "../GradientText/GradientText"
import { FaGithub } from "react-icons/fa";
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex items-center lg:justify-between md:justify-between p-2 bg-blend-saturation">
            <div className="lg:hidden md:hidden visible cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <RiMenu4Fill className="text-2xl m-3" />
            </div>
            <Link to='/' className="cursor-pointer">
                <GradientText text={'BanglaUI'} />
            </Link>
            <div className="lg:flex md:flex hidden items-center gap-5 lg:p-4 md:p-3 p-1">
                <Link to='/quickStart' className="bg-gradient-to-r bg-white transition-all hover:from-red-600 hover:to-yellow-600 inline-block text-transparent bg-clip-text font-medium">Quick Start</Link>
                <Link to='/components' className="bg-gradient-to-r bg-white transition-all hover:from-red-600 hover:to-yellow-600 inline-block text-transparent bg-clip-text font-medium">Components</Link>
                <Link className="cursor-pointer" to='https://github.com/Dodul01/BanglaUI'>
                    <FaGithub className="text-white text-2xl" />
                </Link>
            </div>

            <div className={`lg:hidden md:hidden flex fixed top-[60px] ${isMenuOpen ? "right-[-15px]" : 'right-[500px]'} z-10 h-screen w-screen bg-[#08080a] transition-all`}>
                <div className="flex flex-col gap-3 px-5">
                    <Link to='/quickStart' className="bg-gradient-to-r bg-white transition-all hover:from-red-600 hover:to-yellow-600 inline-block text-transparent bg-clip-text font-medium">Quick Start</Link>
                    <Link to='/components' className="bg-gradient-to-r bg-white transition-all hover:from-red-600 hover:to-yellow-600 inline-block text-transparent bg-clip-text font-medium">Components</Link>
                    <Link className="cursor-pointer" to='https://github.com/Dodul01/BanglaUI'>
                        <FaGithub className="text-white text-2xl" />
                    </Link>
                </div>

            </div>
        </nav>
    )
}

export default Nav