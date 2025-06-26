import { motion } from "framer-motion";

const techStack = [
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Express",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "TailwindCSS",
    src: "https://www.svgrepo.com/show/374118/tailwind.svg",
  },
  {
    name: "Framer Motion",
    src: "/framer.svg", // Replace with your actual path
  },
];


export default function ProjectCard({image, title}) {
  return (
    <motion.div
      className="group relative z-10 cursor-pointer w-[320px] h-[320px] max-sm:w-[280px] rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col"
      tabIndex={-1}
      role="button"
      aria-label="Open Habitz GitHub"
      style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px 0px" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Project Image */}
      <div className="w-full flex items-center justify-center p-4 pb-0">
        <img
          alt={title || "Project"}
          className="object-cover w-full h-45 rounded-lg shadow"
          loading="lazy"
          src={image}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 px-4 py-3 w-full flex-1">
        {/* <span className="text-base font-semibold text-white truncate">Habitz</span>
        <span className="text-zinc-400 text-xs truncate">Ultimate Digital Habit Builder</span> */}

        {/* Stack Icons */}
        <div className="flex flex-wrap gap-2 items-center mt-2">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-zinc-800"
            >
              <img
                alt={tech.name}
                className="w-4 h-4 object-contain"
                loading="lazy"
                src={tech.src}
              />
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-2 mt-auto w-full">
          <a
            href="https://habitz-three.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 rounded-lg bg-zinc-800 text-sm text-white font-light hover:bg-zinc-700 transition text-center shadow flex items-center justify-center gap-2"
          >
            Live Preview
          </a>
          <a
            href="https://github.com/Hike-12/HackHazard"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 rounded-lg bg-zinc-700 text-sm text-white font-light hover:bg-zinc-600 transition text-center shadow flex items-center justify-center gap-2"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 496 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M165.9 397.4c..."></path>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
