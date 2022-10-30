import styled from "styled-components";
import { Link } from "react-router-dom";
import CTAButton from "./CTAButton";

type Props = {
  content: string | React.ReactNode;
  to: string;
};

const MoreInfo = (props: Props) => {
  return (
    <CTAButton to={props.to} as={Link}>
      {props.content}
    </CTAButton>
  );
};

export default MoreInfo;

// fixed overload by setting "strong type?" (not optional) on the to prop
