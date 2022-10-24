import styled from "@emotion/styled";

export const Button = styled.button`
  width: 120px;
  height: 50px;
  border: 1px solid #9e9e9e;
  background: #c8c5c5;
  color: #000;
  box-shadow: 0.5px 0.5px #000;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;

  &:hover {
    background: #000;
    color: #fff;
    transition: 0.3s;
  }
`;
