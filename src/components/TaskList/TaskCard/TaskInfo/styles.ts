// external imports
import styled from "styled-components";

const TitleWrapper = styled.div`
  align-content: center;
  display: flex;
  font-size: 1.6rem;
`;

const InputCheckbox = styled.input`
  background: none;
  background-color: #50fa7b;
  border-radius: 1rem;
  height: 1.5rem;
  margin: 1rem;
  vertical-align: middle;
  width: 1.5rem;
`;

const InputLabel = styled.label`
  flex: 1 1;
  margin: auto;
  vertical-align: center;
`;

const EditButtonsWrapper = styled.div`
  flex: 1 1;
  margin: auto;
  vertical-align: center;
`;

export {
  EditButtonsWrapper,
  InputCheckbox,
  InputLabel,
  TitleWrapper,
};
