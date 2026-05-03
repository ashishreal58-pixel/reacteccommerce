import { useDispatch } from "react-redux";
import { add } from "../features/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="border p-4">
      <img src={product.thumbnail} className="h-40 mx-auto" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button
        onClick={() => dispatch(add(product))}
        className="bg-blue-500 text-white p-2"
      >
        Add to Cart
      </button>
    </div>
  );
}
