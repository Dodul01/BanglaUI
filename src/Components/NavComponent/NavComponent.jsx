import GradientText from "../GradientText/GradientText"
import ComponentBox from "../ComponentBox/ComponentBox";

const NavComponent = () => {
    const nav1 = `
        <nav className="bg-[#121216] mt-2 rounded-lg">
            <GradientText text={'BanglaUI'} />
        </nav>
    `;

    return (
        <div>
            {/* Nav One  Starts Here*/}
            <ComponentBox title={'Nav Bar With Title'} previewCode={nav1}>
                <nav className="bg-[#121216] mt-2 rounded-lg">
                    <GradientText text={'BanglaUI'} />
                </nav>
            </ComponentBox>
            {/* Nav One  Ends Here*/}
        </div>
    )
}

export default NavComponent