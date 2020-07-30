import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 30px 0;
  border-top: 1px solid #e8e8e8;
  background-color: #f9f9f9;
  color: #999;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

export const FooterContent = styled.div``;

export const PersonalInformationArea = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  li {
    a {
      margin-right: 20px;
      color: #999;
      transition: color 0.2s;

      &:hover {
        color: $main-color-blue;
      }
    }
  }
`;

export const FooterDescription = styled.div`
  margin-top: 20px;
  font-size: 0.75rem;

  span {
    font-size: 0.825rem;

    &.dd {
      &:before {
        content: '|';
        display: inline;
        padding: 0 5px;
        color: #999;
      }
    }
  }
}
`;
