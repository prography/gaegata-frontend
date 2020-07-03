export interface IApply {
  job: string;
  answer1: IAnswer;
  answer2: IAnswer;
  answer3: IAnswer;
}

export interface IAnswer {
  question: number;
  answer: string;
}

export interface Applicants {
  id: number;
  applicant: {
    id: number;
    username: string;
    image: string;
  };
  join_status: string;
  job: string;
  created_at: string;
}
