"use server";
import P5Wrapper from "@/components/p5-wrapper";
import Title from "@/components/title";
import { fonts } from "./layout";
import Link from "next/link";
import Name from "@/components/name";
import Footer from "@/components/footer";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Title fonts={fonts} />
      <Name/>
      

      <div className="absolute -z-10">
        <P5Wrapper />
      </div>
      
    </main>
  );
}
