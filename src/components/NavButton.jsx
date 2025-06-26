


const NavButton = ({children}) =>{
    return (
        <button className="text-white font-mont font-bold text-sm sm:text-base md:text-md px-3 py-1 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_12px_rgba(255,255,255,0.8)]"> 
            {children}
        </button>

    )
}

export default NavButton