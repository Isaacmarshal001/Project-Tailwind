
function Bentogrid1() {
    return (
        <div class="bg-gray-900 py-24 sm:py-32">
            <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 class="text-base/7 font-semibold text-indigo-400">Deploy faster</h2>
                <p class="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-white sm:text-5xl">Everything you need to deploy your app</p>
                <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-rows-2">
                    <div class="grid lg:grid-cols-2">
                        <div class="relative lg:row-span-2">
                            <div class="absolute inset-px rounded-tl-4xl bg-gray-800 lg:rounded-tl-4xl"></div>
                            <div class="relative flex h-full flex-col overflow-hidden rounded-tl-[calc(var(--radius-lg)+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                                <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <p class="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Mobile friendly</p>
                                </div>
                                <div class="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                    <div class="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-white/20">
                                        <img src="./bento-03-mobile-friendly.png" alt="" class="size-full object-cover object-top" />
                                    </div>
                                </div>
                            </div>
                            <div class="pointer-events-none absolute inset-px rounded-tl-4xl shadow-sm outline outline-white/15 lg:rounded-tl-4xl"></div>
                        </div>
                        <div class="relative max-lg:row-start-1">
                            <div class="absolute inset-px rounded-tr-4xl bg-gray-800 max-lg:rounded-t-4xl"></div>
                            <div class="relative flex h-full flex-col overflow-hidden rounded-tr-[calc(var(--radius-4xl)+5px)] max-lg:rounded-tr-[calc(2rem+1px)]">
                                <div class="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p class="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Performance</p>
                                </div>
                                <div class="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                    <img src="./dark-bento-03-performance.png" alt="" class="w-full max-lg:max-w-xs" />
                                </div>
                            </div>
                            <div class="pointer-events-none absolute inset-px rounded-tr-4xl shadow-sm outline outline-white/15 max-lg:rounded-tr-4xl"></div>
                        </div>
                    </div >

                    <div class="grid lg:grid-cols-3">
                        <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                            <div class="absolute inset-px bg-gray-800"></div>
                            <div class="relative flex h-full flex-col overflow-hidden">
                                <div class="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p class="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Security</p>
                                    <p class="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.</p>
                                </div>
                                <div class="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                    <img src="./dark-bento-03-security.png" alt="" class="h-[min(152px,40cqw)] object-cover" />
                                </div>
                            </div>
                            <div class="pointer-events-none absolute inset-px shadow-sm outline outline-white/15"></div>
                        </div>
                        <div class="relative lg:row-span-2">
                            <div class="absolute inset-px rounded-bl-4xl bg-gray-800 max-lg:rounded-bl-4xl lg:rounded-bl-4xl"></div>
                            <div class="relative flex h-full flex-col overflow-hidden rounded-bl-[calc(var(--radius-lg)+1px)] max-lg:rounded-bl-[calc(2rem+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                                <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <p class="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Powerful APIs</p>
                                </div>
                                <div class="relative min-h-120 w-full grow">
                                    <div class="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900/60 outline outline-white/10">
                                        <div class="flex bg-gray-900 outline outline-white/5">
                                            <div class="-mb-px flex text-sm/6 font-medium text-gray-400">
                                                <div class="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">NotificationSetting.jsx</div>
                                                <div class="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                                            </div>
                                        </div>
                                        <div class="px-6 pt-6 pb-14">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pointer-events-none absolute inset-px rounded-bl-4xl shadow-sm outline outline-white/15 max-lg:rounded-bl-4xl lg:rounded-bl-4xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Bentogrid1;
