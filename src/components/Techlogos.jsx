import React from "react";

const techStack = [
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TailwindCSS", src: "https://www.svgrepo.com/show/374118/tailwind.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
//   { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
//   { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
//   { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"},
  { name: "Canva", src: "https://upload.wikimedia.org/wikipedia/en/b/bb/Canva_Logo.svg",},
];

const TechMarquee = () => {
  return (
    <div className="w-full max-w-6xl mx-auto my-12 space-y-4">
      {/* Row 1 - Forward */}
      <div className="relative overflow-hidden w-full h-12">
        <div
          className="flex items-center"
          style={{ animation: "marquee 90s linear infinite" }}
        >
          {techStack.concat(techStack).map((tech, i) => (
            <span
              key={i}
              className="flex justify-center items-center gap-2 bg-[#18181b] border border-[#27272a] rounded-full shadow text-sm font-medium text-white whitespace-nowrap px-6 py-2 mx-2"
            >
              <img src={tech.src} alt={tech.name} className="w-5 h-5" />
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 - Reverse */}
      <div className="relative overflow-hidden w-full h-12">
        <div
          className="flex items-center"
          style={{ animation: "marquee-reverse 80s linear infinite" }}
        >
          {techStack.concat(techStack).map((tech, i) => (
            <span
              key={`rev-${i}`}
              className="flex justify-center items-center gap-2 bg-[#18181b] border border-[#27272a] rounded-full shadow text-sm font-medium text-white whitespace-nowrap px-6 py-2 mx-2"
            >
              <img src={tech.src} alt={tech.name} className="w-5 h-5" />
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
