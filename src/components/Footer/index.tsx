import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  FooterContent,
  PersonalInformationArea,
  FooterDescription,
  FooterContainer,
} from './styled';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <PersonalInformationArea>
            <li>
              <Link to="#">서비스소개</Link>
            </li>
            <li>
              <Link to="#">이용약관</Link>
            </li>
            <li>
              <Link to="#">개인정보처리방침</Link>
            </li>
          </PersonalInformationArea>
          <FooterDescription>
            상호명: (주) FITPLE <span className="dd" /> 대표: 안동원, 김시현,
            고기훈
            <br />
            주소: 서울특별시 강남구 역삼동 역삼로 180(마루180) 지하 1층
            <br />
            <br />
            <br />
            2019 &copy; <span className="text-bold">Fitple</span>. All rights
            reserved.
          </FooterDescription>
        </FooterContent>
        {/* Copyright &copy; FITPLE All Rights Reserved */}
      </Container>
    </FooterContainer>
  );
};

export default Footer;
