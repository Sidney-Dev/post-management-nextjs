import Link from "next/link"

export default function SidebarNavigation() {

    return (
        <nav>
            <ul className="mt-4">
                <Link className="block text-white font-xl mb-2 tracking-wider" href="/admin">Dashboard</Link>
                <Link className="block text-white font-xl mb-2 tracking-wider" href="/admin/posts">Posts</Link>
            </ul>
        </nav>
    )
    
}