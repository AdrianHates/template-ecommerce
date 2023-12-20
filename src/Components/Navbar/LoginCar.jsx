import { cart, magnifyingGlass, user } from "../../assets/icons";

export default function LoginCar () {
  return(
    <ul>
      
      <li>
        {user}
      </li>
      
      <li className="search">
        {magnifyingGlass}
      </li>
      
      <li>
        {cart}
      </li>
      
    </ul>
  )
}