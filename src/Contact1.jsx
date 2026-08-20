

import { Building2Icon, Mail, PhoneIcon } from 'lucide-react';
import React from 'react';

function Contact() {
    return (
        <div className='bg-black w-full min-h-screen py-9'>
            <div className="bg-gray-900 mx-auto flex items-start justify-between max-w-7xl border border-gray-400/50 rounded-xl min-h-screen px-6 lg:px-8">
                <div className='flex items-start justify-center w-[48%] mt-60'>
                    <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                        <div className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"></div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-left max-w-[90%]">
                        <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Get in touch</h2>
                        <p className="mt-4 text-lg/8 text-gray-400 font-medium">Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.</p>
                        <p className="mt-4 text-lg/8 text-gray-400 flex items-start justify-start gap-4 font-medium"><Building2Icon /> <span>545 Mavis Island
                            <br />Chicago, IL 99191.</span></p>
                        <p className="mt-2 text-lg/8 text-gray-400 flex items-start justify-start gap-4 font-medium"><PhoneIcon /> +1 (555) 234-5678</p>
                        <p className="mt-2 text-lg/8 text-gray-400 flex items-start justify-start gap-4 font-medium"><Mail /> hello@example.com</p>
                    </div>

                </div>
                <div className='border-r border-gray-600/50 mx-10 min-h-screen'>
                </div>
                <div className='flex items-start justify-end w-[48%] mt-60'>
                    <form action="#" method="POST" className="mx-auto w-[95%]">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                            <div>
                                <label for="first-name" className="block text-sm/6 font-semibold text-white" htmlFor="first-name">First name</label>
                                <div className="mt-1">
                                    <input id="first-name" type="text" name="first-name" autocomplete="given-name" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
                                </div>
                            </div>
                            <div>
                                <label for="last-name" className="block text-sm/6 font-semibold text-white" htmlFor="first-name">Last name</label>
                                <div className="mt-1">
                                    <input id="last-name" type="text" name="last-name" autocomplete="family-name" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label for="email" className="block text-sm/6 font-semibold text-white" htmlFor="first-name">Email</label>
                                <div className="mt-1">
                                    <input id="email" type="email" name="email" autocomplete="email" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label for="phone-number" className="block text-sm/6 font-semibold text-white" htmlFor="first-name">Phone number</label>
                                <div className="mt-1">
                                    <div className="flex rounded-md bg-white/5 outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                                        <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                            <select id="country" name="country" autocomplete="country" aria-label="Country" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2 pr-7 pl-3.5 text-base text-gray-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
                                                <option>US</option>
                                                <option>CA</option>
                                                <option>EU</option>
                                            </select>
                                            <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4">
                                                <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <input id="phone-number" type="text" name="phone-number" placeholder="123-456-7890" className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label for="message" className="block text-sm/6 font-semibold text-white" htmlFor="first-name">Message</label>
                                <div className="mt-1">
                                    <textarea id="message" name="message" rows="4" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"></textarea>
                                </div>
                            </div>
                            <div className="flex gap-x-4 sm:col-span-2">
                                <div className="flex h-6 items-center">
                                    <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-white/5 p-px inset-ring inset-ring-white/10 outline-offset-2 outline-indigo-500 transition-colors duration-200 ease-in-out has-checked:bg-indigo-500 has-focus-visible:outline-2">
                                        <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5"></span>
                                        <input id="agree-to-policies" type="checkbox" name="agree-to-policies" aria-label="Agree to policies" className="absolute inset-0 size-full appearance-none focus:outline-hidden" />
                                    </div>
                                </div>
                                <label for="agree-to-policies" className="text-sm/6 text-gray-400">
                                    By selecting this, you agree to our
                                    <a href="#" className="font-semibold whitespace-nowrap text-indigo-400"> privacy policy</a>.
                                </label>
                            </div>
                        </div>
                        <div className="mt-10 flex items-center justify-end w-full">
                            <button type="submit" className="block w-[32%] rounded-md bg-indigo-500 px-3.5 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;