import styled from "styled-components";

const IconBtn = styled.button`
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus-visible {
    border-radius: 50%;
    background-color: rgb(245, 245, 245);
  }
`;

export default IconBtn;
