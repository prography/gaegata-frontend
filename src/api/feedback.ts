import fetcher from 'utils/fetcher';

export interface IFeedbackParam {
  feedback: string;
}

export const postFeedback = async (params: IFeedbackParam) => {
  const { data } = await fetcher.post('/feedback/opinion/', params);
  return data.message;
};
