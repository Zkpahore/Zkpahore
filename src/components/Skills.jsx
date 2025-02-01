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
    "REST API"
  ];

  const generateCategoryColor = (category) => {
    const colors = {
      frontend: "border-sky-400 hover:border-sky-300",
      backend: "border-purple-400 hover:border-purple-300"
    };
    return colors[category] || "border-gray-400";
  };

  const renderSkills = (skills, category) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`border-2 p-3 rounded-lg text-center bg-slate-700 text-white ${generateCategoryColor(
              category
            )} transition-all duration-300 hover:bg-slate-800 hover:scale-105 hover:shadow-lg cursor-default`}
          >
            <span className="text-sm md:text-base">{skill}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-wrap py-12 px-4 lg:px-8 bg-gradient-to-b from-slate-100 to-slate-200" id="skills">
      <div className="w-full md:w-1/2 lg:w-1/2 p-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-6 before:bg-purple-500">
            About Me
          </h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Welcome to my corner of the web! I'm a MERN Stack developer passionate about crafting
            robust and efficient web applications with cutting-edge technologies.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Focused on clean code and intuitive design, I specialize in full-stack development,
            delivering seamless digital experiences from concept to deployment.
          </p>
        </div>

        <div className="mt-8 ml-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6">
          <h3 className="font-bold text-lg text-purple-600 mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            Studied at
          </h3>
          <p className="text-blue-600 font-semibold text-lg ml-8">
            Sukkur IBA University
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/2 p-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-6 before:bg-sky-500">
            Technical Skills
          </h2>
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-sky-600 mb-6 ml-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Frontend Technologies
            </h3>
            {renderSkills(frontendSkills, "frontend")}
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-6 ml-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
              Backend Technologies
            </h3>
            {renderSkills(backendSkills, "backend")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;