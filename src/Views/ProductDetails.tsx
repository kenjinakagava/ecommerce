import styled from "styled-components";
import { Response } from "../Interface";
type Props = {
  title: string;
  description: string;
  cover: string;
};

const ProductWrapper = styled.div`
  height: calc(100vh - 110px);
`;

const ProductDetails = (props: Props) => {
  return (
    <ProductWrapper>
      <div>{props.title}</div>
      <div></div>
    </ProductWrapper>
  );
};

export default ProductDetails;
