import styled from "styled-components";

const CartButton = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
`;

const CartIcon = styled.svg`
  display: block;
  position: relative;
`;

const Counter = styled.div`
  position: absolute;
`;

const Cart = () => {
  return (
    <CartButton>
      <CartIcon
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-3.777-9h-2.168l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z" />
        <Counter />
      </CartIcon>
    </CartButton>
  );
};

export default Cart;
