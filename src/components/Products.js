import React from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      Products
      <Link to="/" className='underline'>go to dashboard</Link>
    </div>
  );
}

export default Products