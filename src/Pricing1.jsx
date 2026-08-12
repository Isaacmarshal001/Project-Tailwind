import { Link } from "react-router";
import { ArrowRightIcon, Check } from "lucide-react";

function Pricing1() {
    return (
        <div className="bg-slate-900 min-h-full min-w-full">
            <div>
            </div>
            <div className="mx-auto flex flex-col items-center text-center text-white font-sans w-[67%]">
                <div className="flex flex-col items-center justify-center gap-4 mt-27">
                    <p className="text-violet-500 font-bold">Pricing</p>
                    <h1 className="text-6xl font-bold my-2">Choose the right plan for you</h1>
                    <p className="text-xl text-gray-400 font-bold w-[75%]">Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
                </div>

                <div className="flex flex-row items-center justify-center gap-9 text-left mt-20">
                    <div className="flex flex-col justify-between gap-4 border bg-slate-50/5 border-gray-700 h-128 w-107 rounded-4xl p-7">
                        <p className="text-violet-500 font-bold">Hobby</p>
                        <h2 className="text font-bold"><span className="text-4xl">$29</span> <span className="text text-gray-400 font-bold">/month</span></h2>
                        <p className="text-gray-400 font-bold">The perfect plan if you're just getting started with our product.</p>
                        <ul className="flex flex-col decoration-0 gap-2 text-gray-400 mt-7">
                            <li className="flex items-center gap-4"><Check className="text-violet-500" /> 25 products</li>
                            <li className="flex items-center gap-4"><Check className="text-violet-500" /> Up to 10,000 subscribers</li>
                            <li className="flex items-center gap-4"><Check className="text-violet-500" /> Advanced analytics</li>
                            <li className="flex items-center gap-4"><Check className="text-violet-500" /> 24-hour support response time</li>
                        </ul>
                        <button className="bg-violet-500 p-2 rounded-sm font-bold mt-7 cursor-pointer">Get started today</button>
                    </div>
                    <div className="flex flex-col justify-between gap-4 border bg-slate-50/5 border-gray-700 h-128 w-107 rounded-4xl p-7 z-10 shadow-4xl shadow-black">
                        <p className="text-violet-500 font-bold">Team</p>
                        <h2 className="text font-bold"><span className="text-4xl">$99</span> <span className="text text-gray-400 font-bold">/month</span></h2>
                        <p className="text-gray-400 font-bold">Dedicated support and infrastructure for your company.</p>
                        <ul className="flex flex-col decoration-0 gap-2 text-gray-400 mt-7">
                            <li className="flex items-center gap-4"><Check className="text-violet-500" /> Unlimited products</li>
                            <li className="flex items-center gap-4"><Check className="text-violet-500" /> Unlimited subscribers</li>
                            <li className="flex items-center gap-4"><Check className="text-violet-500" /> Advanced analytics</li>
                            <li className="flex items-center gap-4"><Check className="text-violet-500" /> Dedicated support representative</li>
                            <li className="flex items-center gap-4"><Check className="text-violet-500" /> Marketing automations</li>
                            <li className="flex items-center gap-4"><Check className="text-violet-500" /> Custom integrations</li>
                        </ul>
                        <button className="bg-violet-500 p-2 rounded-sm font-bold mt-7">Get started today</button>
                    </div>
                </div>
                <div className="bg-slate-500/5 flex flex-col justify-center my-9 rounded-2xl  text-left border border-slate-700 p-7">
                    <p className="text-violet-500 text-left">Discounted</p>
                    <div className="flex items-center justify-between gap-4 mt-4">
                        <p className="text-left w-[65%]">Dolor dolores repudiandae doloribus. Rerum sunt aut eum. Odit omnis non voluptatem sunt eos nostrum.</p>
                        <button className="bg-slate-50/15 flex items-center justify-center gap-4 p-2 rounded-sm">Buy discounted license <ArrowRightIcon /> </button>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Pricing1;