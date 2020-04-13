import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Team } from 'models/team';
import { Avatar } from 'antd';

/* 팀 카드 컴포넌트 */
const Card = styled.div`
  width: 100%;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  border-radius: 4px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;

  /* hover 시 애니메이션 */
  &:hover {
    transform: translateY(-8px);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 12px 20px 0px;
  }
`;

/**
 * 팀 컨텐츠 본문 컴포넌트
 */
const ContentWrap = styled.div`
  padding: 1rem;
  flex: 1 1 0%;

  a {
    display: block;

    /* 팀 타이틀 */
    h4 {
      font-size: 1.125rem;
      line-height: 1.5;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow-x: hidden;
      overflow-y: hidden;
      margin: 0px 0px 0.25rem;
      font-weight: bold;
    }

    /* 팀 설명 */
    p {
      word-break: break-word;
      overflow-wrap: break-word;
      font-size: 0.875rem;
      line-height: 1.5;
      height: 3.9375rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      margin: 0px 0px 1.5rem;
      overflow: hidden;
    }
  }

  .sub-info {
    font-size: 0.75rem;
    line-height: 1.5;
  }
`;

/* 팀 카드 푸터 컴포넌트 */
const ContentFooter = styled.div`
  padding: 0.625rem 1rem;
  border-top: 1px solid #f9f9f9;

  /* 유저 아이디 라벨 */
  .user-id {
    font-size: 0.75rem;
    padding-left: 0.5rem;
    font-weight: bold;
  }
`;

/* 팀 이미지 컴포넌트 */
const ImageWrap = styled.div`
  width: 100%;
  padding-bottom: 55%;
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

const PostCard: React.FC<Team> = ({
  title,
  description,
  created_at,
  image,
}) => {
  return (
    <Card>
      {image && (
        <Link to="#">
          <ImageWrap>
            <img src={image} />
          </ImageWrap>
        </Link>
      )}
      <ContentWrap>
        <Link to="#">
          <h4>{title}</h4>
          <p>{description}</p>
        </Link>
        <div className="sub-info">
          <span>{created_at}</span>
        </div>
      </ContentWrap>
      <ContentFooter>
        <Avatar size="small">글</Avatar>
        <span className="user-id">글쓴이</span>
      </ContentFooter>
    </Card>
  );
};

export default PostCard;
