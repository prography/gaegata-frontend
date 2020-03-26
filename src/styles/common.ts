import styled from 'styled-components';

export const PageLoadingOverlay = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CreateBanner = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 30px;
  background: #f5f5f5;
  border: 1px solid #efefef;
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h2 {
    font-size: 1.25rem;
    margin: 0;
    font-family: Noto Sans Medium;
    color: #5f76f3;
  }
  p {
    margin: 0;
    font-family: Noto Sans Light;
  }
  .btn-wrap {
    display: flex;
    align-items: center;
    .apply-btn {
      &:hover {
        color: #fff;
      }
    }
  }
`;
