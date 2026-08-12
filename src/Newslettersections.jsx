import { Link } from "react-router"

function Newslettersections() {
    return (
        <div className="bg-slate-900 mx-auto min-h-full min-w-full">
            <div className="mx-auto flex items-center justify-between p-7 w-full text-white">
                <div className="flex flex-col items-center justify-center gap-4 text-left p-2 my-7">
                    <h1 className="text-4xl font-bold">Subscribe to our newsletter</h1>
                    <p className="text-xl text-gray-200 font-bold">Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.</p>
                    <div className="flex gap-4 w-full">
                        <input type="text" className="bg-slate-800 p-2 w-[70%] border border-slate-700 rounded-sm" placeholder="Enter your email" />
                        <button className="bg-violet-700 p-2 rounded-sm">Subscribe</button>
                    </div>
                </div>
                <div>
                    <div>
                        <p>icon</p>
                    </div>
                    <p>Weekly articles</p>
                    <p>Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.</p>
                </div>
                <div>
                    <div>
                        <p>palm</p>
                    </div>
                    <p>No spam</p>
                    <p>Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.</p>
                </div>
            </div>
        </div>
    )
}

export default Newslettersections;