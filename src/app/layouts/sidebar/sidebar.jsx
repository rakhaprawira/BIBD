import style from "./sidebar.module.css"
import Link from "next/link"


const Sidebar = () => {
    return(
        <>
            <div className="flex" >
            <aside className="h-screen w-60" >
                <nav className="h-full flex flex-col border-r-2 border-[#383838] shadow-xl" >
                    <div className="logo flex items-center border-b-2 border-[#383838] px-4 py-3 ">
                        <h1 className="text-3xl font-medium" >BIBD</h1>
                    </div>
                    <div className="container h-full overflow-auto overflow-x-hidden">
                        <ul className="flex flex-col gap-4 p-4 text-lg font-medium ">
                            <Link href="/pages/main" className={style.list}>
                                🏠 Home
                            </Link>
                            <Link href="/pages/add-video" className={style.list}>
                                📷 Add Video
                            </Link>
                            <Link href="/pages/videos" className={style.list}>
                                🎥 Video
                            </Link>
                        </ul>
                        </div>
                        <div className="footer border-t-2 border-[#383838] ">
                            <div className="user flex gap-1 p-3 ">
                                <div className="photo bg-blue-300 p-2 rounded font-bold ">
                                        <h1 className="text-blue-700" >BRI</h1>
                                </div>
                                <div className="idnt leading-4 bg-gray-300 p-2 rounded ">
                                    <h1 className="font-semibold" >RPY. S.Kom. MT</h1>
                                    <h2 className="text-xs" >Direktur Utama</h2>
                                </div>
                            </div>
                        </div>
                    </nav>
                </aside>
            </div>
        </>
    )
}

export default Sidebar