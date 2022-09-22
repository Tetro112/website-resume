import styled from "styled-components";

export const ScrollTopContainer = styled.div`
  position: fixed;
  width: 100%;
  left: 1%;
  bottom: 5%;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

export const IconBackground = styled.div`
  display: flex;
  background-color: #303045;
  box-sizing: border-box;
  height: 52px;
  width: 52px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;
