import React from 'react'
import { getProviders, signIn } from "next-auth/react"
import Header from "../../components/Header"
import Head from 'next/head'
function SignIn({ providers }) {
    return (
        <>
            <Head>
                <title>Login : Instagram</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-24 px-14 text-center'>
                <img src="/instagram_logo.png"
                    className='w-80'
                    alt="" />
                <p className='italic text-xs'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias.
                </p>
                <div className='mt-40'>
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button
                                className='p-3 bg-blue-500 rounded-lg text-white'
                                onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

export async function getServerSideProps(context) {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}

export default SignIn