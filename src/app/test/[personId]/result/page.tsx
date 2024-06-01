import { PersonalityPartParams } from "../page";

export default async function Part({
  params: { personId },
}: PersonalityPartParams) {
  return <h1>{personId}</h1>;
}
