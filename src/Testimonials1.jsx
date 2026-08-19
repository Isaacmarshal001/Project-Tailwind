import { PaperBag } from "lucide-react";
import { Link } from "react-router";

function Testimonials() {
    return (
        <div className="bg-slate-900 flex items-center min-h-screen w-full">
            <div className="mx-auto flex items-center justify-between text-left w-[80%]">
                <div className="flex flex-col justify-center gap-7 w-[48%] text-white text-left">
                    <h2 className="text-2xl flex items-center justify-start gap-2 font-bold"><PaperBag className="size-9" /> Tuple</h2>
                    <p className="font-medium mt-2">“Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”</p>
                    <div className="flex items-center gap-5 mt-5">
                        <img src="" alt="person1" className="bg-white w-11 h-11 rounded-full border-2 border-gray-600" />
                        <div className="flex flex-col items-start justify-center text-left">
                            <p className="font-medium">Judith Black</p>
                            <p className="text-gray-400 font-medium">CEO of Tuple</p>
                        </div>
                    </div>
                </div>
                <div className="border-l border-l-gray-500 h-75">
                </div>
                <div className="flex flex-col justify-center gap-7 w-[48%] text-white text-left">
                    <h2 className="text-2xl flex items-center justify-start font-bold"><span className="text-slate-900 bg-white rounded-sm p-1">Re</span>form</h2>
                    <p className="font-medium mt-2">“Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”</p>
                    <div className="flex items-center gap-5 mt-5">
                        <img src="" alt="person2" className="bg-white w-11 h-11 rounded-full border-2 border-gray-600" />
                        <div className="flex flex-col items-start justify-center text-left">
                            <p className="font-medium">Joseph Rodriguez</p>
                            <p className="text-gray-400 font-medium">CEO of Reform</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonials;