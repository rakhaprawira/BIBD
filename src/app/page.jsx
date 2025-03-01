// "use client"
import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex w-full justify-center gap-1 items-center flex-col min-h-screen sm:p-10">
      <Image src="https://www.svgrepo.com/show/483652/hacker.svg" width={100} height={100} alt="" />
      <h1 className=" text-2xl font-bold" > This Server is Fucking Down</h1>
      <h2>Go away from here kid</h2>
      <Link href={"pages/main"} >Go away</Link>
      {/* <Button action={() => {redirect("pages/main")}} padding="mt-2 w-[6rem]" > Go Away</Button>   */}
    </div>
  );
}
