import styled from 'styled-components'

const radius = 380

export const CircleTimeLineContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${() => radius}px;
  aspect-ratio: 1 / 1;
  transform: translate(-50%, -50%);
`;

export const CircleTimeLineLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: ${({ theme }) => `1px solid ${theme.colors.text}`};
  opacity: 10%;
`

export const ButtonsWrapper = styled.div<{ rotation: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: ${({ rotation }) => `translate(-50%, -50%) rotate(${rotation}deg)`};
  transform-origin: center;
  transition: transform 0.5s ease;
`;

export const CircleButton = styled.button<{ angle: number, isActive: boolean }>`
  position: absolute;
  top: 50%;
  width: ${({ isActive }) => `${isActive ? '50px' : '6px'}` };
  height: ${({ isActive }) => `${isActive ? '50px' : '6px'}` };
  border-radius: 100%;
  border: ${({ theme, isActive }) => isActive ? `1px solid ${theme.colors.border}` : 'none'};
  background: ${({theme, isActive}) => isActive ? theme.colors.background : theme.colors.text};
  color: ${({theme}) => theme.colors.text};
  cursor: pointer;
  transform-origin: ${radius/2}px 0;
  transform: ${({ angle }) => `rotate(${angle}deg) translate(-50%, -50%)`};
  overflow: hidden;
  padding: 0;
  transition: 0.1s;

  &:hover {
    width: 50px;
    height: 50px;
    border: ${({ theme }) => `1px solid ${theme.colors.border}`};
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const ButtonText = styled.div<{ angle: number }>`
  font-size: 20px;
  font-family: ${({theme}) => theme.fonts.main};
  transform: ${({ angle }) => `rotate(-${angle}deg)`};
  transition: transform 0.5s ease;
`
export const Description = styled.div`
  font-weight: bold;
  font-size: 20px;
  position: absolute;
  top: 12px;
  left: 85%;
`
