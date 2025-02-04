import Link from "next/link"
const ButtonSection = (props) => {
    const {children, link} = props
    return(

        <>
        <div className=" w-[6rem] p-2 my-3" >
            <Link className="text-[var(--text2)] flex justify-center text-lg text-center" href={link} >{children}</Link>
        </div>

        </>


    )
}

export default ButtonSection