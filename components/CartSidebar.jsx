import { useCart } from '../pages/cart-context';

const CartSidebar = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
  };

  return (
    <div className="cart-sidebar">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.product.id}>
            <h3>{item.product.name}</h3>
            <p>Size: {item.size}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="total">
        <strong>Total: </strong> ${calculateTotal()}
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default CartSidebar;
