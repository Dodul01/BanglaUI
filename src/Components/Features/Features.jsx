const Features = () => {
    return (
        <div className="lg:m-5 m-2 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
            <div className="bg-slate-500 bg-opacity-5 p-3 border-2 border-black rounded-lg">
                <h1 className="lg:text-2xl md:text-xl text-lg font-medium my-3">Responsive Design</h1>
                <p className="text-gray-400 text-lg">BanglaUI ensures your components adapt seamlessly to different screen sizes.</p>
            </div>
            <div className="bg-slate-500 bg-opacity-5 p-3 border-2 border-black rounded-lg">
                <h1 className="lg:text-2xl md:text-xl text-lg font-medium my-3">Customization Options</h1>
                <p className="text-gray-400 text-lg">BanglaUI allows you to easily customize the appearance of components.</p>
            </div>
            <div className="bg-slate-500 bg-opacity-5 p-3 border-2 border-black rounded-lg">
                <h1 className="lg:text-2xl md:text-xl text-lg font-medium my-3">Accessibility</h1>
                <p className="text-gray-400 text-lg">BanglaUI allows you to prioritize accessibility features for an inclusive experience.</p>
            </div>
            <div className="bg-slate-500 bg-opacity-5 p-3 border-2 border-black rounded-lg">
                <h1 className="lg:text-2xl md:text-xl text-lg font-medium my-3">CrossBrowser Compatibility</h1>
                <p className="text-gray-400 text-lg">BanglaUI always ensures compatibility with major web browsers.</p>
            </div>
        </div>
    )
}

export default Features