import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "./Styles/Container";

const Wrapper = styled.div`
  ${Container}
  display: flex;
  align-items: center;
`;

const NavWrapper = styled.nav`
  ${Container}
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

const StoreBrand = styled.h1`
  font-family: "Times New Roman", sans-serif;
  font-size: 1.5rem;
  margin-left: 1rem;
`;

const AnimatedSvg = styled.svg`
  animation: animate-spin 6s infinite linear;
  fill: #0a2540;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  @keyframes animate-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
`;

const Nav = () => {
  return (
    <NavWrapper>
      <Link to="/" aria-label="go to homepage">
        <Wrapper>
          <AnimatedSvg width="48" height="48" viewBox="0 0 24 24">
            <path d="M14 12c0 1.103-.896 2-2 2-1.103 0-2-.897-2-2s.897-2 2-2c1.104 0 2 .897 2 2zm10 0c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-14.795 7.507c-2.17-.813-3.893-2.54-4.699-4.714l-1.02.127c.896 2.628 2.968 4.704 5.592 5.606l.127-1.019zm.26-2.077c-1.271-.596-2.299-1.624-2.895-2.896l-1.041.13c.709 1.721 2.084 3.097 3.807 3.807l.129-1.041zm6.535-5.43c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4 4-1.791 4-4zm2.473-2.665c-.711-1.722-2.086-3.097-3.807-3.807l-.131 1.041c1.271.596 2.299 1.624 2.896 2.896l1.042-.13zm2.027-.253c-.902-2.61-2.969-4.672-5.582-5.568l-.129 1.019c2.162.808 3.877 2.52 4.691 4.677l1.02-.128z" />
          </AnimatedSvg>
          <StoreBrand>Cool Vinyl</StoreBrand>
        </Wrapper>
      </Link>
      <NavList>
        <li>
          <Link to={"/store"}>Store</Link>
        </li>
      </NavList>
    </NavWrapper>
  );
};

export default Nav;
