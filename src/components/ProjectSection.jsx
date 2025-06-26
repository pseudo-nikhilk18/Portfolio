import ProjectCard from "./ProjectCard";
import emoji_one from "../assets/emoji_one.jpg"
import emoji_two from "../assets/emoji_two.jpg"
import emoji_3 from "../assets/emoji_3.jpg"


const ProjectSection = () => {
    return (
        <div className="max-w-5xl mx-auto flex flex-col">

            <div className="w-full rounded-xl p-6 flex flex-row items-start gap-6 min-h-[350px] 
                bg-gradient-to-br from-zinc-800/90 to-black/90
                shadow-[0_10px_25px_-5px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)] 
                backdrop-blur-md border border-zinc-700 max-sm:flex-col max-md:flex-col">

                <div className="flex-[1] min-w-[320px] max-w-[350px] h-full">
                    <ProjectCard image={emoji_one} title="Project 1"/>
                </div>

                <div className="flex-[2] h-full flex flex-col items-start text-left mx-3 my-1">

                    <div className="text-3xl items-start font-bold text-white font-mont">
                        Project 1 (Coming Soon)

                        <div className=" mt-2 h-0.5 w-14/10 bg-gradient-to-r from-white to-zinc-800" />

                    </div>

                    <p className="text-zinc-300 leading-relaxed text-sm sm:text-base font-mont mt-6">
                        "Lorem ipsum dolor sit amet, consecamus et arcu quis enim fermentum pulvinar. Nulla facilisi Lorem ipsum dolor sit amet, consecamus et arcu quis enim fermentum pulvinar. Nulla facilisi Lorem ipsum dolor sit amet, consecamus et arcu quis enim fermentum pulvinar. Nulla facilisi. Donec dapibus ligula eget enim ultricies, id tincidunt magna venenatis.                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique nisi id libero laoreet, non molestie justo fringilla. Nam nec nulla eget mauris ultricies sodales ac id tortor. Vivamus et arcu quis enim fermentum pulvinar. Nulla facilisi. Donec dapibus ligula eget enim ultricies, id tincidunt magna venenatis.

                    </p>

                </div>
            </div>


            <div className="w-full rounded-xl p-6 flex items-start gap-6 min-h-[350px] 
                bg-gradient-to-br from-zinc-800/90 to-black/90
                shadow-[0_10px_25px_-5px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)] 
                backdrop-blur-md border border-zinc-700 flex-row-reverse mt-20 max-sm:flex-col max-md:flex-col">

                <div className="flex-[1] min-w-[320px] max-w-[350px] h-full">
                    <ProjectCard image={emoji_two} title="Project 2"/>
                </div>

                <div className="flex-[2] h-full flex flex-col items-start text-left mx-3 my-1">

                    <div className="text-3xl items-start font-bold text-white font-mont">
                        Project 2 (Loading)

                        <div className=" mt-2 h-0.5 w-14/10 bg-gradient-to-r from-white to-zinc-800" />

                    </div>

                    <p className="text-zinc-300 leading-relaxed text-sm sm:text-base font-mont mt-6">
                        "Lorem ipsum dolor sit amet, consecamus et arcu quis enim fermentum pulvinar. Nulla facilisi Lorem ipsum dolor sit amet, consecamus et arcu quis enim fermentum pulvinar. Nulla facilisi Lorem ipsum dolor sit amet, consecamus et arcu quis enim fermentum pulvinar. Nulla facilisi. Donec dapibus ligula eget enim ultricies, id tincidunt magna venenatis.                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique nisi id libero laoreet, non molestie justo fringilla. Nam nec nulla eget mauris ultricies sodales ac id tortor. Vivamus et arcu quis enim fermentum pulvinar. Nulla facilisi. Donec dapibus ligula eget enim ultricies, id tincidunt magna venenatis.

                    </p>

                </div>
            </div>


            <div className="w-full rounded-xl p-6 flex flex-row items-start gap-6 min-h-[350px] 
                bg-gradient-to-br from-zinc-800/90 to-black/90
                shadow-[0_10px_25px_-5px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)] 
                backdrop-blur-md border border-zinc-700 mt-20 max-sm:flex-col max-md:flex-col">
                <div className="flex-[1] min-w-[320px] max-w-[350px] h-full">
                    <ProjectCard image={emoji_3} title="Project 3"/>
                </div>

                <div className="flex-[2] h-full flex flex-col items-start text-left mx-3 my-1">

                    <div className="text-3xl items-start font-bold text-white font-mont">
                        Project 3 (Cooking)

                        <div className=" mt-2 h-0.5 w-14/10 bg-gradient-to-r from-white to-zinc-800" />

                    </div>

                    <p className="text-zinc-300 leading-relaxed text-sm sm:text-base font-mont mt-6">
                        "Lorem ipsum dolor sit amet, consecamus et arcu quis enim fermentum pulvinar. Nulla facilisi Lorem ipsum dolor sit amet, consecamus et arcu quis enim fermentum pulvinar. Nulla facilisi Lorem ipsum dolor sit amet, consecamus et arcu quis enim fermentum pulvinar. Nulla facilisi. Donec dapibus ligula eget enim ultricies, id tincidunt magna venenatis.                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique nisi id libero laoreet, non molestie justo fringilla. Nam nec nulla eget mauris ultricies sodales ac id tortor. Vivamus et arcu quis enim fermentum pulvinar. Nulla facilisi. Donec dapibus ligula eget enim ultricies, id tincidunt magna venenatis.

                    </p>

                </div>
            </div>

        </div>
    )
}

export default ProjectSection;