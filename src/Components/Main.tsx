import styled from "styled-components";

type Props = {
  children?: JSX.Element;
};

const MainContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 101px);
`;

const HeroTextContent = styled.div``;

const Main = (props: Props) => {
  return <MainContent>{props.children}</MainContent>;
};

export default Main;
