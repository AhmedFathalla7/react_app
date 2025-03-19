
import { useParams } from "react-router";
import { useEffect, useState} from "react";
import axios from "axios";

const data = import.meta.env.VITE_API_BASE_URL;

const ProductDetails = () => {
    const params = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`${data}/products/${params.id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error(error));
    }, [params.id]);
    if (!product) {
        return <div className="container mt-4 text-center"><h2>Loading...</h2></div>;
    }

    return (
        <div className="container mt-4">
            <div className="row align-items-center">  
                <div className="col-md-6 text-center">
                    <img src={product.thumbnail} className="img-fluid rounded shadow" alt={product.title} />
                </div>

                <div className="col-md-6">
                    <h2 className="fw-bold">{product.title}</h2>
                    <span className="badge text-bg-success fs-6">{product.category}</span>
                    <p className="mt-3 text-muted">{product.description}</p>
                    <h4 className="fw-bold text-danger">Price: ${product.price}</h4>
                    <button className="btn btn-primary btn-lg mt-3">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;