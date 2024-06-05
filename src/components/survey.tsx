"use client";

import React, { ChangeEvent, useState } from "react";
import { AnswerType, QuestionType } from "@/db/schema";
import "../app/styles.css";
import { addAnswer } from "@/db/actions";

interface SurveyProps {
  part: number;
  personId: string;
  title: string;
  questions: QuestionType[];
}

export function Survey({ part, personId, title, questions }: SurveyProps) {
  // Initialize state with default values of 50 for each question
  const initialAnswers = questions.reduce((acc, question) => {
    acc[personId] = acc[personId] || {};
    acc[personId][question.id] = 50;
    return acc;
  }, {} as { [personId: string]: { [questionId: string]: number | string } });

  const [answers, setAnswers] = useState<{ [personId: string]: { [questionId: string]: number | string } }>(initialAnswers);

  async function handleChange(
    questionId: string,
    personId: string,
    event: ChangeEvent<HTMLInputElement>
  ) {
    event.preventDefault();
    const answerValue = Number(event.currentTarget.value);
    setAnswers((prevAnswers) => {
      return {
        ...prevAnswers,
        [personId]: {
          ...prevAnswers[personId],
          [questionId]: answerValue,
        },
      };
    });

    // Save the response or replace them 
    await addAnswer({ personId, questionId, responseValue: answerValue });
  }

  return (
    <div className="flex flex-col items-center">
      <p className="font-black text-xl m-3">{`${part}. ${title}`}</p>
      <form>
        {questions.map((question) => (
          <div key={question.id} className="flex flex-col items-center py-4">
            <p className="font-semibold text-sm">{question.question}</p>
            <div className="flex w-full text-sm items-center p-4">
              <p>Disagree</p>
              <input
                type="range"
                id={String(question.id)}
                className="w-[50vh] mx-4"
                min="0"
                max="100"
                defaultValue="50"
                onChange={(event) => handleChange(question.id, personId, event)}
              />
              <p>Agree</p>
            </div>
            <p className="text-zinc-500">
            </p>
          </div>
        ))}
      </form>
    </div>
  );
}

export default Survey;
