import { redirect } from "next/navigation";

export type PersonalityPartParams = {
  params: { personId: string };
};

export default async function Part({
  params: { personId },
}: PersonalityPartParams) {
  redirect(` /test/${personId}/1`);
}
