import { Link } from 'react-router'

function Herosection1() {
    return (
        <div className="flex flex-col min-h-screen text-center font-bold text-white w-screen bg-black">
            <div className="flex bg-transparent absolute top-0 left-0 z-10 items-center justify-between py-5 px-12  w-full">
                <div className="flex items-center justify-center">
                    <img src="/tailwind-css-brands-solid.png" alt="logo" className="w-7 font-bold" />
                </div>
                <div className="flex items-center justify-center gap-4">
                    <a href="#">Product</a>
                    <a href="#">Features</a>
                    <a href="#">Marketplace</a>
                    <a href="#">Company</a>
                </div>
                <div className="flex items-center justify-center">
                    <Link to="/signin1">Login</Link>
                </div>
            </div>

            <div className="flex items-center justify-center min-h-screen">
                <div className="flex flex-col items-center justify-center w-[50%] text-center mt-24">
                    <p className="flex items-center justify-center gap-4 text-gray-400 font-semibold border border-gray-400 rounded-2xl px-2 mb-7">Announcing our next round of funding. <a href="#" className="text-purple-600">Read more</a> </p>
                    <h1 className="text-white font-bold text-6xl mb-7">Data to enrich your online bussiness</h1>
                    <p className="text-lg text-gray-300 mb-7 font-semibold"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, quibusdam nostrum labore distinctio nobis modi iusto pariatur veniam. </p>
                    <div className="flex items-center justify-center gap-9">
                        <button className="bg-purple-600 py-2 px-5 rounded-lg font-semibold">Get started</button>
                        <button className="border-0 font-semibold">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection1;