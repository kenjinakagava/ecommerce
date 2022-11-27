import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "../features/ui/styles/Container";

const Container404 = styled.div`
  ${Container}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: calc(100vh - 110px);
  gap: 1rem;
`;

const MainText = styled.h2`
  font-size: clamp(2rem, 10vw, 3rem);
`;

const Message = styled.p`
  font-size: clamp(1.25rem, 10vw, 1.75rem);
`;

const BackButton = styled(Link)`
  ${Container}
  font-size: clamp(1.25rem, 10vw, 1.75rem);
`;

const Page404 = () => {
  return (
    <Container404>
      <MainText>404</MainText>
      <MainText>Page not found!</MainText>
      <Message>Sorry, we couldn't find the page you were looking for</Message>
      <BackButton to="/">Click here to go back</BackButton>
    </Container404>
  );
};

export default Page404;
