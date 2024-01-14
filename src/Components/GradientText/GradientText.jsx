const GradientText = ({text}) => {
    return (
        <div>
            <h1 className="lg:text-3xl md:text-2xl text-xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 inline-block text-transparent bg-clip-text lg:p-4 md:p-3 p-1">{text}</h1>
        </div>
    )
}

export default GradientText;