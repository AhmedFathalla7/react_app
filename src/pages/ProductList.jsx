import { useEffect, useState } from "react";
import ProductCard from '../components/productcard'
// import { axiosInstance } from "../apis/config";
import axios from "axios";

const data = import.meta.env.VITE_API_BASE_URL;

const ProductList = () => {
    const [products, setproducts] = useState([]);

    useEffect(() => {
        axios.get(`${data}/products`)
            .then((response) => {
                setproducts(response.data.products);
            })
            .catch((err) => {
                console.log(err);
            });
    },[])

  const handleDeleteproduct = (id) => {
    const newList = products.filter((product) => product.id !== id);
    setproducts(newList);
  };


    return (
        <div>
            <h1>Product List</h1>
            <hr />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.map((product) => {
                    return (
                        <div className="col" key={product.id}>
                        <ProductCard
                            productItem={product}
                            handleDelete={(id) => handleDeleteproduct(id)}
                        />
                        </div>
                    );
                    })}
            </div>

        </div>
    )
}
export default ProductList;
