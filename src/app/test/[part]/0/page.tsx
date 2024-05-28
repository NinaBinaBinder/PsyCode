import Name from "@/components/name";

export default async function PersonalityPart() {
  return (
    <main className="flex flex-col bg-zinc-100 items-center justify-between p-24">
      <div>
        <p>Welcome to your personality visualizator</p>
        <p>There are 5 parts with 5 statement each. </p>
        <p> Lets start easy.</p>
      </div>
      <Name />
    </main>
  );
}
