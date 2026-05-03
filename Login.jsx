import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(login())}>Login</button>;
}
