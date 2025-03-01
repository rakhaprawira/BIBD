"use client"
import Sidebar from "../sidebar/sidebar"
import { usePathname } from "next/navigation"

const AppShell = (props) => {
    const {children} = props
    const disableSidebar = ["/", "/pages"];
    const pathname = usePathname()
    return (

        <>
        <div className="flex">
        { !disableSidebar.includes(pathname) && <Sidebar />}
                {children}
        </div>
        </>

    )
}


export default AppShell