import React from 'react'
import Post from './Post'

const posts = [
    {
        id: '123',
        username: 'Mahi',
        userImg: "https://m-murmu.vercel.app/static/83c766a9376b1665e55a2bf6922a57c2/08f62/mohendra-murmu.webp",
        postImg: "https://m-murmu.vercel.app/static/83c766a9376b1665e55a2bf6922a57c2/08f62/mohendra-murmu.webp",
        caption: "This is Dope!"
    },
    {
        id: '1231',
        username: 'Mahi',
        userImg: "https://m-murmu.vercel.app/static/83c766a9376b1665e55a2bf6922a57c2/08f62/mohendra-murmu.webp",
        postImg: "https://m-murmu.vercel.app/static/83c766a9376b1665e55a2bf6922a57c2/08f62/mohendra-murmu.webp",
        caption: "This is Dope!"
    },
    {
        id: '1232',
        username: 'Mahi',
        userImg: "https://m-murmu.vercel.app/static/83c766a9376b1665e55a2bf6922a57c2/08f62/mohendra-murmu.webp",
        postImg: "https://m-murmu.vercel.app/static/83c766a9376b1665e55a2bf6922a57c2/08f62/mohendra-murmu.webp",
        caption: "This is Dope!"
    },

]
function Posts() {
    return (
        <div className=''>
            {posts.map((post) => (
                <Post key={post.id}
                    id={post.id} username={post.username}
                    userImg={post.userImg} postImg={post.postImg} caption={post.caption} />
            ))}

        </div>
    )
}

export default Posts