import React from 'react';

const ProductList = ({ data }) => {
  console.log('data', data);
  return (
    <div className="list">
      <div className="list__head">
        <div className="list__star"></div>
        <div className="list__rate"></div>
        <div className="list__release">Release</div>
        <div className="list__manufacturer">Manufacturer</div>
        <div className="list__model">Model</div>
        <div className="list__hash">Hash</div>
        <div className="list__noise">Noise</div>
        <div className="list__power">Power</div>
        <div className="list__algorithm">Algorithm</div>
        <div className="list__efficiency">Efficiency</div>
        <div className="list__profit">Profit</div>
        <div className="list__price">Price</div>
      </div>
    </div>
  )
}

export default ProductList;