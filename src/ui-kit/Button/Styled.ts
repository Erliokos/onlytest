import styled from "styled-components";

export const StyledButton = styled.button<{ variant?: "primary" | "secondary" }>`
  font-family: ${({ theme }) => theme.fonts.main};
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  background: ${({ theme, variant }) =>
    variant === "secondary" ? theme.colors.text : theme.colors.primary};
  color: ${({ theme, variant }) =>
    variant === "secondary" ? theme.colors.background : theme.colors.text};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 50%;
  }
`;

