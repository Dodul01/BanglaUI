import { Outlet } from "react-router-dom"
import SideNav from "../../Components/SideNav/SideNav"

const Components = () => {
    return (
        <div className="min-h-screen flex">
            <div className="w-[300px] lg:block hidden">
                <SideNav />
            </div>
            <div className="flex-1 overflow-y-auto">
                <Outlet />
            </div>
        </div>
    )
}

export default Components