import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
import { useSession } from 'next-auth/react'
function Feed() {
    const { data: session, status } = useSession()
    return (
        <main className={` grid grid-cols-2 md:grid-cols-2 sm:max-w-2xl xl:grid-cols-3 xl:max-w-4xl
        mx-auto
        ${!session && "!grid-cols-2 !max-w-3xl"} `}>
            {/*Left Section */}
            <section className='col-span-2'>

                {/*Stories */}
                <Stories />

                {/**Posts */}
                <Posts />
            </section>
            {session && (
                <section className='hidden xl:inline-grid md:col-span-1'>
                    <div className='fixed top-20'>
                        {/**Mini Profile*/}
                        <MiniProfile />
                        {/**Suggestions */}
                        <Suggestions />
                    </div>
                </section>
            )
            }

        </main >
    )
}

export default Feed