import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Container from "../ui/styles/Container";
import StylesTopWrapper from "../ui/styles/StylesTopWrapper";

interface testType {
  categories: Array<string>;
}

const StyledCategoryNav = styled.nav`
  ${StylesTopWrapper}
`;

const ListWrapper = styled.ul`
  ${Container}
  display: flex;
  gap: 1rem;
  text-transform: capitalize;
  .active {
    border-bottom: 3px solid black;
  }
`;

const CategoriesNav = ({ categories }: testType) => {
  return (
    <StyledCategoryNav>
      <ListWrapper>
        <li>
          <NavLink to={"/store"} end>
            All
          </NavLink>
        </li>
        {categories.map((categorie) => (
          <li key={categorie}>
            <NavLink to={`/store/${categorie.replaceAll(" ", "-")}`}>
              {categorie}
            </NavLink>
          </li>
        ))}
      </ListWrapper>
    </StyledCategoryNav>
  );
};

export default CategoriesNav;

// change line 31 (key={id} to something else, in the current form the id will always be the same for every list item)
// fixed i can just use the category again since they're going to be unique
// i need to find a way to remove duplicate categories in a separate component from main to improve reusability, i can then
// import it here.
