import { IQuestionResponse, IQuestion } from "./Api.types";
import dumpData from "./dump.json";

class Api {
  public getQuestions(): IQuestion[] {
    const { data } = dumpData as IQuestionResponse;

    return data;
  }
}

export default new Api();
