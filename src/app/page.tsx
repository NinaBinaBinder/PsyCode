"use server";
import P5Wrapper from "@/components/p5-wrapper";
import Title from "@/components/title";
import Name from "@/components/name";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Title/>
      <Name/>
      <div className="absolute -z-10">
        <P5Wrapper />
      </div>
      
    </main>
  );
}
