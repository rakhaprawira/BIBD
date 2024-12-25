"use client"

const Button = (props) => {
    const {children, padding, action} = props
    return(
        <>
        
        <div className={padding} >
            <button onClick={action} className="border-2 border-[var(--text)] font-bold py-0.5 px-1 w-full rounded hover:bg-[var(--text)] hover:text-[var(--background)] transition duration-200 " >{children}</button>
        </div>
        
        </>
    )
}

export default Button