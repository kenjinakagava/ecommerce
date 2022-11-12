import styled from "styled-components";
import Container from "../Styles/Container";
import { StyledKbd } from "../Styles/StyledKbd";

const ErrorContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 110px);
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  gap: 5rem;
`;

const InstructionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Error = () => {
  return (
    <ErrorContainer>
      <InstructionsWrapper>
        <h2>An Error Has Occured</h2>
        <p>Make sure you've ran the command "npm run server".</p>
        <p>You can do this in vscode by opening a new terminal.</p>
        <p>
          The default shortcut is <StyledKbd>ctrl</StyledKbd> +{" "}
          <StyledKbd>shift</StyledKbd> + <StyledKbd>`</StyledKbd> {""}
          you can also use the menu located on the top left.
        </p>
        <p>
          Now refresh the page with <StyledKbd>F5</StyledKbd> and you should see
          the site.
        </p>
      </InstructionsWrapper>
      <InstructionsWrapper>
        <p>
          If this page keeps showing up you can see the error log in the
          console.
        </p>
        <p>
          To open the console use <StyledKbd>f12</StyledKbd> or{" "}
          <StyledKbd>shift</StyledKbd> + <StyledKbd>ctrl</StyledKbd> +{" "}
          <StyledKbd>j</StyledKbd> on Windows/Linux.
        </p>
        <p>
          If you're using a mac device you can use <StyledKbd>option</StyledKbd>{" "}
          + <StyledKbd>⌘</StyledKbd> + <StyledKbd>j</StyledKbd>
        </p>
      </InstructionsWrapper>
    </ErrorContainer>
  );
};

export default Error;

{
  // The code looks really bad but the effect looks really cool
}
