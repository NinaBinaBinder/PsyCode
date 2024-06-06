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
        toast.success(`Hello ${name} ~(‾▿‾)~`);
        setName("");
        await addPerson({name})
        router.push(`././test/${await addPerson({ name })}/1`);
      } catch (error) {
        console.error(error);
        toast.error("An error occurred while adding the name (╥﹏╥)");
      }
    }
  }

  return (
    <div>
      <div className="text-zinc-100 flex flex-col text-center w-full justify-center mb-10">
        <p>Welcome to your personality visualizator.
          <br />
        There are 5 parts with 5 statement each.</p>
        <br />
        <p>Lets start easy.</p>
      </div>

      <form className="justify-center flex flex-col gap-4" onSubmit={handleStart}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          id="name"
          autoComplete="off"
          placeholder="enter your name"
          className="p-4 text-black rounded-none bg-white"
        />
        <button
          type="submit"
          className="border-2 p-4 hover:bg-zinc-800 font-black text-white"
        >
         START
        </button>
      </form>
    </div>
  );
}
