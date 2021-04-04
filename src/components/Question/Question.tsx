import React from 'react';
import { Button } from '../Button/Button';
import bgGame from '../../images/bg-game.png';

export type QuestionType = {
  picture: string;
  answerId?: number;
  answers: string[]
}

type QuestionPropTypes = QuestionType & {
  onAnswer: (id: number) => void
}

export const Question = ({ picture, answers, onAnswer }: QuestionPropTypes) => (
  <>
    <div className="relative max-w-sm">
      <img className="invisible mb-4" src={bgGame} alt="game's retro background"/>
      <img className="absolute inset-0 w-[60%] top-[6%] mx-auto rounded" src={picture} alt="user's picture"/>
      <img className="absolute inset-0" src={bgGame} alt="game's retro background"/>
    </div>
    {answers.map((answer, id) => (
      <Button onClick={() => onAnswer(id)}>{answer}</Button>
    ))}
  </>
);
