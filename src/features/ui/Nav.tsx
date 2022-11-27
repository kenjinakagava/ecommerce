import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "./styles/Container";
import AnimatedLogo from "./AnimatedLogo";
import Cart from "../cart/Cart";

const NavWrapper = styled.nav`
  ${Container}
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Nav = () => {
  return (
    <NavWrapper>
      <Link to="/" aria-label="go to homepage">
        <AnimatedLogo />
      </Link>
      <Wrapper>
        <Link to={"/store"}>Store</Link>
        <Cart />
      </Wrapper>
    </NavWrapper>
  );
};

export default Nav;
