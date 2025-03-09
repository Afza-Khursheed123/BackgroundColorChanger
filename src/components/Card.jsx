import React, { useState } from 'react';
  
export default function ComponentName() {
const [color,setColor]= useState('White')
let newcolor=color.toLocaleUpperCase();
  return (
    <>
    


    
  <div class="w-full flex-col h-screen duration-100" style={{backgroundColor:color}}> 
    <div className='justify-center items-center flex text-center text-5xl h-1/2 '>{newcolor}</div>
<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

<button onClick={()=>{setColor('Blue')}} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">Blue</button>
<button onClick={()=>{setColor('Lavender')}} type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Lavender</button>
<button onClick={()=>{setColor('Gray')}} type="button" className="text-white bg-gray-800 hover:bg-gray-900  font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-900 dark:hover:bg-gray-700  dark:border-gray-700">Gray</button>
<button onClick={()=>{setColor('White')}} type="button" className="text-gray-900  border-gray-300  hover:bg-gray-300  font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white dark:text-gray-400  dark:hover:bg-gray-200  ">White</button>
<button onClick={()=>{setColor('green')}} type="button" className="text-white bg-green-700 hover:bg-green-800  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 ">Green</button>
<button onClick={()=>{setColor('red')}} type="button" className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700">Red</button>
<button onClick={()=>{setColor('yellow')}}type="button" className="text-white bg-yellow-400 hover:bg-yellow-500  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Yellow</button>
<button onClick={()=>{setColor('purple')}} type="button" className="text-white bg-purple-700 hover:bg-purple-800  font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 ">Purple</button>
</div>
</div>
    </>
  );
}
