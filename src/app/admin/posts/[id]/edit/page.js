import PostForm from "@/components/forms/post/update"

export default function Page({ params }) {

    return (
        <>
            <PostForm id={params.id} />
        </>
    )
}