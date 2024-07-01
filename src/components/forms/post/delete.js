"use client"
import apiService from "@/services/apiService"
export default function FormPostDelete({ postId, onDelete}) {

    const handlePostDelete = async (e) => {
        e.preventDefault()

        try {

            const postAction = await apiService.deletePost(postId)

            // Call the onDelete callback to update the posts list
            onDelete(postId)
        } catch (error) {
            console.error(error)
        }
    }

    return <>
        <form onSubmit={handlePostDelete}>
            <button type="submit" className="text-red-600 hover:text-red-900">Delete</button>
        </form>
    </>
}