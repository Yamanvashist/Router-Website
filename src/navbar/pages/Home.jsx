import Photo from './hero.png'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black items-center justify-center">

      <div className="flex flex-row flex-wrap justify-center">

        <img src={Photo} className="w-[760px] " alt="hero" />

        <div className='flex flex-col '>
        <h1 className="text-white font-bold text-8xl text-center leading-tight ">
          New <span className="text-purple-500">Futuristic</span>
          <div className="text-center">Way</div>
        </h1>
        <p className="text-gray-400 text-center text-xl mt-6 max-w-2xl leading-relaxed">
            Step into the <span className="text-purple-500">new era</span> of innovation.<br />
            Where design meets intelligence, and technology<br />
            reshapes how we see the world. <br />
            Experience the <span className="text-purple-400">future today</span> — built for dreamers like you.
          </p>
        <div className='flex items-center justify-center gap-8 mt-10'>
        <button className='text-white rounded-4xl bg-purple-600 px-8 py-3 hover:bg-transparent hover:border-2 hover:border-purple-700 hover:text-purple-600 cursor-pointer transition duration-300 *: '>Get Started</button>
        <button className='rounded-4xl px-8 py-3 bg-transparent border-2 border-purple-700 text-purple-600 cursor-pointer transition duration-300 hover:text-white hover:bg-purple-600 hover:border-none'>Learn more</button>
        </div>
        </div>
      </div>

      

    </div>
  )
}

export default Home
