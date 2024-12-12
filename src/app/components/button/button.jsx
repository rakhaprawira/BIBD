import Link from "next/link"

const Button = (props) => {
    const {children, padding, link} = props
    return(
        <>
        
        <div className={padding} >
            <Link href={link} className="border-2 border-[var(--text)] font-bold py-1.5 px-2.5 rounded " >{children}</Link>
        </div>
        
        </>
    )
}

export default Button