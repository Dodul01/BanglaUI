import { Link } from "react-router-dom"

const SideNav = () => {
    return (
        <div className="flex flex-col">
            <Link className="hover:bg-[#0f0f13] px-3 py-1 mx-2 rounded-lg font-medium text-lg" to={'/components/nav'}>Nav</Link>
            <Link className="hover:bg-[#0f0f13] px-3 py-1 mx-2 rounded-lg font-medium text-lg" to={'/components/hero'}>Hero</Link>
        </div>
    )
}

export default SideNav