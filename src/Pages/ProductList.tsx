import { useLocation } from 'react-router';

const ProductList = () => {
  const path = useLocation().pathname.split('/')?.[1];

  return <div>ProductList</div>;
};
export default ProductList;
