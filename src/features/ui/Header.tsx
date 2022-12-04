import styled from "styled-components";

import StylesTopWrapper from "../../styles/StylesTopWrapper.styles";
import Nav from "./Nav";

const HeaderContainer = styled.header`
  ${StylesTopWrapper}
  color: #0a2540;
  position: relative;
`;
// z-index so the box-shadow doesn't get overlapped by the category nav in the store view
// position: relative so z-index works without taking the element out of the normal flow
// https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow

const Header = () => {
  return (
    <HeaderContainer>
      <Nav />
    </HeaderContainer>
  );
};

export default Header;
