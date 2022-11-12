import Container from "../Styles/Container";
import styled from "styled-components";
import { ProductsAPIResponse } from "../Interface";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StoreWrapper = styled(Container)`
  display: grid;
  gap: 3rem;
  margin: 20px auto;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 45%);
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 30%);
  }
`;

const StoreItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-self: stretch;
  border-radius: 8px;
`;

const CoverWrapper = styled.div`
  overflow: hidden;
  border-radius: 8px;
`;

const AlbumCover = styled(motion.img)`
  max-inline-size: 100%;
  block-size: auto;
  cursor: pointer;
`;

const StyledLink = styled(motion(Link))`
  display: flex;
`;

const StoreView = (props: ProductsAPIResponse) => {
  return (
    <StoreWrapper as="ul">
      {props.data?.map((data) => (
        <StoreItemContainer key={data.id}>
          <CoverWrapper>
            <StyledLink
              to={`/${data.title?.replaceAll(" ", "-")}`}
              aria-label={`Show details about the album ${data.title}`}
              whileHover={{ scale: 1.15 }}
              whileFocus={{ scale: 1.15 }}
            >
              <AlbumCover
                src={data.cover?.[0]}
                srcSet={`${data.cover?.[0]} 300w, ${data.cover?.[1]} 600w, ${data.cover?.[2]} 1200w`}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 90vw"
                alt={`Cover for the album ${data.title}`}
                height={500}
                width={500}
              />
            </StyledLink>
          </CoverWrapper>
          <h2>{data.title}</h2>
          <h3>${data.price}</h3>
        </StoreItemContainer>
      ))}
    </StoreWrapper>
  );
};

export default StoreView;
