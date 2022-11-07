import Container from "../Styles/Container";
import styled from "styled-components";
import { APIData } from "../Interface";
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
  max-width: 100%;
  border-radius: 8px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  overflow: hidden;
  border-radius: 8px;
`;

const StoreView = (props: APIData) => {
  return (
    <StoreWrapper as="ul">
      {props.data?.map((data) => (
        <StoreItemContainer key={data.id}>
          <StyledLink to={`/${data.title?.replaceAll(" ", "-")}`}>
            <AlbumCover
              src={data.cover}
              alt={data.title}
              whileHover={{ scale: 1.15 }}
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
