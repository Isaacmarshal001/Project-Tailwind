
function Signin1() {
    return (
        <div className="bg-slate-900 flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center gap-4 p-4 text-white w-120 ">
                <div className='flex flex-col items-center justify-center text w-full mb-7'>
                    <img src="/tailwind-css-brands-solid.png" alt="tailwind logo" className="w-12 mb-7" />
                    <h2 className="text-2xl font-bold text-center">Sign in to your account</h2>
                </div>
                <div className='flex bg-slate-800 items-center justify-center text w-full mb-7 border border-gray-700 rounded-lg p-9'>
                    <form action="#" className='flex flex-col justify-center text w-full my-7'>
                        <label htmlFor="email" className=' font-semibold mb-1'>Email address</label>
                        <input type="email" name="email" id="email" required className='bg-slate-700 border border-gray-700 w-full py-1 rounded mb-7' />
                        <span className="flex items-center justify-start font-semibold mb-1">
                            <label htmlFor="password">Password</label>
                        </span>
                        <input type="password" name="password" id="password" required className='bg-slate-700 border border-gray-700 w-full py-1 rounded mb-5' />
                        <div className="flex items-center justify-between font-semibold mb-4">
                            <span className="flex gap-2">
                                <input type="checkbox" className="bg-gray-700s" />
                                <label>Remember me</label>
                            </span>
                            <a href="#" className=' text-purple-400'>Forgot password?</a>
                        </div>
                        <button className='bg-purple-400  font-semibold py-1 w-full rounded mb-9'><a href="#">Sign in</a></button>
                        <div className="flex items-center justify-between gap-1">
                            <hr className="w-[25%] text-xl text-gray-700 p-0 flex items-center justify-centers" />
                            <p className="items-center justify-center p-0">or continue with</p>
                            <hr className="w-[25%] text-xl text-gray-700 p-0 flex items-center justify-centers" />
                        </div>
                        <div className='flex items-center justify-between text w-full mt-9'>
                            <span className="bg-gray-700 flex items-center justify-center gap-2 rounded-sm p-2 w-[48%]">
                                <img src="#" alt="Github" />
                                <a href="#">Github</a>
                            </span>
                            <span className="bg-gray-700 flex items-center justify-center gap-2 rounded-sm p-2 w-[48%]">
                                <img src="#" alt="linkedin" />
                                <a href="#">LikedIn</a>
                            </span>
                        </div>
                    </form>
                </div>

                <div className='flex items-center justify-center text w-full mb-7'>
                    <p className='text-center text-gray-500 font-semibold'>Not a member? <a href="#" className="text-purple-400 font-semibold">Start a 14days free trial</a></p>
                </div>
            </div>
        </div>
    )
}
export default Signin1 