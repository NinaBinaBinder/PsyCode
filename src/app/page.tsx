"use server";
import P5Wrapper from "@/components/p5-wrapper";
import Name from "@/components/name";
import Title from "@/components/title";
import QR from "@/components/qr";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-black">
     <p className="font-4xl">Psycode</p>
     <Title/>
      <QR/>
      <div className="absolute -z-10">
        <P5Wrapper/>
      </div>
      
    </main>
  );
}
