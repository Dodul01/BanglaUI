import GradientText from "../GradientText/GradientText"
import ComponentBox from "../ComponentBox/ComponentBox";
import { useState } from "react";

const NavComponent = () => {
    const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false);

    const nav1 = `
        <nav className="bg-[#121216]">
            <h1 className="lg:text-3xl md:text-2xl text-xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 inline-block text-transparent bg-clip-text lg:p-4 md:p-3 p-1">BanglaUI</h1>
        </nav>
    `;

    const nav2 = `
        import { useState } from "react";

        const NavBar = () => {
            const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false);
            
            return (
                <nav className="flex items-center justify-between rounded-lg bg-[#121216]">
                <div>
                    <GradientText text={'BanglaUI'} />
                </div>

                {/* Lerge Screen Menu Starts Here */}
                <div className="lg:flex gap-3 px-2 hidden">
                    <a className="hover:text-red-500 transition-all" href="#">Home</a>
                    <a className="hover:text-red-500 transition-all" href="#">About</a>
                    <a className="hover:text-red-500 transition-all" href="#">Contact</a>
                </div>
                {/* Lerge Screen Menu Ends Here */}

                {/* Responsive Menu Starts Here */}
                <div className="lg:hidden flex relative">
                    <div onClick={() => setIsResponsiveMenuOpen(!isResponsiveMenuOpen)} className="border m-2 cursor-pointer rounded px-2">
                        &#9776;
                    </div>
                    {isResponsiveMenuOpen &&
                        <div className="flex flex-col absolute top-14 right-4 w-[200px] gap-3 bg-[#121216] p-5 rounded-lg">
                            <a className="hover:bg-[#08080a] px-3 rounded-lg" href="#">Home</a>
                            <a className="hover:bg-[#08080a] px-3 rounded-lg" href="#">About</a>
                            <a className="hover:bg-[#08080a] px-3 rounded-lg" href="#">Contact</a>
                        </div>
                    }

                </div>
                {/* Responsive Menu Ends Here */}
            </nav>
            )
        }

        export default NavBar;
    `

    return (
        <div>
            {/* Nav One  Starts Here*/}
            <ComponentBox title={'Nav Bar With Title'} previewCode={nav1}>
                <nav className="bg-[#121216] rounded-lg">
                    <GradientText text={'BanglaUI'} />
                </nav>
            </ComponentBox>
            {/* Nav One  Ends Here*/}

            <ComponentBox title={'Responsive Nav Bar'} previewCode={nav2}>
                <nav className="flex items-center justify-between rounded-lg bg-[#121216]">
                    <div>
                        <GradientText text={'BanglaUI'} />
                    </div>

                    {/* Lerge Screen Menu Starts Here */}
                    <div className="lg:flex gap-3 px-2 hidden">
                        <a className="hover:text-red-500 transition-all" href="#">Home</a>
                        <a className="hover:text-red-500 transition-all" href="#">About</a>
                        <a className="hover:text-red-500 transition-all" href="#">Contact</a>
                    </div>
                    {/* Lerge Screen Menu Ends Here */}

                    {/* Responsive Menu Starts Here */}
                    <div className="lg:hidden flex relative">
                        <div onClick={() => setIsResponsiveMenuOpen(!isResponsiveMenuOpen)} className="border m-2 cursor-pointer rounded px-2">
                            &#9776;
                        </div>
                        {isResponsiveMenuOpen &&
                            <div className="flex flex-col absolute top-14 right-4 w-[200px] gap-3 bg-[#121216] p-5 rounded-lg">
                                <a className="hover:bg-[#08080a] px-3 rounded-lg" href="#">Home</a>
                                <a className="hover:bg-[#08080a] px-3 rounded-lg" href="#">About</a>
                                <a className="hover:bg-[#08080a] px-3 rounded-lg" href="#">Contact</a>
                            </div>
                        }

                    </div>
                    {/* Responsive Menu Ends Here */}
                </nav>
            </ComponentBox>


        </div>
    )
}

export default NavComponent