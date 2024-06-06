"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { QuestionType } from "@/db/schema";
import "../app/styles.css";
import { addAnswer } from "@/db/actions";
import Link from "next/link";

interface SurveyProps {
  part: number;
  personId: string;
  name: string;
  title: string;
  questions: QuestionType[];
}

export function Survey({
  part,
  personId,
  name,
  title,
  questions,
}: SurveyProps) {
  
  async function handleChange(
    questionId: string,
    event: ChangeEvent<HTMLInputElement>
  ) {
    const answerValue = Number(event.currentTarget.value);
    await addAnswer({
      personId,
      questionId,
      responseValue: answerValue,
    });
  }

  return (
    <div className="flex flex-col items-center text-center w-screen bg-black">
      <p className="font-black text-xl pb-10">{`${part}. ${title}`}</p>
      <form>
        {questions.map((question) => (
          <div
            key={question.id}
            className="flex flex-col items-center p-2 py-4"
          >
            <p className="font-semibold text-sm">{question.question}</p>
            <div className="flex text-sm items-center py-5 ">
              <p>Disagree</p>
              <input
                type="range"
                id={String(question.id)}
                className="w-[50vh] mx-4"
                min="0"
                max="100"
                defaultValue="50"
                onChange={(event) => handleChange(question.id, event)}
              />
              <p>Agree</p>
            </div>
            <p className="text-zinc-500"></p>
          </div>
        ))}
        <div className="flex justify-between w-screen p-5">
          <Link
            href={
              Number(part) <= 1
                ? `/`
                : `/test/${personId}/${questions[0].part - 1}`
            }
            className="hover:bg-zinc-900 bg-zinc-700 p-2 px-5"
          >
            back
          </Link>
          <Link
            href={
              questions[0].part < 5
                ? `/test/${personId}/${questions[0].part + 1}`
                : `../${personId}/result/${name}`
            }
            className="hover:bg-zinc-900 bg-zinc-700 p-2 px-5"
          >
            {questions[0].part < 5 ? "next" : "result"}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Survey;
