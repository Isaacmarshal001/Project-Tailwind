import { TreePalmIcon } from "lucide-react";
import { Link } from "react-router";

function Testimonials() {
    return (
        <div className="bg-slate-900 flex items-center min-h-screen w-full">
            <div className="mx-auto flex flex-col items-center justify-center gap-7 text-center w-[67%]">
                <h1 className="flex items-center justify-center gap-2 text-violet-500 text-2xl font-bold mt-4"><TreePalmIcon />Workcation</h1>
                <p className="text-2xl text-white font-bold">“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
                <img src="#" alt="person-image" className="bg-white w-11 h-11 rounded-full border border-violet-600 mt-4"/>
                <p className="text-white font-bold">Judith Black . <span className="text-gray-400">CEO of Workcation</span></p>
            </div>

        </div>
    )
}

export default Testimonials;