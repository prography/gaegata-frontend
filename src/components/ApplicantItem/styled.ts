import styled from 'styled-components';

interface Props {
  show: boolean;
}

export const ApplicantItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f8fb;
  margin: 3% 0;
  border-radius: 10px;
`;

export const ApplicantItemWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-radius: 10px;
`;

export const ApplicantName = styled.span`
  font-size: 1.25rem;
  margin: 5% 1%;
  display: inline-block;
`;

export const ApplicantImage = styled.div`
  width: 62px;
  height: 62px;
  background-color: #fff;
  border-radius: 100%;
  display: inline-block;
`;

export const ApplyButton = styled.button`
  width: 20%;
  height: 30px;
  border-radius: 15px;
  border: 0px solid;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: #3562ff;
  color: #fff;
  text-align: center;
  cursor: pointer;
  display: block;
  margin: 5% 1%;
  a {
    color: #fff;
  }
`;

export const ApplicantContent = styled.div<Props>`
  display: ${({ show }: Props) => (show ? 'show' : 'none')};
`;

export const QnAWrap = styled.div`
  border: 1px solid #fff;
  border-radius: 10px;
  margin: 10px 4%;
  box-shadow: 4px 4px 4px 4px rgba(40, 50, 60, 0.06);
`;

export const Question = styled.div`
  border-bottom: 1px solid #bdbdbd;
  text-align: left;
  min-height: 30px;
  margin: 10px;
  font-size: 1.25rem;
`;

export const Answer = styled.div`
  text-align: left;
  min-height: 30px;
  margin: 10px;
  font-size: 1rem;
`;
