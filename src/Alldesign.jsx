import { Link } from 'react-router'
import Herosection from './Herosection';
import Herosection1 from './Herosection1';
import Signin from './Signin';
import Signin1 from './Signin1';
import Cta from './Cta';
import Cta1 from './Cta1';
import Bentogrid from './Bentogrid';
import Bentogrid1 from './Bentogrid1';
import { Key } from 'lucide-react';

function Alldesign() {

    const pages = [
        { name: "Herosection", Key_page: "./Herosection" },
        { name: "Herosection1", Key_page: "./Herosection1" },
        { name: "Signin", Key_page: "./Signin" },
        { name: "Signin1", Key_page: "./Signin1" },
        { name: "Cta", Key_page: "./Cta" },
        { name: "Cta1", Key_page: "./Cta1" },
        { name: "Bentogrid", Key_page: "./Bentogrid" },
        { name: "Bentogrid1", Key_page: "./Bentogrid1" },
    ];

    return (
        <div className="mx-auto bg-slate-700 flex flex-col items-center justify-center min-h-screen p-7">
            <h1>All Design</h1>
            <div className="mx-auto flex flex-wrap items-center  gap-4 min-h-screen p-4">
                {
                    pages.map((pages, index) => (
                        <Link key={index} to={pages.Key_page}>
                            <div className="bg-blue-900 min-h-15 flex flex-col items-center justify-center gap-4 rounded-xl py-4 px-= hover:h-14 hover:w-30 text-left text-white">
                                <h3 className='text-xl font-semibold'>{pages.name}</h3>
                                <p className=' text-gray-500 font-semibold'>Click to visit page</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Alldesign;
