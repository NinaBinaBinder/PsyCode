import Name from "@/components/name";

export default async function Page() {
  return (
    <main className="flex flex-col h-full  bg-black items-center p-24">
      <div className="flex flex-col mb-20 p-5 text-zinc-100 items-center">
        <p>Welcome to your personality visualizator</p>
        <p>There are 5 parts with 5 statement each. </p>
        <p> Lets start easy.</p>
      </div>
      <Name />
    </main>
  );
}
