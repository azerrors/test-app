import { create } from 'zustand';
import { QuestionProp } from '@/types/types';

interface QuizStore {
  selectedAnswers: { question: string; answer: string }[];
  showCorrectVariant: boolean;
  questionNumber: number;
  randomQuestions: QuestionProp[];
  setQuestionNumber: (questionNumber: number) => void;
  setSelectedAnswer: (question: string, answer: string) => void;
  setShowCorrectVariant: (value: boolean) => void;
  setRandomQuestions: (questions: QuestionProp[]) => void;
  openQuizModeInSaved: boolean;
  setOpenQuizModeInSaved: () => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  questionNumber: 0,
  showCorrectVariant: false,
  randomQuestions: [],
  selectedAnswers: [],
  openQuizModeInSaved: false,

  setOpenQuizModeInSaved: () => {
    set((state) => ({ openQuizModeInSaved: !state.openQuizModeInSaved }));
  },

  setSelectedAnswer: (question: string, answer: string) => {
    set((state) => {
      const updatedAnswers = state.selectedAnswers.filter(
        (q) => q.question !== question
      );
      updatedAnswers.push({ question, answer });

      return { selectedAnswers: updatedAnswers };
    });
  },

  setShowCorrectVariant: (value?: boolean) => {
    set(() => ({ showCorrectVariant: value ?? false }));
  },

  setQuestionNumber: (question: number) => {
    set((state) => ({ questionNumber: state.questionNumber + question }));
  },

  setRandomQuestions: (questions: QuestionProp[]) => {
    set(() => ({ randomQuestions: questions }));
  },
}));
