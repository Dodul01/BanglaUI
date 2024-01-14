import { Outlet } from "react-router-dom"
import Nav from "./Components/Nav/Nav"
import Footer from "./Components/Footer/Footer"
import './App.css'

const App = () => {
  return (
    <div className="bg-[#08080a] min-h-screen min-w-full text-[#fefefc]">
      <div className="max-w-screen-2xl mx-auto overflow-hidden">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default App