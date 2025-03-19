import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {addToCart} from "../store/slices/cart";

const ProductCard = (props) => {
    const navigate = useNavigate();
    const { productItem, handleDelete } = props;

    const redirectToDetails = (id) => {
        navigate(`/product-details/${id}`);
    };

    const dispatch = useDispatch();

    return (
      <div className="card">
        <img src={productItem.thumbnail} className="card-img-top" alt="Product Image" />
        <div className="card-body">
          <h5 className="card-title">{productItem.title}</h5>
          <span className="badge text-bg-success">{productItem.category}</span>
          <p className="card-text mt-2">{productItem.description} </p>
          <p className="fw-bold text-danger">{productItem.price}</p>
          <button
            className="btn btn-light"
            onClick={() => dispatch(addToCart(productItem.id))}
          >
            Add to Cart
          </button>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-primary"
            onClick={() => redirectToDetails(productItem.id)}
          >
            View
          </button>
          <button
            className="btn btn-danger mx-2"
            onClick={() => handleDelete(productItem.id)}
          >
            Delete Recipe
          </button>
        </div>
      </div>
    );
};
export default ProductCard;
