import Link from "next/link";
import PostList from "@/components/post-list";

export default async function Page() {

    return (
        <>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-semibold">Posts</h1>
          <Link href="/admin/posts/create" className="text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700">Create Post</Link>
        </div>
        <hr className="mb-4" />
  
        <PostList />
      </>
    )
}