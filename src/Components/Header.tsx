import styled from "styled-components";
import Nav from "../Components/Nav";

const HeaderContainer = styled.header`
  background: white;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  color: #0a2540;
  padding: 10px 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav />
    </HeaderContainer>
  );
};

export default Header;
