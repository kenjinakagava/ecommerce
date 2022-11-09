import Container from "../Styles/Container";
import styled from "styled-components";
import { ProductsAPIResponse } from "../Interface";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StoreWrapper = styled(Container)`
  flex-wrap: wrap;
  gap: 5rem;
  @media (min-width: 768px) {
    justify-content: space-between;
    min-height: 100vh;
    align-items: center;
    gap: 2rem;
    margin: 20px auto;
  }
`;

const StoreItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: 768px) {
    width: 40%;
    align-self: stretch;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
`;

const AlbumCover = styled(motion.img)`
  max-inline-size: 100%;
  block-size: auto;
  border-radius: 8px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  overflow: hidden;
  border-radius: 8px;
`;

const StoreView = (props: ProductsAPIResponse) => {
  return (
    <StoreWrapper as="ul">
      {props.data?.map((data) => (
        <StoreItemContainer key={data.id}>
          <StyledLink to={`/${data.title?.replaceAll(" ", "-")}`}>
            <AlbumCover
              src={data.cover?.[0]}
              srcSet={`${data.cover?.[0]} 300w, ${data.cover?.[1]} 600w, ${data.cover?.[2]} 1200w`}
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 90vw"
              alt={data.title}
              height={500}
              width={500}
            />
          </StyledLink>
          <h2>{data.title}</h2>
          <h3>${data.price}</h3>
        </StoreItemContainer>
      ))}
    </StoreWrapper>
  );
};

export default StoreView;
