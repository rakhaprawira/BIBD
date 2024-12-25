"use client"
import { useRef } from "react"
import Button from "@/app/components/button/button"
const Player = () => {

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
        <div className=" navbarajg player flex flex-col justify-center items-center">
        <video ref={content} width={300}>
            <source src="https://cdn.videy.co/n2xFXU0M1.mp4" type="video/mp4" />
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