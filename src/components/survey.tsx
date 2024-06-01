'use client';

import React, { ChangeEvent, useState } from 'react';
import { QuestionType } from "@/db/schema";
import '../app/styles.css';

interface SurveyProps {
  part: number;
  personId: string
  title: string;
  questions: QuestionType[];
}

export function Survey({ part, personId, title, questions }: SurveyProps) {
  const [responses, setResponses] = useState<{ [key: number]: number }>({});

  function handleChange(questionId: number, event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    
    const newResponses = {
      ...responses,
      [questionId]: Number(event.currentTarget.value)
    };
    setResponses(newResponses);
    console.log(responses, personId)
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
                className="w-5/6 mx-4"
                value={responses[question.id] || 0} 
                onChange={(event) => handleChange(question.id, event)}
              />
              <p>Agree</p>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Survey;
