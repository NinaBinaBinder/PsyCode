"use client";

import { addPerson } from "@/db/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Name() {
  const [name, setName] = useState("");
  const router = useRouter();

  async function handleStart(event: { preventDefault: () => void }) {
    event.preventDefault();

    if (name.length < 3) {
      toast.error("(ง •̀_•́)ง Please enter a name with at least 3 characters.");
    } else {
      try {
        await addPerson({ name });
        toast.success(`Hello ${name} ~(‾▿‾)~`);
        setName("");
        router.push(`././test/${await addPerson({name})}/1`);
      } catch (error) {
        console.error(error);
        toast.error("An error occurred while adding the name (╥﹏╥)");
      }
    }
  }

  return (
    <div className="flex flex-col items-center">
      <p className="flex flex-col p-5 text-zinc-100 justify-center">
        Welcome to your personality visualizator There are 5 parts with 5
        statement each.
        <br/> Lets start easy.
      </p>
      <form className="jutsify-center flex flex-col" onSubmit={handleStart}>
        <input
          type="text"
          value={name} // Bind the input value to the state
          onChange={(e) => setName(e.currentTarget.value)}
          id="name"
          placeholder="Enter your name"
          className="border rounded-lg p-3 m-5"
        />
        <button
          type="submit"
          className="bg-zinc-800 p-4 rounded-xl hover:bg-zinc-500 font-bold text-white"
        >
          Start
        </button>
      </form>
    </div>
  );
}
