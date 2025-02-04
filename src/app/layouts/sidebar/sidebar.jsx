"use client"
import Link from "next/link"
import style from "./sidebar.module.css"
import ButtonSection from "../../components/button_section/buttonsection"
import Button from "@/app/components/button/button"
import { useState } from "react"


const Sidebar = () => {
    const [open, setOpen ] = useState(true);
    return(
        <>
            {open ? (
            <aside className={style.mainSide} >
            <div className={style.divLuar} >
            <header className={style.header} >
                <h1 className="text-2xl px-3 max-[852px]:text-lg text-[var(--text2)] font-bold" >BIBD</h1>
                <button className={style.tombol} onClick={() => setOpen(!open)} >X</button>
            </header>
            <main className={style.mainDalam} >
                <ButtonSection link="/pages/main" >
                    Home
                </ButtonSection>
                <ButtonSection link="/pages/add-video" >
                    Add Videos
                </ButtonSection>
                <ButtonSection link="/pages/videos" >
                    Videos
                </ButtonSection>
                <ButtonSection link="/pages/bibd_music" >
                    Music
                </ButtonSection>
            </main>
        </div>
        </aside>
        ) : (
            <>

                <div>
                    <button onClick={() => setOpen(!open)} >MENU</button>
                </div>

            </>
        ) }
        </>
    )
}

export default Sidebar