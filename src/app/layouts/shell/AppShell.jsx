"use client"
import Sidebar from "../sidebar/sidebar"
import { usePathname } from "next/navigation"

const AppShell = (props) => {
    const {children} = props
    const disableSidebar = ["/", "/pages"];
    const pathname = usePathname()
    return (

        <>
        { !disableSidebar.includes(pathname) && <Sidebar/> }
        {children}
        </>

    )
}


export default AppShell