import styled from "styled-components";
import Product from "./Product";

const MainContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

const HeroTextContent = styled.div``;

const Main = () => {
  return (
    <MainContent>
      <Product />
    </MainContent>
  );
};

export default Main;
