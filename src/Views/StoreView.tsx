import Container from "../Styles/Container";
import styled from "styled-components";
import { APIData } from "../Interface";

const StoreWrapper = styled(Container)`
  min-height: calc(100vh - 110px);
  flex-wrap: wrap;
`;

const StoreItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 25%;
  }
`;

const StoreView = (props: APIData) => {
  return (
    <StoreWrapper>
      {props.data?.map((data) => (
        <StoreItemWrapper>{data.description}</StoreItemWrapper>
      ))}
    </StoreWrapper>
  );
};

export default StoreView;
