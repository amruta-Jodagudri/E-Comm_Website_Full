
const Hero = () => {
    return (
        <div className="bg-[#E3EDF6] mt-0">
            <div className="container grid md:grid-cols-2 py-10 px-20">
                <div className="flex items-center">
                    <div className="max-w-[450px] space-y-4">
                        <p className="text-topHeadingSecondary">
                            Starting at <span className="font-bold">$999.00</span>
                        </p>

                        <h1 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
                            The best node book collection 2023
                        </h1>

                        <h3 className="text-2xl font-['Oregano',cursive]">
                            Exclusive offer <span className="text-red-600">-10%</span> off this week
                        </h3>

                        <a href="#" className="inline-block bg-white rounded-md px-6 py-3 hover:bg-accept hover:text-white">
                            Shop Now
                        </a>
                    </div>
                </div>
                <div>
                    <img src="/hero.jpeg" width={400} alt="hero" className="ml-auto mt-2" />
                </div>
            </div>
        </div>
    )
}

export default Hero
