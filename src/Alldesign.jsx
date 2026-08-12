import { Link } from 'react-router'
import Herosection from './Herosection';
import Herosection1 from './Herosection1';
import Signin from './Signin';
import Signin1 from './Signin1';
import Cta from './Cta';
import Cta1 from './Cta1';
import Bentogrid from './Bentogrid';
import Bentogrid1 from './Bentogrid1';
import Pricing from './Pricing';
import Pricing1 from './Pricing1';
import Newslettersections from './Newslettersections';
import Newslettersections1 from './Newslettersections1';
import Statsection from './Statssection';
import Statsection1 from './Statssection1';
import Project from './Project';
import { Key } from 'lucide-react';

function Alldesign() {

    const pages = [
        { name: "Herosection", key_page: "./Herosection" },
        { name: "Herosection1", key_page: "./Herosection1" },
        { name: "Signin", key_page: "./Signin" },
        { name: "Signin1", key_page: "./Signin1" },
        { name: "Cta", key_page: "./Cta" },
        { name: "Cta1", key_page: "./Cta1" },
        { name: "Bentogrid", key_page: "./Bentogrid" },
        { name: "Bentogrid1", key_page: "./Bentogrid1" },
        { name: "Pricing", key_page: "./Pricing" },
        { name: "Pricing1", key_page: "./Pricing1" },
        { name: "Newslettersections", key_page: "./Newslettersections" },
        { name: "Newslettersections1", key_page: "./Newslettersections1" },
        { name: "Statssection", key_page: "./Statssection" },
        { name: "Statssection1", key_page: "./Statssection1" },
        { name: "Project", key_page: "./Project" },
    ];

    return (
        <div className="bg-slate-500 min-h-full min-w-full">
            <div className="mx-auto p-7">
                <h1 className="text-4xl text-center text-white font-bold">All Design</h1>
                <div className="mx-auto flex flex-wrap items-center justify-center gap-4 lg:min-h-screen md:min-h-screen sm:min-h-screen mt-9 p-4">
                    {
                        pages.map((page, index) => (
                            <Link key={index} to={page.key_page}>
                                <div className="bg-blue-900 flex flex-col items-center justify-center gap-4 h-38 w-62 hover:h-40 hover:w-64 rounded-xl p-4 shadow-2xl/50 shadow-white text-left text-white">
                                    <h3 className='text-xl font-semibold'>{page.name}</h3>
                                    <p className=' text-gray-500 font-semibold'>Click to visit page</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Alldesign;