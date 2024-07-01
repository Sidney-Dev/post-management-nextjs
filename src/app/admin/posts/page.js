import FormPostDelete from "@/app/components/forms/post/delete";
import Link from "next/link";

async function getData() {
    const postRequestResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    if (!postRequestResponse.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

    const postData = await postRequestResponse.json()
    return postData
}

export default async function Page() {

    const posts = await getData()
    return (
        <>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-semibold">Posts</h1>
          <Link href="/admin/posts/create" className="text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700">Create Post</Link>
        </div>
        <hr className="mb-4" />
  
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

                      <FormPostDelete post={post}/>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    )
}