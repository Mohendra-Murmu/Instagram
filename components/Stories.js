import React, { useEffect, useState } from 'react'
import faker from '@faker-js/faker'
import Story from './Story'
import { useSession } from "next-auth/react"
function Stories() {
    const { data: session, status } = useSession();
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));
        //console.log(suggestions)
        setSuggestions(suggestions);
    }, [])
    return (
        <div className='flex space-x-2 p-8 bg-white 
        mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-hide'>
            {/** scrollbar-thin scrollbar-thumb-black */}

            {session && (
                <Story img={session.user.image} username={session.user.username} />
            )}
            {/**Faker.js */}
            {
                suggestions.map(profile => (
                    <Story key={profile.id} img={profile.avatar} username={profile.username} />
                ))
            }
        </div>
    )
}

export default Stories