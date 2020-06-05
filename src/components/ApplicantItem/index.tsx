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
}: Applicants) => {
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
      <ApplyButton>승인하기</ApplyButton>
    </ApplicantItemWrap>
  );
};

export default ApplicantItem;
