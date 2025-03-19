
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../store/slices/cart";

const Cart = () => {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <div className="container mt-4">
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p className="text-muted">Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item d-flex align-items-center justify-content-between border-bottom py-3">
                            <img src={item.thumbnail} alt={item.title} className="cart-img" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                            
                            <div className="cart-details flex-grow-1 mx-3">
                                <h5 className="mb-1">{item.title}</h5>
                                <p className="text-danger fw-bold mb-0">${item.price}</p>
                            </div>

                            <div className="cart-actions d-flex align-items-center">
                                <button className="btn btn-sm btn-outline-primary mx-1" onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                                <span className="mx-2">{item.quantity}</span>
                                <button className="btn btn-sm btn-outline-primary mx-1" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                                <button className="btn btn-sm btn-outline-danger mx-2" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;