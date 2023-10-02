import { useContext } from "react";
import { CartContext } from "../../menu/ShoppingWebsiteMenu";

export default function CheckoutPage() {
  const { cart } = useContext(CartContext);

  const distinctArray = cart
    .filter((element, index, self) => index == self.indexOf(element))
    .map((cartElement) => (
      <tr key={cartElement.name}>
        <td style={{ display: "flex", justifyContent: "center"}}><img src={cartElement.image} style={{ width: "40%", height: '40%'}}/></td>
        <td>{cartElement.name}</td>
        <td>
          {cart.filter((element) => element.name === cartElement.name).length}
        </td>
        <td>£ {cartElement.price}</td>
      </tr>
    ));

  return (
    <div style={{ width: '100%', display: "flex", justifyContent: "center" }}>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Unit</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          { distinctArray }
        </tbody>
      </table>
    </div>
  );
}
