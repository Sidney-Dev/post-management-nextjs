"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PostForm() {

    const router = useRouter()
    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    const createPostHandler = async (e) => {
        
        e.preventDefault()
        
        try {
            const postRequestResponse = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                  ...post,
                  userId: 1,
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            })
    
            const postResponseData = await postRequestResponse.json()
    
            console.log(postResponseData) 

            router.push("/admin/posts")

        } catch(error) {
            //handle errors here
            console.log(error)
        }
      
    }

    const inputUpdated = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
        console.log(`Prop ${e.target.name}`)
        console.log(`Value ${e.target.value}`)
    }

    return <>
        <form onSubmit={createPostHandler} className="w-[600px] mx-auto" method='POST'>
            <div className="col-span-full">
                <label htmlFor="title" className="block text-base font-bold leading-6 text-gray-900">Title</label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300">
                        <input onChange={inputUpdated} type="text" name="title" id="title" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Post title" />
                    </div>
                </div>
            </div>

            <div className="col-span-full mt-2">
                <label htmlFor="body" className="block text-base font-bold leading-6 text-gray-900">Body</label>
                <div className="mt-2">
                    <textarea onChange={inputUpdated} id="body" name="body" rows="3" className="form-textarea block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400" placeholder="Post body"></textarea>
                </div>
            </div>

            <div className="mt-2">
                <button type="submit" className="rounded-lg bg-indigo-950 text-white p-2 w-[100px]">Save</button>
            </div>

        </form>
    </>
}