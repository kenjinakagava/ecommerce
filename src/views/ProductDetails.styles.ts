import styled from "styled-components";
import ProductShortDescription from "../features/products/ProductShortDescription.styles";
import Container from "../styles/Container.styles";
import CTA from "../styles/CTA.styles";

export const ProductContainer = styled.div`
  ${Container}
  padding: 1rem;
  min-height: calc(100vh - 110px);
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

// 1024 so the layout doesn't break on tablets

export const CTAButton = styled.button`
  ${CTA};
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const ProductDescription = styled(ProductShortDescription)`
  white-space: pre-line;
`;

export const ProductPrice = styled.h3`
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
