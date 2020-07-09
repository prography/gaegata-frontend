import styled from 'styled-components';

export const CardImageWrap = styled.span`
  padding-top: 75%;
  overflow: hidden;
`;

export const Img = styled.img`
  transform: scale(1);
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 1;
`;

//     &.animation {
//       img {
//         transition: transform 0.3s ease 0s, opacity 0.1s linear 0s;

//         &:hover {
//           transform: scale(1.1);
//         }
//       }
//     }
//   }
