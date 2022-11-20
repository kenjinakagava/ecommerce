import styled from "styled-components";
import Container from "../features/ui/ContainerStyles";

const ErrorContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 110px);
  font-size: clamp(1.5rem, 2.5vw, 2.5rem);
  gap: 1rem;
`;

const StyledLinks = styled.a`
  text-decoration: underline;
  font-weight: 700;
`;

const Error = () => {
  return (
    <ErrorContainer>
      <h2>An Error Has Occured</h2>
      <p>
        Look for the Current Pages Status on{" "}
        <StyledLinks
          href="https://www.githubstatus.com"
          target="_blank "
          rel="noopener"
        >
          GitHub Status
        </StyledLinks>
      </p>
      <p>If it shows a red exclamation mark we just need to wait</p>
      <p>
        If the status is normal {""}
        <StyledLinks href="https://linkedin.com/in/kenjinakagava">
          please contact me
        </StyledLinks>
      </p>
    </ErrorContainer>
  );
};

export default Error;
