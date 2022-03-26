import React from 'react'

function MiniProfile() {
    return (
        <div className='flex items-center justify-between mt-14 ml-10'>
            <img src="https://m-murmu.vercel.app/static/83c766a9376b1665e55a2bf6922a57c2/08f62/mohendra-murmu.webp"
                alt=""
                className='rounded-full border p-[2px] w-16 h-16'
            />
            <div className='flex-1 mx-4'>
                <h2 className='font-bold'>Darling</h2>
                <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
            </div>
            <button className='text-blue-400 text-sm font-semibold'>Sign Out</button>
        </div>
    )
}

export default MiniProfile