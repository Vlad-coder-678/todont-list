import styled from "styled-components";

const StyledButton = styled.button<{
  bgColor: string;
  bgHover: string;
  textColor: string;
  textHoverColor: string;
}>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  margin: 10px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  white-space: nowrap;
  outline: none;
  border: none;
  border-radius: 20px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ bgHover }) => bgHover};
    transition: background-color 0.3s ease;
    color: ${({ textHoverColor }) => textHoverColor};
  }

  &:disabled {
    background: #eeeeee;
    color: #cccccc;
    cursor: default;
  }

  background-color: #282a36;
  border: none;
  border-radius: 0.5rem;
  color: #f8f8f2;
  color: white;
  height: 100%;
  margin: 0.5rem;
  min-width: 5rem;
  outline: 2px solid #bd93f9;
  padding: 0.5rem;
`;

export default StyledButton;
