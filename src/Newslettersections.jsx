import { CalendarRangeIcon, HandFistIcon } from "lucide-react";
import { Link } from "react-router"

function Newslettersections() {
    return (
        <div className="bg-slate-900 mx-auto flex items-center justify-center min-h-screen min-w-full">
            <div className="mx-auto flex items-center justify-between p-7 w-[95%] text-white border border-gray-600/50 rounded-xl">
                <div className="flex flex-col items-center justify-center gap-4 text-left p-4 my-7 w-[41%] ">
                    <h1 className="text-4xl font-bold">Subscribe to our newsletter</h1>
                    <p className=" text-gray-200">Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.</p>
                    <form action="#" className="flex gap-4 w-full">
                        <input type="email" className="bg-slate-800 flex-3 p-2 border border-slate-700 rounded-sm" placeholder="Enter your email" required />
                        <button className="bg-violet-700 p-2 rounded-sm flex-1">Subscribe</button>
                    </form >
                </div>
                <div className="flex items-center justify-between w-[50%] gap-12">
                    <div className="flex flex-col items-start justify-between gap-4 text-left">
                        <div className="bg-violet-200/10 p-1 rounded-sm">
                            <CalendarRangeIcon />
                        </div>
                        <p className="font-bold">Weekly articles</p>
                        <p className="text-gray-400">Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.</p>
                    </div>
                    <div className="flex flex-col items-start justify-between gap-4 text-left">
                        <div className="bg-violet-200/10 p-1 rounded-sm">
                            <HandFistIcon />
                        </div>
                        <p className="font-bold">No spam</p>
                        <p className="text-gray-400">Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Newslettersections;