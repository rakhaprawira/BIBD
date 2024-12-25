const Favorite = () => {
    console.log("Ini server")
    return(
        <>
        <div className="navbarajg" >
            <main className="flex flex-col justify-center items-center min-h-screen" >
                <h1 className="font-bold text-4xl" >You dont have Video</h1>
                <h2>Go to <a href="/pages/videos" >Video</a> page for more videos</h2>
            </main>
        </div>
        </>
    )
}

export default Favorite