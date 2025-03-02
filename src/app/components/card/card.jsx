
import Button from "../button/button"
import { redirect } from "next/navigation"
import style from "./card.module.css"   
const   Card = (props) => {
    const {children, img, deskripsi, buttonLink, provider} = props
    return(
        <>
        

        <div className={style.card}>
            <div className={style.cardBody}>
                <div>
                    {  provider == "videy" ?
                        (<video src={"https://cdn.videy.co/" + img + ".mp4"} alt="image" />)
                    :
                        (<video src={"https://dochi.co/uploads/" + img + ".mp4"} alt="image" />)
                    } 
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