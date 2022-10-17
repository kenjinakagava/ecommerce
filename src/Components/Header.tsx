import styled from "styled-components";
import logo from "../logo.png";
import Cart from "./Cart";
import Account from "./Account";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px 0px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

const BtnGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Link to="/">
          <h1>Temp Logo</h1>
        </Link>
        {
          //<img src={logo} alt="" />
        }
        <BtnGroup>
          <Account />
          <Cart />
        </BtnGroup>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
