"use client"
import Button from "../button/button"
import { redirect } from "next/navigation"
import style from "./card.module.css"   
const Card = (props) => {
    const {children, img, deskripsi, buttonLink} = props
    return(
        <>
        
        <div className="card">
            <div className={style.cardBody}>
                <div className="img">
                    <img src={img} alt="image" />
                </div>
                <div className={style.isi}>
                <h2 className="card-title">{children}</h2>
                <p>{deskripsi}</p>
                <div className="card-actions">
                    <Button action={()=> 
                        {
                            redirect(buttonLink)
                        }
                    } padding="py-2" >Watch</Button>
                </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Card