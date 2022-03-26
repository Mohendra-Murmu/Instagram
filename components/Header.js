import Image from 'next/image'
import React from 'react'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    MenuIcon,
    PaperAirplaneIcon
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
function Header() {
    return (
        <div className='shadow-sm sticky border-b bg-white top-0 z-50'>
            <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
                {/**Left Section */}

                <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
                    <Image src="/instagram_logo.png" alt="Logo" layout='fill' objectFit='contain' />
                </div>
                <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
                    <Image src="/logo.png" alt="Logo" layout='fill' objectFit='contain' />
                </div>

                {/**Middle //Search */}
                <div className='max-w-xs'>
                    <div className='relative mt-1 p-3 rounded-md'>
                        <div className='absolute inset-y-0 pl-3 flex items-center
                    pointer-events-none '>
                            <SearchIcon className='h-5 w-5 text-gray-500' />
                        </div>
                        <input
                            className='bg-gray-50 block w-full pl-10 
                        sm:text-sm border-gray-200 focus:ring-black focus:border-black 
                        rounded-md'
                            type="text"
                            placeholder='Search' />
                    </div>
                </div>
                {/**Right Section */}
                <div className='flex items-center justify-end space-x-4'>
                    <HomeIcon className=' navBtn' />
                    <MenuIcon className='h-6 md:hidden cursor-pointer' />
                    <div className='relative navBtn'>
                        <PaperAirplaneIcon className='navBtn rotate-45' />
                        <div className='absolute -top-1 -right-2 text-sm w-5 h-5
                         bg-red-500 rounded-full flex items-center
                        justify-center animate-pulse text-white
                        '>3</div>
                        {/** */}
                    </div>
                    <PlusCircleIcon className=' navBtn' />
                    <UserGroupIcon className='navBtn' />
                    <HeartIcon className=' navBtn' />
                    <img src="https://m-murmu.vercel.app/static/83c766a9376b1665e55a2bf6922a57c2/08f62/mohendra-murmu.webp" alt="Profiole Pic"
                        className='h-10 rounded-full cursor-pointer' />
                </div>

            </div>
        </div>
    )
}

export default Header