"use client"
import Card from "@/app/components/card/card"
import { useEffect, useState } from "react"

const Videos = () => {
const [data, setData] = useState([])
useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API)
    .then(res => {
        return res.json()
    })
    .then((data) => setData(data))
},[])



    return(
        <>
        
        <div className="w-full" >
            <main className="flex p-4 flex-col justify-center items-center" >
            <h1 className="font-bold text-4xl" >Video</h1>
            </main>
            <section className="flex flex-wrap justify-center items-center" >
                { data.length > 0 ? data.map((r) => {
                return (
                <Card key={r.id} provider={r.provider} buttonLink={"/pages/video_player/" + r.url} deskripsi={r.deskripsi} img={r.url} >
                    {r.title}
                </Card>
                )})
                :
                (<h1>Loading...</h1>)
            }
            </section>
        </div>
        
        </>
    )
}

export default Videos