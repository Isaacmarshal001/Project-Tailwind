// import Tailwindicon from 'lucide-react'

function Signin() {
    return (
        <div className="bg-slate-900 flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center gap-4 p-4 text-white w-109 ">
                <img src="src\tailwind-css-brands-solid.png" alt="tailwind logo" className="w-12 mb-7" />
                <h2 className="text-2xl font-bold text-center mb-7">Sign in to your account</h2>
                <form action="#" className='flex flex-col justify-center text w-full mb-7'>
                    <label htmlFor="email" className=' font-semibold mb-1'>Email address</label>
                    <input type="email" name="email" id="email" required className='bg-slate-800 border border-gray-700 w-full py-1 rounded mb-7' />
                    <span className="flex items-center justify-between font-semibold mb-1">
                        <label htmlFor="password" className=' '>Password</label>
                        <a href="#" className=' text-purple-400'>Forgot password?</a>
                    </span>
                    <input type="password" name="password" id="password" required className='bg-slate-800 border border-gray-700 w-full py-1 rounded mb-7' />
                    <button className='bg-purple-400  font-semibold py-1 w-full rounded'><a href="#">Sign in</a></button>
                </form>
                <p className='text-center text-gray-500 font-semibold'>Not a member? <a href="#" className="text-purple-400 font-semibold">Start a 14days free trial</a></p>
            </div>
        </div>
    )
}
export default Signin