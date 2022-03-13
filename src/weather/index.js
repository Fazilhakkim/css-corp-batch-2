/* eslint-disable keyword-spacing */
import React, {
  memo,
} from 'react';
import '../index.css';
import Products from '../products.json';

const Weather = () => {
  console.log('html render');
  return (
    <div className="fazil">
      <h1>App is working</h1>
      {
        Products && Products.map((product) => (
          <div className="box" key={product.title}>
            <strong>{product.title}</strong>
            <div className="content">
              {product.price}
              {
                product.tech && product.tech.map((data) => (
                  <div key={product.title}>
                    {data.name}
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  );
};
export default memo(Weather);
