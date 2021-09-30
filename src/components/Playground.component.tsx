import React from "react";
import useQuestion from "hooks/useQuestion.hook";

import Summary from "./Summary.component";
import Question from "./Question.component";

interface IProps {
  name: string;
}

const Playground: React.FC<IProps> = ({ name }) => {
  const {
    question,
    selectedAnswers,
    handleToggleAnswer,
    checkCorrectAnswers,
    userPoints,
    handlePlayAgain,
    isAnswerSubmitted,
  } = useQuestion();

  return (
    <div className="playground wrapper">
      {isAnswerSubmitted ? (
        <Summary
          name={name}
          handlePlayAgain={handlePlayAgain}
          userPoints={userPoints}
        />
      ) : (
        <Question
          question={question}
          selectedAnswers={selectedAnswers}
          handleToggleAnswer={handleToggleAnswer}
          checkCorrectAnswers={checkCorrectAnswers}
        />
      )}
    </div>
  );
};

export default Playground;
