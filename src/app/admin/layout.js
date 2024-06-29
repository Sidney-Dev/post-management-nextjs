import SidebarNavigation from "../components/sidebar-navigation"

export default function AdminLayout({ children }) {

    return (
        <div className="flex gap-5 h-screen px-4 py-4">
            <aside className="w-64 bg-indigo-900 rounded-2xl px-[30px] py-3">
                
                <h3 className="text-white mt-5 font-bold text-xl">Admin Sidebar</h3>

                <SidebarNavigation></SidebarNavigation>

            </aside>
            <section className="w-5/6">

                <main>
                    {children}
                </main>
            </section>
        </div>
    )
}