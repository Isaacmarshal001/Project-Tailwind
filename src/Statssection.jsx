import { Link } from "react-router"

function Statsection() {
    return (
        <div className="bg-black min-h-screen w-full">
            <div className="flex items-center justify-center min-h-screen w-full">
                <div className=" bg-gray-900 py-24 w-[95%] rounded-sm sm:py-32 px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base/7 text-gray-400">Transactions every 24 hours</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">44 million</dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base/7 text-gray-400">Assets under holding</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">$119 trillion</dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base/7 text-gray-400">New users annually</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">46,000</dd>
                        </div>
                    </dl>
                </div>
            </div>

        </div>
    )
}

export default Statsection;