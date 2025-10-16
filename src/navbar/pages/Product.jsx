import React from 'react';
import image1 from "./headphone.png";
import image2 from "./vr.png"
import image3 from "./keyboard.png"

const Product = () => {
  return (
    <div className='flex flex-col min-h-[898px] bg-gradient-to-br from-black via-violet-950 to-purple-800 items-center justify-center gap-16'>

      <h1 className='text-5xl font-bold font-sans '>Products</h1>

      <div className='flex justify-center gap-10 items-center'>
      
      <div className='flex flex-col items-center justify-center rounded-3xl w-80 p-6 h-96 border-2 border-violet-700 shadow-2xl transition-transform duration-300 hover:scale-105 bg-gradient-to-b from-violet-900/60 to-purple-700/30'>
        <img 
          className='w-36 h-36 object-contain mb-4 rounded-xl ring-4 ring-purple-400 shadow-lg' 
          src={image1} 
          alt="Quantum Series Headphones" 
        />
        <h1 className='text-white font-bold text-2xl mb-2 tracking-wide drop-shadow-md'>Quantum Series</h1>
        <p className='text-violet-200 font-medium text-center text-md'>
          Headphones: Immersive 3D audio with adaptive noise cancellation
        </p>
      </div>

      <div className='flex flex-col items-center justify-center rounded-3xl w-80 p-6 h-96 border-2 border-violet-700 shadow-2xl transition-transform duration-300 hover:scale-105 bg-gradient-to-b from-violet-900/60 to-purple-700/30'>
        <img 
          className='w-36 h-36 object-contain mb-4 rounded-xl ring-4 ring-purple-700 shadow-lg' 
          src={image2} 
          alt="VR series" 
        />
        <h1 className='text-white font-bold text-2xl mb-2 tracking-wide drop-shadow-md'>VR Series</h1>
        <p className='text-violet-200 font-medium text-center text-md'>
          Virtual reality: Gives you a glimse of future
        </p>
      </div>

      <div className='flex flex-col items-center justify-center rounded-3xl w-80 p-6 h-96 border-2 border-violet-700 shadow-2xl transition-transform duration-300 hover:scale-105 bg-gradient-to-b from-violet-900/60 to-purple-700/30'>
        <img 
          className='w-36 h-36 object-contain mb-4 rounded-xl ring-4 ring-purple-400 shadow-lg' 
          src={image3} 
          alt="Keyboard series" 
        />
        <h1 className='text-white font-bold text-2xl mb-2 tracking-wide drop-shadow-md'>Keyboard Series</h1>
        <p className='text-violet-200 font-medium text-center text-md'>
          Keyboard: Immersive rgb keyboard with smooth buttons and keys
        </p>
      </div>
      </div>
    </div>
  );
}

export default Product;
