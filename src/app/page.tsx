"use server";
import Name from "@/components/name";
import Title from "@/components/title";
import QR from "@/components/qr";
import Navbar from "@/components/navbar";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 text-white bg-black">
      <Title>PsyCode</Title>
      <Navbar />
      <div className="lg:flex m-20">
        <QR />
      </div>
      <div className="lg:hidden m-20">
        <Name />
      </div>
    </main>
  );
}
