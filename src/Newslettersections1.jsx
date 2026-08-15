import { Link } from "react-router"

function Newslettersections1() {
    return (
        <div className="bg-black w-full h-full">
            <div className="mx-auto bg-violet-600 flex items-center justify-center gap-7 border border-600/50 rounded-xl w-[95%]">
                <div className="flex items-center text-left w-[60%]">
                    <h1 className="text-4xl font-bold">Want product news and updates? Sign up for our newsletter.</h1>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex items-center justify-center gap-4">
                        <input type="text" />
                        <button className="bg-purple-600 py-2 px-4 rounded-gray-200/50 rounded-xl">Subscribe</button>
                    </div>
                    <p className="text-left">We care about your data. Read our privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default Newslettersections1;