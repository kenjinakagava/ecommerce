import Container from "../Styles/Container";
import styled from "styled-components";
import { APIData } from "../Interface";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StoreWrapper = styled(Container)`
  flex-wrap: wrap;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const StoreItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: 30%;
    height: 50%;
  }
  a {
    overflow: hidden;
  }
`;

const StoreItemWrapper = styled.div``;

const AlbumCover = styled(motion.img)`
  max-width: 100%;
  height: 240px;
  border-radius: 8px;
  height: unset;
  &:hover {
    cursor: pointer;
  }
`;

const StoreView = (props: APIData) => {
  return (
    <StoreWrapper as="ul">
      {props.data?.map((data) => (
        <StoreItemContainer>
          <Link to={`/${data.title?.replaceAll(" ", "-")}`}>
            <AlbumCover
              src={data.cover}
              alt={data.title}
              whileHover={{ scale: 1.15 }}
            />
          </Link>
          <h2>{data.title}</h2>
          <h3>${data.price}</h3>
        </StoreItemContainer>
      ))}
    </StoreWrapper>
  );
};

export default StoreView;
