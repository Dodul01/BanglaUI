import Banner from "../../Components/Banner/Banner"
import Features from "../../Components/Features/Features"

const Home = () => {
    return (
        <div>
            <Banner />
            <h1 data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" className="lg:text-3xl md:text-2xl text-xl font-bold lg:mx-5 mx-2">Why Use BanglaUI ?</h1>
            <div className="lg:my-5 my-2">
                <Features />
            </div>
        </div>
    )
}

export default Home