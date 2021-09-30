export interface IQuestion {
  question: string;
  all_words: string[];
  good_words: string[];
}

export interface IQuestionResponse {
  data: IQuestion[];
}
