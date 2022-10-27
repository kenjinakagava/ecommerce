import styled from "styled-components";
import { Link } from "react-router-dom";
import CTAButton from "./CTAButton";

type Props = {
  content: string | React.ReactNode;
  to: string;
};

const StyledCTALink = styled(CTAButton)``;

const MoreInfo = (props: Props) => {
  return (
    <StyledCTALink to={props.to} as={Link}>
      {props.content}
    </StyledCTALink>
  );
};

export default MoreInfo;
