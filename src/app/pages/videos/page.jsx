import Card from "@/app/components/card/card"

const Videos = () => {
    return(
        <>
        
        <div className="navbarajg" >
            <main className="flex p-4 flex-col justify-center items-center" >
            <h1 className="font-bold text-4xl" >Video</h1>
            </main>
            <section className="flex flex- wrap " >
                <Card buttonLink="/pages/video_player" deskripsi="Nadia presentasi mengenai classmeet walaupun dia ga ngerti" img={process.env.IMG_Nadia} >
                    Presentasi Profesor
                </Card>
            </section>
        </div>
        
        </>
    )
}

export default Videos