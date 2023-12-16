import { cart, magnifyingGlass, user } from "../../assets/icons";
import Search from "./Search";

export default function LoginCar () {
  return(
    <ul>
      
      <li>
        {user}
      </li>
      <li>
        {magnifyingGlass}
      </li>
      <li>
        {cart}
      </li>
      
    </ul>
  )
}