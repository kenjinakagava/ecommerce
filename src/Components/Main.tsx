import styled from "styled-components";
import thumbsup from "../thumbsupguy.jpg";

const MainContent = styled.main`
  height: calc(100vh - 44px);
  width: 100%;
  white-space: pre-line;
`;

const HeroTextContent = styled.div``;

const Main = () => {
  return (
    <MainContent>
      <h1>Placeholder for some cool quote</h1>
    </MainContent>
  );
};

export default Main;
