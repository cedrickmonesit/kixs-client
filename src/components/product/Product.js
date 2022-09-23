import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className="title favorites__title">Product</h1>

      <p>{id}</p>
    </div>
  );
};

export default Product;
