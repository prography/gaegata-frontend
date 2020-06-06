import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import {
  ApplicantItemWrap,
  ApplicantName,
  ApplicantImage,
  ApplyButton,
} from './styled';
import { Applicants } from 'models/apply';

const ApplicantItem = ({
  id,
  applicant,
  join_status,
  job,
  created_at,
  handleApprove,
}: Applicants & { handleApprove: (id: number) => {} }) => {
  const { username, image } = applicant;

  return (
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
        <ApplicantImage></ApplicantImage>
        <ApplicantName>{username}</ApplicantName>
      </div>
      {join_status == 'Waiting' ? (
        <ApplyButton onClick={() => handleApprove(id)}>승인하기</ApplyButton>
      ) : (
        <ApplyButton onClick={() => handleApprove(id)}>취소하기</ApplyButton>
      )}
    </ApplicantItemWrap>
  );
};

export default ApplicantItem;
