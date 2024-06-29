import Link from "next/link";

export default function Page() {

    return (
        <>
            <div className="flex justify-between mb-2 mt-5">
                <h1 className="text-[30px] font-semibold">Posts</h1>
                <Link href="/admin/posts/create" className="text-white bg-indigo-950 px-4 py-2 rounded-lg">Create Post</Link>
            </div>
            <hr />

            <table className="table-auto">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Title</td>
                        <td>Body</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}