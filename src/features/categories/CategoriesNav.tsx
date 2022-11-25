import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "../ui/Styles/Container";
import StylesTopWrapper from "../ui/Styles/StylesTopWrapper";

interface testType {
  categories: Array<string>;
  id: number;
}

const StyledCategoryNav = styled.nav`
  ${StylesTopWrapper}
`;

{
  // make this a reusable component, since it's really similar to the nav on the header
}

const ListWrapper = styled.ul`
  ${Container}
  display: flex;
  gap: 1rem;
  text-transform: capitalize;
`;

const CategoriesNav = ({ categories, id }: testType) => {
  return (
    <StyledCategoryNav>
      <ListWrapper>
        {categories.map((categorie) => (
          <li key={id}>
            <Link to={`/store/${categorie.replaceAll(" ", "-")}`}>
              {categorie}
            </Link>
          </li>
        ))}
      </ListWrapper>
    </StyledCategoryNav>
  );
};

export default CategoriesNav;
