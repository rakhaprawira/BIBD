import Link from "next/link"
import style from "./sidebar.module.css"
import ButtonSection from "../../components/button_section/buttonsection"

const Sidebar = () => {
    return (
        <>
        
        <aside className={style.mainSide} >
            <div className={style.divLuar} >
            <header className={style.header} >
                <Link href="/" className="text-2xl px-3 text-[var(--text2)] font-bold" >Rakha's</Link>
            </header>
            <main className={style.mainDalam} >
                <ButtonSection style="text-[var(--text2)] text-lg " link="/pages/main" >
                    <h1>Home</h1>
                </ButtonSection>
                <ButtonSection style="text-[var(--text2)] text-lg" link="/pages/favorite" >
                    <h1>
                        Favorite
                    </h1>
                </ButtonSection>
                <ButtonSection style="text-[var(--text2)] text-lg" link="/pages/videos" >
                    Videos
                </ButtonSection>
            </main>
        </div>
        </aside>
        </>
    )
}

export default Sidebar