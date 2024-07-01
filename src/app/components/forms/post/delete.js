"use client"
import { useRouter } from 'next/navigation'

export default function FormPostDelete(props) {

    const router = useRouter()

    const handlePostDelete = async (e) => {
        e.preventDefault()

        const deletePostReq = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.post.id}`, {
            method: 'DELETE',
        });

        const response = await deletePostReq.json()
        console.log(response)
        router.push("/admin/posts")
    }

    return <>
        <form onSubmit={handlePostDelete}>
            <button type="submit" className="text-red-600 hover:text-red-900">Delete</button>
        </form>
    </>
}