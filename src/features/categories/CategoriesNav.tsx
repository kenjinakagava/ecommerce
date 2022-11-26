import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "../ui/Styles/Container";
import StylesTopWrapper from "../ui/Styles/StylesTopWrapper";

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
`;

const CategoriesNav = ({ categories }: testType) => {
  return (
    <StyledCategoryNav>
      <ListWrapper>
        <li>
          <Link to={"/store"}>All</Link>
        </li>
        {categories.map((categorie) => (
          <li key={categorie}>
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

// change line 31 (key={id} to something else, in the current form the id will always be the same for every list item)
// fixed i can just use the category again since they're going to be unique
// i need to find a way to remove duplicate categories in a separate component from main to improve reusability, i can then
// import it here.
