"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import apiService from '@/services/apiService'

export default function PostForm({ id }) {

    const router = useRouter()

    const [post, setPost] = useState({})

    const fetchedPost = async () => {
        const data = await apiService.fetchPostById(id)
        console.log("fetchedPost data")
        console.log(data)
        setPost(data)
    }

    useEffect(() => {

        fetchedPost()

    }, [])

    const updatePostHandler = async (e) => {
        
        e.preventDefault()
      
        try {

            const updateRequest = await apiService.updatePost(id, post)
            router.push("/admin/posts")

        } catch(error) {

        }
    }

    return <>
        <form onSubmit={updatePostHandler} className="w-[600px] mx-auto">
            <div className="col-span-full">
                <label htmlFor="title" className="block text-base font-bold leading-6 text-gray-900">Title</label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300">
                        <input onChange={e => setPost({ ...post, title: e.target.value})} value={post.title} type="text" name="title" id="title" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Post title" />
                    </div>
                </div>
            </div>

            <div className="col-span-full mt-2">
                <label htmlFor="body" className="block text-base font-bold leading-6 text-gray-900">Body</label>
                <div className="mt-2">
                    <textarea onChange={e => setPost({ ...post, body: e.target.value})} id="body" name="body" rows="3" value={post.body} className="form-textarea block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400" placeholder="Post body">
                        
                    </textarea>
                </div>
            </div>

            <div className="mt-2">
                <button type="submit" className="rounded-lg bg-indigo-950 text-white p-2 w-[100px]">Save</button>
            </div>

        </form>
    </>
}