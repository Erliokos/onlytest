import styled from 'styled-components'

export const CircleTimeLineContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 33.3%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: ${({ theme }) => `1px solid ${theme.colors.text}`};
  opacity: 10%;
  transform: translate(-50%, -50%);
`;
