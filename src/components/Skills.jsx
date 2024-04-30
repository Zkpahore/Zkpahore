import React from "react";

const Skills = () => {
  const frontendSkills = [
    "React",
    "HTML5",
    "CSS",
    "Vite Frame",
    "Redux",
    "React Router",
    "Tailwind CSS",
    "Bootstrap CSS"
  ];

  const backendSkills = [
    "ExpressJS",
    "NodeJS",
    "Nodemon",
    "Mongoose",
    "REST API",
    "React Router",
    "Tailwind CSS",
    "Bootstrap CSS"
  ];

  const generateRandomColor = () => {
    const colors = ["border-sky-400", "border-red-400", "border-purple-400", "border-green-400", "border-yellow-400", "border-pink-400", "border-orange-400", "border-purple-700"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const renderSkills = (skills) => {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className={`border p-2 rounded-md text-center bg-slate-600 text-white ${generateRandomColor()}`}>
            {skill}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className='flex flex-wrap' id='skills'>
        <div className="w-full md:w-1/2 lg:w-1/2 p-6 bg-white rounded shadow-md content-center">
          <p className="text-gray-800 text-lg mb-4">
            Welcome to my corner of the web! I'm a MERN (MongoDB, Express.js, React, Node.js) Stack developer with a keen interest in creating robust and efficient web applications.
          </p>
          <p className="text-gray-800 text-lg">
            With a focus on clean code and user-centric design, I strive to deliver seamless digital experiences. My journey in the world of web development has equipped me with the skills to handle both front-end and back-end development, ensuring end-to-end solutions for my clients.
          </p>
        </div>

        <div className="w-full lg:w-1/2 md:w-1/2 p-6">
          <div>
            <h1 className="font-bold ml-4 mt-6 text-purple-500 text-lg">Studied at</h1>
            <p className="ml-10 mt-4 text-blue-600 font-bold">Sukkur IBA University</p>
          </div>
          <div className="m-4">
            <h1 className="m-4 text-lg font-bold">Front End</h1>
            {renderSkills(frontendSkills)}
          </div>
          <div className="m-4">
            <h1 className="m-4 text-lg font-bold">Back End</h1>
            {renderSkills(backendSkills)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
