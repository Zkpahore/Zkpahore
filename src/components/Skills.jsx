import React from "react";

const Skills = () => {


    return (
        <>
        <div className='flex flex-wrap' id='skills'>


        <div className="w-full md:w-1/2 lg:w-1/2 p-6 bg-white rounded shadow-md">
    <p className="text-gray-800 text-lg mb-4">
      Welcome to my corner of the web! I'm a MERN (MongoDB, Express.js, React, Node.js) Stack developer with a keen interest in creating robust and efficient web applications.
    </p>
    <p className="text-gray-800 text-lg">
      With a focus on clean code and user-centric design, I strive to deliver seamless digital experiences. My journey in the world of web development has equipped me with the skills to handle both front-end and back-end development, ensuring end-to-end solutions for my clients.
    </p>
  </div>

       <div className="border w-full lg:w-1/2 md:w-1/2">
      <div>
        <h1 className="font-bold ml-4 mt-6 text-purple-500 text-lg">Studied at</h1>
       <p className="ml-10 mt-4 text-blue-600 font-bold">Sukkur IBA University</p>
      </div>
   <div className="m-4">
     <h1 className="m-4 text-lg font-bold">Front End</h1>
   
<ul className="flex flex-wrap space-x-4 space-y-4 list-none w-full text-center font-serif font-bold">
 

  <li className="border-2 p-1 border-sky-400">React</li>
  <li className="border-2 p-1 border-red-400">Html-5</li>
  <li className="border-2 p-1 border-purple-400">Css</li>
  <li className="border-2 p-1 border-green-400">vite Frame</li>
  <li className="border-2 p-1 border-yellow-400">Redux</li>
  <li className="border-2 p-1 border-pink-400">React Router</li>
  <li className="border-2 p-1 border-orange-400">Tailwind Css</li>
  <li className="border-2 p-1 border-purple-700">Boootstrap css</li>
</ul>
</div>

<div className="m-4 w-full"> 
 <h1 className="m-4 text-lg font-bold">Back End</h1>
<ul className="flex flex-wrap space-x-4 space-y-4 list-none w-full text-center font-serif font-bold">
  <li className="border-2 p-1 border-sky-600">ExpressJs</li>
  <li className="border-2 p-1 border-red-400">NodeJs</li>
  <li className="border-2 p-1 border-purple-400">Nodemon</li>
  <li className="border-2 p-1 border-green-400">mangoose</li>
  <li className="border-2 p-1 border-yellow-400">Rest API</li>
  <li className="border-2 p-1 border-pink-400">React Router</li>
  <li className="border-2 p-1 border-orange-400">Tailwind Css</li>
  <li className="border-2 p-1 border-purple-700">Boootstrap css</li>
</ul>
</div>
</div>
</div>
        </>
    )
}
export default Skills;