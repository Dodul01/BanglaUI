const Banner = () => {
    return (
        <div className="flex items-center justify-center flex-col min-h-[80vh] p-2">
            <h1 className="lg:text-6xl md:text-3xl text-2xl text-center font-bold bg-gradient-to-r from-red-600 to-yellow-600 inline-block text-transparent bg-clip-text lg:m-8 md:m-3 m-1 py-4">Create Intuitively Responsive Components with BanglaUI for a Seamless User Experience</h1>
            <p className="lg:text-xl md:text-lg text-center text-gray-400 max-w-[900px]">BanglaUI for React harnesses the simplicity of Tailwind CSS, offering a hassle-free integration of sleek, responsive components. Elevate your development experience effortlessly, with no compromises on style or ease of use.</p>
            <button className="bg-gradient-to-r from-yellow-600 to-red-600 transition-all hover:from-red-500 hover:to-yellow-500 text-xl font-medium px-10 py-3 rounded-lg my-10 border-none outline-none lg:w-auto md:w-auto w-[95vw]">Explore</button>
        </div>
    )
}

export default Banner