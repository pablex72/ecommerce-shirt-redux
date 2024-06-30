import React, { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    //API
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  const cards = products.map(product =>  (
      <div className="col-md-3">
        <div class="card" style={{width: '18rem'}}>
          <img class="card-img-top" src={product.image} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    )
  )

  return (
    <>
      <h1> Product Dashboard </h1>
      {/* {JSON.stringify(products)} */}
      <div className="row">
        {cards}
      </div>
    </>
  );
};

export default Product;
