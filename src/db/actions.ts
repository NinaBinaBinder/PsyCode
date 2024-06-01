"use server";

import { db } from "@/db/connection";
import { answers, personalities } from "@/db/schema";

export async function addPerson({ name }: { name: string }) {
  const person = await db
    .insert(personalities)
    .values({ name })
    .returning({ personId: personalities.id });
  console.log("Added new person with ID: ", person[0].personId);
  return person[0].personId;
}

export async function addAnswer({
  personId,
  questionId,
  responseValue,
}: {
  personId: string;
  questionId: string;
  responseValue: number;
}) {
  try {
    await db.insert(answers).values({
      personId,
      questionId,
      responseValue,
      responseDate: new Date(),
    });
    console.log(
      `Added new answer for personId: ${personId}, questionId: ${questionId}`
    );
  } catch (error) {
    console.error("Failed to save answer:", error);
    throw new Error("Failed to save answer");
  }
}
