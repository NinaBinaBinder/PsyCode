"use server";
import Name from "@/components/name";
import Title from "@/components/title";
import QR from "@/components/qr";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-black">
     <Title/>
     <div className="hidden lg:flex m-20">
       <QR/>
     </div>
     <div className="lg m-20">
      <Name/>
     </div>
    </main>
  );
}
