import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import {
  ApplicantItemWrap,
  ApplicantName,
  ApplicantImage,
  ApplyButton,
  ApplicantItemContainer,
  ApplicantContent,
} from './styled';
import { Applicants } from 'models/apply';

const ApplicantItem = ({
  id,
  applicant,
  join_status,
  job,
  created_at,
  handleApprove,
  handleRefuse,
}: Applicants & {
  handleApprove: (id: number) => {};
  handleRefuse: (id: number) => {};
}) => {
  const { username, image } = applicant;
  const [show, setShow] = useState(false);

  const jobName = new Map();
  jobName.set('Developer', '개발자');
  jobName.set('Designer', '디자이너');
  jobName.set('Planner', '기획자');
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <ApplicantItemContainer>
      <ApplicantItemWrap>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#f7f8fb',
            padding: '10px',
            width: '300px',
          }}
        >
          <ApplicantImage>
            <img src={image} style={{ borderRadius: '100%', height: '100%' }} />
          </ApplicantImage>
          <div>
            <ApplicantName>{username}</ApplicantName>
            <span
              style={{
                fontSize: '1rem',
                color: '#BDBDBD',
                display: 'inline-block',
              }}
            >
              {jobName.get(job)}
            </span>
          </div>
        </div>
        {join_status == 'Waiting' ? (
          <>
            <ApplyButton onClick={() => handleApprove(id)}>
              승인하기
            </ApplyButton>
            <ApplyButton onClick={() => handleRefuse(id)}>거절하기</ApplyButton>
          </>
        ) : (
          <ApplyButton onClick={() => handleRefuse(id)}>취소하기</ApplyButton>
        )}
        <div
          style={{ marginTop: '5%', marginRight: '2%' }}
          onClick={() => handleShow()}
        >
          <img src="/images/arrow.png" alt="상세보기" />
        </div>
      </ApplicantItemWrap>
      <ApplicantContent show={show}>
        직무 : {jobName.get(job)} <br />
        신청일 : {created_at}
      </ApplicantContent>
    </ApplicantItemContainer>
  );
};

export default ApplicantItem;
