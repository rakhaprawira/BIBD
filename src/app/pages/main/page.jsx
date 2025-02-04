import Link from "next/link"
import style from "./main.module.css"

const Main = () => {

    return (
        <>
<main className="navbarajg flex flex-col justify-center items-center min-h-screen" >
    <h1 className={style.mainTitle} >Berapa umur kamu?</h1>
    <div className={style.buttonContainer}>
        <Link href="/pages/videos" className={style.successButton} >Diatas 18</Link>
        <Link href="/pages/favorite" className={style.failedButton} >Dibawah 18</Link>
    </div>
</main>
        </>
    )
}

export default Main