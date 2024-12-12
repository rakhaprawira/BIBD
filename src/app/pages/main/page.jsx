import Sidebar from "@/app/components/sidebar/sidebar"

const Main = () => {
    return (
        <>
        <Sidebar/>
<main className="flex justify-center items-center min-h-screen" >
    <h1 className=" font-bold text-3xl" >This is main page!</h1>
</main>
        </>
    )
}

export default Main