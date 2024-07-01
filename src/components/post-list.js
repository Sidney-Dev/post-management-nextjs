"use client"
import apiService from '@/services/apiService'
import { useEffect, useState } from 'react'
import Link from "next/link"
import FormPostDelete from "@/components/forms/post/delete"

export default function PostList() {

    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
      const postData = await apiService.fetchPosts()
      setPosts(postData)
    }

    useEffect(() => {
      fetchPosts()
    }, [])

    const handlePostDelete = async (postId) => {
       
        // Update the posts state by filtering out the deleted post
        setPosts(posts.filter(post => post.id !== postId))
    }
    
    return <>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="py-2 px-3">ID</th>
                <th className="py-2 px-3">Title</th>
                <th className="py-2 px-3">Body</th>
                <th className="py-2 px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-t border-gray-200">
                  <td className="py-2 px-3">{post.id}</td>
                  <td className="py-2 px-3">{post.title}</td>
                  <td className="py-2 px-3">{post.body}</td>
                  <td className="py-2 px-3">
                    <div className="flex">
                        <Link href={`/admin/posts/${post.id}/edit`} className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</Link>
                        <FormPostDelete postId={post.id} onDelete={handlePostDelete} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </>
}