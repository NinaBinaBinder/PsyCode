"use server";

import { db } from "./connection";
import { personalities } from "./schema";

export async function addPerson({ name }: { name: string }) {
  await db.insert(personalities).values({ name });
  console.log('added Person succesfully')
}
