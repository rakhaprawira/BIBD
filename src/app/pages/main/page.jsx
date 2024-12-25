import style from "./main.module.css"

const Main = () => {

    return (
        <>
<main className="navbarajg flex flex-col justify-center items-center min-h-screen" >
    <h1 className={style.mainTitle} >  <span className={style.how} >How</span> <span className={style.are} >are</span> you?</h1>
    <div className={style.buttonContainer}>
        <button className={style.successButton} >Good enough</button>
        <button className={style.failedButton} >Nah</button>
    </div>
</main>
        </>
    )
}

export default Main