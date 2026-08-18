import { Link } from "react-router"

function Newslettersections1() {
    return (
        <div className="bg-black flex items-center justify-center w-full min-h-screen">
            <div className="bg-violet-700 flex items-center justify-between gap-7 border-gray-400 border text-white rounded-xl w-[95%] h-79">
                <div className="flex items-center justify-center w-[50%]">
                    <h1 className="text-4xl font-bold">Want product news and updates? <br />Sign up for our newsletter.</h1>
                </div>
                <form action="#" className="flex flex-col justify-center gap-4 w-[40%] text-left">
                    <div className="flex gap-4">
                        <input type="text" className="bg-gray-400/50 py-2 px-4 w-[68%] border border-gray-400/50 rounded-sm placeholder:text-white" placeholder="Enter your email" />
                        <button className="bg-white py-2 px-4 rounded-gray-200/50 text-violet-700 font-bold rounded-sm">Subscribe</button>
                    </div>
                    <p className="text-left text-gray-200">We care about your data. Read our <span className="text-white font-bold">privacy policy.</span></p>
                </form>
            </div>
        </div>
    )
}

export default Newslettersections1;