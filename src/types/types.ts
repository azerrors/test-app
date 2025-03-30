export interface ResultItemProp {
  number: number;
  totalResults: ResultsProps;
  onDelete: () => void;
}

export interface ResultsProps {
  answeredQuestion: AnsweredQuestionProps[];
  totalQuestion: QuestionProp[];
}

export interface QuestionProp {
  question: string;
  options: string[];
  correctAnswer: string;
  number?: number;
}

export interface AnsweredQuestionProps {
  question: string;
  answer: string;
}
