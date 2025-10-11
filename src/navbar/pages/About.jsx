import hero2 from "./hero2.png"

const About = () => {
    
    return(
    <div className="flex flex-row min-h-[898px] bg-black items-center justify-center">

        <div className="flex flex-col gap-8">
            <h1 className="text-white text-7xl font-bold font-sans ">
                About US
            </h1>
            <p className="text-1xl text-gray-500">We are team of visionaries <br/> building the future, One byte a time.<br/>Our mission is innovate,<br/> empower and connect.<br/>Join us on this journey <br/> into tomorrow's digital landscape.

            </p>
            <button className='text-white rounded-4xl  px-8 py-3 hover:bg-transparent border-2 border-purple-700 hover:text-purple-600 cursor-pointer transition duration-300 *: '>Get Started</button>
        </div>

        <div className="flex flex-row">

            <img src={hero2} className="ml-20"></img>



        </div>

    </div>
)
}
export default About;
