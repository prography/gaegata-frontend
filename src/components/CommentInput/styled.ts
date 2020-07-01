import styled from 'styled-components';

export const CommentInputWrap = styled.div`
  padding-bottom: 20px;
`;

export const CommetTextArea = styled.textarea`
  overflow: hidden;
  overflow-wrap: break-word;
  height: 80px;
  width: 100%;
  outline: none;
  padding: 1rem;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  resize: none;
  color: #212529;
  display: block;
  line-height: 1.5;
  -webkit-transition: height 0.2s;
  transition: height 0.2s;
  outline: 0;
`;

export const CommetBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 10px;
`;
