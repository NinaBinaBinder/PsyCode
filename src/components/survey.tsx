import { QuestionType } from "@/db/schema";
import Link from "next/link";


export default function Survey({part, title, questions}: {part: number, title:string, questions: QuestionType[]}) {
  return (
    <div className="rounded-xl border-2 p-5 bg-white bg-opacity-20">
      <p>{`${part}. ${title}`}</p>
      <form>
        {questions.map((question) => (
          <div key='question' className="flex flex-col items-center py-4">
            <p>{question.question}</p>
            <input type='range' id={String(question.id)} className="w-full" />
          </div>
        ))}
        <div className="flex justify-between">
          <Link
          replace
           href={part === 1? '/' : `../test/${part-1}`}>
            back
          </Link>
          <Link
          replace
           href={part === 5? '/' : `../test/${part+1}`}>
            next
          </Link>
        </div>
      </form>
    </div>
  );
}
