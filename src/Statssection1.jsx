import { Link } from "react-router"

function Statsection1() {
    return (
        <div className="bg-black min-h-screen w-full">
            <div className="flex items-center justify-center min-h-screen w-full">
                <div className="mx-auto bg-gray-900 flex flex-col items-center justify-center p-7 border border-gray-500/50 rounded-2xl w-[98%] text-center text-white">
                    <div className="flex flex-col items-center justify-center gap-4 mt-18">
                        <h1 className="text-5xl font-bold">Trusted by creators worldwide</h1>
                        <p className="font-bold mt-2">Lorem ipsum dolor sit amet consect adipisicing possimus.</p>
                    </div>
                    <div className="flex items-center justify-between w-full mt-15 mb-22 gap-1">
                        <div className="bg-gray-500/15 w-[25%] py-4 rounded-l-2xl">
                            <h2 className="text-2xl font-bold">8,000+</h2>
                            <p className="font-medium">Creators on the platform</p>
                        </div>
                        <div className="bg-gray-500/15 w-[25%] py-4">
                            <h2 className="text-2xl font-bold">3%</h2>
                            <p className="font-medium">Flat platform fee</p>
                        </div>
                        <div className="bg-gray-500/15 w-[25%] py-4">
                            <h2 className="text-2xl font-bold">99.9%</h2>
                            <p className="font-medium">Uptime guarantee</p>
                        </div>
                        <div className="bg-gray-500/15 w-[25%] py-4 rounded-r-2xl">
                            <h2 className="text-2xl font-bold">$70M</h2>
                            <p className="font-medium">Paid out to creators</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Statsection1;