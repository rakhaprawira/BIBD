import Form from "@/app/components/up-form/form"

const Favorite = () => {
    return(
        <>
        <div className="flex w-full justify-center items-center" >
            <main className="flex flex-col bg-[var(--card)] rounded-lg shadow-xl w-[80%] justify-center items-center h-[50vh]" >
                <div className="judul m-[3rem] ">
                <h1 className="font-bold text-2xl" >Add your own video</h1> 
                </div>
                <div>
                <Form/>
                </div>
            </main>
        </div>
        </>
    )
}

export default Favorite