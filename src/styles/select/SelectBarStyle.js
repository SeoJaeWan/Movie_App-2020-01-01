import styled from "styled-components";

export const Bar = styled.div`
  position: fixed;
  display: flex;
  width: 50%;
  min-width: 481px;
  height: 116px;

  border: 1px solid;
  border-radius: 10px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
  top: 0;

  transition: all 0.3s;
  :hover {
    opacity: 1;
  }
`;
