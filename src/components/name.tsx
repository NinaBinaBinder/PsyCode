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
        router.push(`././test/${await addPerson({ name })}/1`);
      } catch (error) {
        console.error(error);
        toast.error("An error occurred while adding the name (╥﹏╥)");
      }
    }
  }

  return (
    <div>
      <div className="p-5 text-zinc-100 items-center">
        <p>Welcome to your personality visualizator.</p>
        <p> There are 5 parts with 5 statement each.</p>
        <p className="justify-center">Lets start easy.</p>
      </div>

      <form className="justify-center flex flex-col" onSubmit={handleStart}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          id="name"
          autoComplete="off"
          placeholder="Enter your name"
          className="rounded-lg p-3 m-5"
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
