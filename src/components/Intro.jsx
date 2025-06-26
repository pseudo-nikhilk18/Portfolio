import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { GiGraduateCap } from "react-icons/gi";
import pic from "../assets/pic.png"

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/pseudo-nikhilk18", label: "GitHub" },
  { icon: SiLeetcode, href: "https://leetcode.com/nikhilk18", label: "LeetCode" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/nikhil-kalaskar-542820273/", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://x.com/Nikhil_K18", label: "X Twitter" },
  { icon: CgMail, href: "https://mail.google.com/mail/u/0/?view=cm&to=nikhilkalaskar51@gmail.com", label: "Email" },
];

const Intro = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col justify-center items-center py-12 overflow-hidden">

            <div className="absolute bottom-0 left-0 w-full h-48 pointer-events-none z-0 bg-gradient-to-b from-transparent to-black" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">


                <div className="relative flex flex-col justify-center items-start px-25">

                    <div className="flex flex-col items-start">
                        {/* <div className="font-mont font-extrabold text-[min(5vw,20px)] text-shadow-white">
                            Hello World I'm
                        </div> */}

                        <div className="font-mont font-extrabold text-[min(7vw,50px)] text-white whitespace-nowrap flex flex-row">
                            Nikhil_Kalaskar
                            <div className="m-2"><GiGraduateCap /></div>
                        </div>

                        <div className="mt-1 h-0.5 w-9/10 bg-gradient-to-r from-white to-black" />

                        <div className="mt-2 font-mont font-extrabold text-[min(7vw,22px)] text-shadow-white">
                            Full Stack Developer
                        </div>

                        <div className="mt-1 font-mont text-[min(7vw,16px)] text-shadow-white">
                            I’m a highly motivated developer with a passion for problem-solving, full-stack development, and innovative tech solutions. Looking forward to build scalable web apps and continuously explore new technologies.
                        </div>
                    </div>

                    {/* <div className="mt-4 h-0.5 w-9/10 bg-gradient-to-r from-white to-black" /> */}

                    <div className="mt-6 flex flex-row justify-start items-center gap-7">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="p-1 rounded-full hover:scale-140 transition-transform duration-200"
                        >
                            <Icon className="text-xl md:text-2xl lg:text-3xl text-white hover:text-stone-300" />
                        </a>
                        ))}
                    </div>
                </div>

        
                <div className="relative w-[80vw] max-w-[20rem] md:max-w-[25rem] lg:max-w-[32rem] aspect-square overflow-hidden rounded-full shadow-inner bg-black">
                    <img
                        src={pic}
                        alt="pic"
                        className="w-full h-full object-cover opacity-90 -translate-y-[19%] translate-x-[7%]"
                    />
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.7)_70%,rgba(0,0,0,0.95)_90%,rgba(0,0,0,1)_100%)]" />
                </div>


            </div>
        </div>
    );
};

export default Intro;
