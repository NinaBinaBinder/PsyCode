import { QuestionType } from "@/db/schema";
import Link from "next/link";

export default function Survey({
  part,
  title,
  questions,
}: {
  part: number;
  title: string;
  questions: QuestionType[];
}) {
  return (
    <div className="flex flex-col items-center">
      <p className="font-black text-2xl m-3">{`${part}. ${title}`}</p>

      <form>
        {questions.map((question) => (
          <div key={question.id} className="flex flex-col items-center py-4">
            <p className="font-bold">{question.question}</p>
            <div className="flex w-full items-center p-4">
              <p>Disagree</p>
              <input
                type="range"
                id={String(question.id)}
                className="w-5/6 mx-4"
              />
              <p>Agree</p>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
}
