import { cart, user } from "../../assets/icons";
import Search from "./Search";

export default function LoginCar () {
  return(
    <ul>
      <li>
        <Search />
      </li>
      <li>
        {user}
      </li>
      <li>
        {cart}
      </li>
    </ul>
  )
}