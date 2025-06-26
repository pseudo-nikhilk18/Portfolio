import NavButton from "./NavButton";
import n_logo from"../assets/n_logo.png";


const Navbar = () =>{

    const resumeURL = import.meta.env.VITE_RESUME_URL;
    
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <div className="z-15 flex justify-between items-center max-sm:flex-col w-full px-25 py-3 min-h-[60px] bg-black  fixed top-0 bg-opacity-80 backdrop-blur-md ">
            <div className="flex items-center">
                <img src={n_logo} alt="logo" className="h-17 w-auto max-sm:h-13 max-sm:mt-2 max-sm:w-auto">
                </img>
            </div>

            <div className="w-full sm:w-auto flex justify-center sm:justify-end gap-3 max-sm:gap-1 mt-2 sm:mt-0">
                
                <button onClick={() => scrollToSection('home')}>
                    <NavButton>Home</NavButton>
                </button>

                <button onClick={() => scrollToSection('projects')}>
                    <NavButton>Projects</NavButton>
                </button>

                <a href={resumeURL} target="_blank" rel="noopener noreferrer">
                    <NavButton>Resume</NavButton>
                </a>

                <button onClick={() => scrollToSection('contact')}>
                    <NavButton>Contact</NavButton>
                </button>
            </div>
        </div>
    )
} 

export default Navbar;