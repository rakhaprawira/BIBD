import ButtonSection from "../button_section/buttonsection"

const Sidebar = () => {
    return (
        <>
        
        <div className="flex bg-[var(--sidebar)] min-h-screen w-[16%] fixed duration-300 hover:shadow-[5px_1px_90px] " >
            <div className="flex justify-start items-center flex-col " >
            <header className="p-2" >
                <h1 className="text-2xl px-3 text-[var(--text2)] font-bold" >Rakha's</h1>
            </header>
            <main className="ml-5" >
                <ButtonSection style="text-[var(--text2)] text-lg " link="/" >
                    <h1>Home</h1>
                </ButtonSection>
                <ButtonSection style="text-[var(--text2)] text-lg" link="/pages/favorite" >
                    <h1>
                        Favorite
                    </h1>
                </ButtonSection>
                <ButtonSection style="text-[var(--text2)] text-lg" link="/" >
                    <h1>Videos</h1>
                </ButtonSection>
            </main>
        </div>
        </div>
        </>
    )
}

export default Sidebar