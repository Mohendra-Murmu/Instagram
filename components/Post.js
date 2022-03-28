import React, { useEffect, useState } from 'react'
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from '@heroicons/react/outline'
import Moment from "react-moment"
import {
    HeartIcon as HeartIconFilled
} from '@heroicons/react/solid'
import { useSession } from 'next-auth/react';
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
function Post({ id, username, userImg, postImg, caption }) {
    const { data: session, status } = useSession();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);
    useEffect(
        () => onSnapshot(
            query(collection(db, 'posts', id, 'comments'),
                orderBy('timestamp', 'desc')
            ),
            (snapshot) => setComments(snapshot.docs))
        , [db, id]);

    //Likes 
    useEffect(
        () => onSnapshot(collection(db, 'posts', id, 'likes'),
            (snapshot) => setLikes(snapshot.docs))
        , [db, id]);
    //unlike
    useEffect(
        () =>
            setHasLiked(
                likes.findIndex((like) => (like.id === session?.user?.uid)) !== -1
            )
        , [likes]);

    const likePost = async (e) => {
        if (hasLiked) {
            await deleteDoc(doc(db, 'posts', id, "likes", session?.user?.uid));
        } else {
            await setDoc(doc(db, 'posts', id, 'likes', session?.user?.uid), {
                username: session.user.username,
            })
        }
    }

    const sendComment = async (e) => {
        e.preventDefault();
        const commentToSend = comment;

        setComment('');

        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        })
    }
    return (
        <div className='bg-white my-7 border rounded-sm'>
            {/**Header */}
            <div className='flex items-center p-2'>
                <img src={userImg} alt=""
                    className='rounded-full h-12 object-contain border p-1 mr-3' />
                <p className='flex-1 font-bold'>{username}</p>
                <DotsHorizontalIcon className='h-5' />
            </div>
            {/**img */}
            <img src={postImg} alt=""
                className='object-cover w-full'
            />
            {/**Buttons */}
            {session && (
                <div className='flex justify-between px-4 pt-4'>
                    <div className='flex space-x-4 '>
                        {hasLiked ? (
                            <HeartIconFilled onClick={likePost} className='postBtn text-red-500' />
                        ) : (
                            <HeartIcon onClick={likePost} className='postBtn' />
                        )
                        }

                        <ChatIcon className='postBtn' />
                        <PaperAirplaneIcon className='postBtn rotate-45' />
                    </div>
                    <BookmarkIcon className='postBtn' />
                </div>

            )}

            {/**caption */}
            <div className=' items-center justify-start p-5'>
                {likes.length > 0 && (
                    <p className='font-bold mb-2'>{likes.length} like{likes.length > 1 && ('s')}</p>
                )}
                <div className='flex'>
                    <img src={userImg} alt="" className='h-6 rounded-full' />
                    <p className='pl-2 truncate'>
                        <span className='font-bold mr-1' >{username} </span>
                        {caption}
                    </p>
                </div>

            </div>
            {/**comments */}
            {comments.length > 0 && (
                <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
                    {comments.map((comment) => (
                        <div key={comment.id} className="flex items-center space-x-2 mb-3">
                            <img src={comment.data().userImage} alt="" className='h-5 rounded-full' />
                            <p className='flex-1 text-sm'>
                                <span className='font-bold'>{comment.data().username}</span>
                                {" "}
                                {comment.data().comment}
                            </p>
                            <Moment fromNow className='text-xs pr-5'>
                                {comment.data().timestamp?.toDate()}
                            </Moment>
                        </div>
                    ))}
                </div>
            )}

            {/**inputbox */}
            {session && (
                <form className='flex items-center p-4'>
                    <EmojiHappyIcon className='h-7' />
                    <input
                        type="text"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        className='border-none flex-1 focus:ring-0 outline-none'
                        placeholder='Add a comment...'
                    />
                    <button type='submit' disabled={!comment.trim()}
                        onClick={sendComment}
                        className='font-semibold text-blue-400'>Post</button>
                </form>
            )}

        </div>
    )
}

export default Post