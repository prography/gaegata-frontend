export interface Apply {
  id: number;
  team: string;
  job: string;
  job_status: string;
  name: string;
  email: string;
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
