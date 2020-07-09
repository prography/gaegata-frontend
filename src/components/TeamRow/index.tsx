import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CardImage from 'components/CardImage';
import { Row, Col, Button } from 'antd';
import moment from 'moment';

const RowItem = styled.div`
  width: 100%;
  background-color: #fff;
  &:not(:last-child) {
    border-bottom: 1px solid #efefef;
  }
  overflow: hidden;
  padding: 20px 0;
  .image-wrap {
    border-radius: 10px;
    overflow: hidden;
  }
  .team-content {
    padding: 0 1rem;
    h2 > a {
      color: #333;
      font-family: Noto Sans Medium;
      font-size: 1.125rem;
      margin-bottom: 10px;
      margin-right: 5px;
      &:hover {
        text-decoration: underline;
      }
    }
    p {
      color: #888;
      font-size: 0.825rem;
      margin: 0;
    }
  }
`;

const TeamMeta = styled.div`
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #efefef;
`;

const Description = styled.p`
  font-size: 0.825rem;
  line-height: 20px;
  letter-spacing: -0.2px;
  height: 40px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  color: #4c657d;
  margin: 0px 0px 0px;
  overflow: hidden;
`;

const statusLabel = {
  승인대기: 'blue',
  승인거절: 'red',
  승인완료: 'green',
  만료: 'orange',
};

interface Props {
  title: string;
  teamType: string;
  id: number;
  description: string;
  created_at: string;
  job: string;
  image: string;
  team_id: number;
}
const TeamRow = ({
  title,
  teamType,
  id,
  description,
  created_at,
  image,
  job,
  team_id,
}: Props) => {
  const jobName = new Map();
  jobName.set('Developer', '개발자');
  jobName.set('Designer', '디자이너');
  jobName.set('Planner', '기획자');

  return (
    <RowItem>
      <Row
        style={{
          flexDirection: 'row',
          display: 'flex',
        }}
      >
        <Col span={6} className="team-image-wrap">
          <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
            <CardImage
              imageUrl={image}
              toUrl={`/team/detail/${team_id}`}
              animation
            />
          </div>
        </Col>
        <Col span={18}>
          <div className="team-content">
            <div className="pt-10">
              <h2 style={{ display: 'inline-block' }}>
                <Link to={`/team/detail/${team_id}`}>{title}</Link>
              </h2>
              <h4 style={{ display: 'inline-block', color: '#888888' }}>
                {jobName.get(job)}
              </h4>
              <TeamMeta>
                <Description>{description}</Description>
              </TeamMeta>
              <p>신청일자: {moment(created_at).format('YYYY-MM-DD')}</p>
              <p className="no-margin" />
            </div>
          </div>
        </Col>
      </Row>
    </RowItem>
  );
};

export default memo(TeamRow);
