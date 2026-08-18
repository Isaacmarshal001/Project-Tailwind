import { Link } from "react-router";

function Testimonials() {
    return (
        <div className="bg-slate-800 flex items-center min-h-screen w-full">
            <div className="mx-auto flex items-center justify-between text-left w-[80%]">
                <div className="flex flex-col justify-center gap-7 w-[48%] text-white text-left">
                    <h1>Tuple</h1>
                    <p>“Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”</p>
                    <div>
                        <img src="" alt="person1" />
                        <div>
                            <p>Judith Black</p>
                            <p>CEO of Tuple</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-7 w-[48%] text-white text-left">
                    <h1>Reform</h1>
                    <p>“Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”</p>
                    <div>
                        <img src="" alt="person2" />
                        <div>
                            <p>Joseph Rodriguez</p>
                            <p>CEO of Reform</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonials;