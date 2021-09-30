import React, { useState } from "react";
import { IUseQuestion } from "hooks/useQuestion.hook";

import Answer from "./Answer.component";

const Question: React.FC<
  Omit<IUseQuestion, "userPoints" | "handlePlayAgain" | "isAnswerSubmitted">
> = ({
  question,
  selectedAnswers,
  handleToggleAnswer,
  checkCorrectAnswers,
}) => {
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  return (
    <>
      <h2>{question?.question}</h2>
      <div className="answers">
        {question?.all_words.map((word) => (
          <Answer
            key={word}
            isSelected={selectedAnswers.includes(word)}
            value={word}
            handleToggleAnswer={handleToggleAnswer}
            isCorrect={question.good_words.includes(word)}
            isAnswerSubmitted={isAnswerSubmitted}
          />
        ))}
      </div>
      <button
        className="button"
        onClick={
          isAnswerSubmitted
            ? checkCorrectAnswers
            : () => setIsAnswerSubmitted(true)
        }
      >
        {isAnswerSubmitted ? "Finish" : "Submit"}
      </button>
    </>
  );
};

export default Question;
