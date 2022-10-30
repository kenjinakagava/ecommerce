import styled from "styled-components";

type Props = {
  children?: JSX.Element;
};

const MainContent = styled.main``;

const HeroTextContent = styled.div``;

const Main = (props: Props) => {
  return <MainContent>{props.children}</MainContent>;
};

export default Main;
