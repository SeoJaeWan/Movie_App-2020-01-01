import styled from "styled-components";

export const SelectBarContainer = styled.nav`
  position: fixed;
  display: flex;

  align-items: center;

  top: 0;
  left: 0;

  width: 100%;
  height: 80px;

  z-index: 2;

  .select-title {
    font-size: 40px;

    font-weight: bold;
  }

  .select-menu {
    list-style: none;
    display: flex;
  }
`;
