import Button from "./components/button/button";

export default function Home() {
  return (
    <div className="flex justify-center gap-1 items-center flex-col min-h-screen sm:p-10">
      <img src="https://www.svgrepo.com/show/483652/hacker.svg" width={100} alt="" />
      <h1 className=" text-2xl font-bold" > This Server is Fucking Down</h1>
      <h2>Go away from here kid</h2>
      <Button link="/pages/main" padding="mt-2" > Go Away</Button>
    </div>
  );
}
