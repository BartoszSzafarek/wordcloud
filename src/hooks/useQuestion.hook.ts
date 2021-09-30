import { useCallback, useEffect, useState } from "react";
import Api from "services/Api.service";
import { IQuestion } from "services/Api.types";

export interface IUseQuestion {
  selectedAnswers: string[];
  handleToggleAnswer: (answer: string) => void;
  userPoints: number;
  checkCorrectAnswers: () => void;
  handlePlayAgain: () => void;
  question?: IQuestion;
  isAnswerSubmitted: boolean;
}

const useQuestion = (): IUseQuestion => {
  const [userPoints, setUserPoints] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  const handleToggleAnswer = useCallback((answer: string) => {
    setSelectedAnswers((answers) =>
      answers.includes(answer)
        ? answers.filter((v) => v !== answer)
        : [...answers, answer]
    );
  }, []);

  const handlePlayAgain = useCallback(() => {
    setUserPoints(0);
    setIsAnswerSubmitted(false);
    setSelectedAnswers([]);
    setCurrentQuestionIndex(Math.floor(Math.random() * questions.length));
  }, [questions.length]);

  const checkCorrectAnswers = useCallback(() => {
    const notSelected = questions[currentQuestionIndex].good_words.filter(
      (v) => !selectedAnswers.includes(v)
    );
    const points =
      selectedAnswers.reduce(
        (acc, v) =>
          questions[currentQuestionIndex].good_words.includes(v)
            ? acc + 2
            : acc - 1,
        0
      ) - notSelected.length;

    setUserPoints(points < 0 ? 0 : points);
    setIsAnswerSubmitted(true);
  }, [currentQuestionIndex, questions, selectedAnswers]);

  useEffect(() => {
    (async () => {
      // await is unnecessery here because Api is mocked and Api.getQuestions doesn't return Promise
      // however i'll leave it like that, because it's prepared for normal Api usage
      const data = await Api.getQuestions();

      setQuestions(data);
      setCurrentQuestionIndex(Math.floor(Math.random() * data.length));
    })();
  }, []);

  return {
    question: questions[currentQuestionIndex],
    selectedAnswers,
    handleToggleAnswer,
    userPoints,
    checkCorrectAnswers,
    handlePlayAgain,
    isAnswerSubmitted,
  };
};

export default useQuestion;
