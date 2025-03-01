"use client"
import { useRef } from "react"
import Button from "@/app/components/button/button"


const Player = ({params}) => {

const content = useRef(null)

const handlePlay = () => {
    if(content.current.paused){
        content.current.play()
    }else{
        content.current.pause()
    }

}

const handleFullscreen = () => {
    content.current.requestFullscreen()
}

    return(
        <>
        <div className=" w-full flex flex-col min-h-screen justify-center items-center">
        <video className="max-w-[80%]" controls ref={content} width={400}>
            <source src={"https://cdn.videy.co/" + params.videoUrl + ".mp4"} type="video/mp4" />
        </video>
        <div className="button">
            <Button action={() => handlePlay()} padding="w-fit" >Play / Pause</Button>
        </div>
        <div className="buttonFull">
            <Button action={() => handleFullscreen()} padding="w-fit" >FullScreen</Button>
        </div>
        
        </div>
        </>
    )
}

export default Player