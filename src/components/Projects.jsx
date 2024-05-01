import React from 'react';

function Projects() {
  return (
    <div className='flex flex-wrap w-full justify-center gap-10' id='project'>
      <div className="text-gray-800 bg-white mt-8 rounded shadow-md flex-shrink-0 w-full md:w-1/4 lg:w-1/4">
        <h1 className="text-2xl text-center font-bold m-6">Travel</h1>
        <hr />
        <small className="m-3 bg-gray-100">Jan 10/ 2024</small>
        <p className="mt-10 m-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          <small className="m-2 bg-gray-200 p-1 rounded shadow-md">React.Js</small>
          <small className="m-2 bg-gray-200 p-1 rounded shadow-md">Tailwind Css</small>
          <small className="m-2 bg-gray-200 p-1 rounded shadow-md">React Icons</small>
        </p>
        <br />
        <div style={{ maxHeight: '300px', overflow: 'auto' }}>
          <img src="FireShot.png" alt='Travel Web Design' />
        </div>
      </div>

      <div className="text-gray-800 bg-white mt-8 rounded shadow-md m-4 flex-shrink-0 w-full md:w-1/4 lg:w-1/4">
        <br />
        <h1 className="text-2xl text-center font-bold"></h1>
        <br />
        <hr />
        <small className="m-3 bg-gray-100">Jan 12/ 2024</small>
        <p className="mt-10 m-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
        <small className="m-2 bg-gray-200 p-1 rounded shadow-md">React.Js</small>
        <small className="m-2 bg-gray-200 p-1 rounded shadow-md">Tailwind Css</small>
        <small className="m-2 bg-gray-200 p-1 rounded shadow-md">React Router</small>
        </p>
        <br />
        <div style={{ maxHeight: '300px', overflow: 'auto' }}>
          <img src="eCommerce.jpg" alt='E-Commerce web Application' />
        </div>
      </div>

      <div className="text-gray-800 bg-white mt-8 rounded shadow-md m-4 flex-shrink-0 w-full md:w-1/4 lg:w-1/4">
        <br />
        <h1 className="text-2xl text-center font-bold">E-Commerce</h1>
        <br />
        <hr />
        <small className="m-3 bg-gray-100">Jan 12/ 2024</small>
        <p className="mt-10 m-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          <small className="m-2 bg-gray-200 p-1 rounded shadow-md">React.Js</small>
          <small className="m-2 bg-gray-200 p-1 rounded shadow-md">Tailwind Css</small>
          <small className="m-2 bg-gray-200 p-1 rounded shadow-md">React Router</small>
        </p>
        <br />
        <div style={{ maxHeight: '300px', overflow: 'auto' }}>
          <img src="jhh.png" alt='E-Commerce Web Application' />
        </div>
      </div>
    </div>
  );
}

export default Projects;
