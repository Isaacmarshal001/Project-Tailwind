import { Link } from "react-router"

function Newslettersections1() {
    return (
        <div className="bg-black min-h-screen min-w-screen">
            <div className="mx-auto bg-violet-600 flex items-center justify-center gap-7 p-7 border border-600/50 rounded-xlw-[95]">
                <div className="flex items-center text-left w-full">
                    <h1 className="text-4xl font-bold">Want product news and updates? Sign up for our newsletter.</h1>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex items-center justify-center gap-4">
                        <input type="text" />
                        <button>Subscribe</button>
                    </div>
                    <p>We care about your data. Read our privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default Newslettersections1;