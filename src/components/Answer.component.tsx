import clsx from "clsx";
import { IUseQuestion } from "hooks/useQuestion.hook";
import React, { memo } from "react";

interface IProps extends Pick<IUseQuestion, "handleToggleAnswer"> {
  value: string;
  isSelected: boolean;
  isCorrect: boolean;
  isAnswerSubmitted: boolean;
}

const Answer: React.FC<IProps> = memo(
  ({ value, isSelected, handleToggleAnswer, isCorrect, isAnswerSubmitted }) => {
    const isMissing = isCorrect && !isSelected;

    return (
      <button
        disabled={isAnswerSubmitted}
        onClick={() => handleToggleAnswer(value)}
        className={clsx({
          selected: isSelected,
          correct: isCorrect && isSelected && isAnswerSubmitted,
          incorrect: !isCorrect && isSelected && isAnswerSubmitted,
          missing: isMissing && isAnswerSubmitted,
        })}
      >
        {isAnswerSubmitted &&
          (isMissing ? (
            <span className="missing answer">Missing</span>
          ) : (
            isSelected &&
            (isCorrect ? (
              <span className="correct answer">Good</span>
            ) : (
              <span className="incorrect answer">Bad</span>
            ))
          ))}

        {value}
      </button>
    );
  }
);

export default Answer;
