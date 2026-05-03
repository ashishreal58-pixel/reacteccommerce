import { useSelector, useDispatch } from "react-redux";
import { remove } from "../features/cartSlice";

export default function Cart() {
  const cart = useSelector(s => s.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      {cart.map(i => (
        <div key={i.id}>
          {i.title}
          <button onClick={() => dispatch(remove(i.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
