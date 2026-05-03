import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, search } from "../features/productSlice";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const dispatch = useDispatch();
  const { filtered } = useSelector(s => s.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="p-4">
      <input
        placeholder="Search..."
        onChange={(e) => dispatch(search(e.target.value))}
        className="border p-2 mb-4"
      />

      <div className="grid grid-cols-4 gap-4">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
