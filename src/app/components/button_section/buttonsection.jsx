import Link from "next/link"
const ButtonSection = (props) => {
    const {children, link, style} = props
    return(

        <>
        <div className=" w-[6rem] p-2 my-3 " >
            <Link className={style} href={link} >{children}</Link>
        </div>

        </>


    )
}

export default ButtonSection