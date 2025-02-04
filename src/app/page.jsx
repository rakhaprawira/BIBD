// "use client"
import Link from "next/link";
import Button from "./components/button/button";
// import { redirect } from 'next/navigation'


export default function Home() {
  return (
    <div className="flex justify-center gap-1 items-center flex-col min-h-screen sm:p-10">
      <img src="https://www.svgrepo.com/show/483652/hacker.svg" width={100} alt="" />
      <h1 className=" text-2xl font-bold" > This Server is Fucking Down</h1>
      <h2>Go away from here kid</h2>
      <Link href={"pages/main"} >Go away</Link>
      {/* <Button action={() => {redirect("pages/main")}} padding="mt-2 w-[6rem]" > Go Away</Button>   */}
    </div>
  );
}
