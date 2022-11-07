import styled from "styled-components";
import { Link } from "react-router-dom";
import CTAButton from "./CTAButton";

type Props = {
  content: string | React.ReactNode;
  to: string;
  ariaLabel?: string;
};

const CTALink = styled(CTAButton)``;

const CTARouterLink = (props: Props) => {
  return (
    <CTALink to={props.to} as={Link} aria-label={props.ariaLabel}>
      {props.content}
    </CTALink>
  );
};

export default CTARouterLink;

// fixed overload by setting "strong type?" (not optional) on the to prop
