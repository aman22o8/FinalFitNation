import React, { useState } from 'react';
import { AiFillStar, AiOutlineHeart, AiOutlineSync, AiOutlineTruck } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import AllProducts from './AllProducts';

const Details = () => {
  const location = useLocation();
  const product = location.state.product;
  const products = location.state.products;
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = (product) => {
    // Implement add to cart functionality
  };

  const handleWishlist = (product) => {
    // Implement add to wishlist functionality
  };

  let filteredProducts = [];
  filteredProducts = products.filter(prod => prod.category === product.category).slice(0, 5);

  return (
    <div className="bg-[#F8F8F3] flex flex-col">
        <div className='px-16 py-8 flex flex-row pt-24'>
            <Link to='/shop'>
                <h1 className='text-gray-500'>Shop /</h1>
            </Link>
            <h1 className='px-1 text-gray-500'> Details / </h1>
            <h1 className='px-1 font-semibold'>{product.title}</h1>
        </div>
        <div className='flex justify-center'>
            <div className="flex justify-between w-full px-10">
                {/* Product Image */}
                <div className="w-1/2">
                <img src={product.image} alt="Product" className="w-full border-2 border-black" />
                </div>
                {/* Product Details */}
                <div className="w-1/2 px-20">
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <h2 className="text-2xl font-semibold text-orange-500 mb-4">Rs.{product.currentPrice}</h2>
                <div className="flex items-center mb-4">
                    <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                        <AiFillStar key={index} className="text-yellow-400" />
                    ))}
                    </div>
                    <span className="text-gray-500 ml-2">({product.rating})</span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                {/* Size Options */}
                <div className="flex items-center mb-4">
                    <span className="mr-2">Size:</span>
                    {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <button
                        key={size}
                        className={`mx-1 px-2 py-1 border border-gray-300 rounded ${
                        selectedSize === size ? 'bg-gray-200' : ''
                        }`}
                        onClick={() => handleSizeSelection(size)}
                    >
                        {size}
                    </button>
                    ))}
                </div>
                {/* Quantity Option */}
                <div className="flex items-center mb-4">
                    <span className="mr-2">Quantity:</span>
                    <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 px-2 py-1 border border-gray-300 rounded"
                    />
                </div>
                <div className="flex flex-row gap-5">
                {/* Add to Cart Button */}
                  <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-orange-600 text-gray-50 py-2 px-4 rounded hover:bg-orange-800 hover:text-white"
                  >
                      Add to Cart
                  </button>
                  {/* Handle wishlist */}
                  <button onClick={() => handleWishlist(product)} className='flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10'>
                    <AiOutlineHeart className='text-red-500 text-2xl' />
                  </button>
                </div>
                <div className='py-10 flex flex-row gap-3'>
                    <div className='flex flex-row gap-2 p-2 border border-black'>
                        <AiOutlineTruck className=' text-3xl'/>
                        <h1 className='text-xl font-bold'>Free Delivery</h1>
                    </div>
                    <div className='flex flex-row gap-2 p-2 border border-black'>
                        <AiOutlineSync className=' text-3xl'/>
                        <h1 className='text-xl font-bold'>Free 30 Days Return</h1>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className='p-10'>
            <div className='flex flex-row items-center py-10'>
                <span className='bg-orange-600 w-3 h-6 mr-3'></span>
                <h1 className='text-xl font-semibold text-orange-600 '>Related Item</h1>
            </div>
            <div className='flex flex-wrap justify-left gap-7'>
                {filteredProducts.map((product, index) => (
                    <ProductCard key={index} product={product} products={products}/>
                ))}
            </div>
        </div>
    </div>
  );
};

const ProductCard = ({ product, products }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to="/details" state={{product: product, products: products}}>
      <div
        className='relative p-2 bg-white shadow-md'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={product.image} alt="Product Photo" className='w-52 h-52 border border-gray-300' />
        {isHovered && (
          <button className='absolute top-44 left-2 right-2 flex items-center justify-center bg-gray-200 opacity-90 font-bold text-black h-10'>
            View Details
          </button>
        )}
        <div className='p-2'>
          <h1 className='font-bold'>{product.title}</h1>
          <h1 className='text-sm text-gray-500'>{product.category}</h1>
          <div className='flex items-center mt-2 gap-1'>
            <h1 className='font-bold text-md'>Rs.{product.currentPrice}</h1>
            <h1 className='text-xs text-gray-400 line-through'>Rs.{product.originalPrice}</h1>
            <h1 className='text-xs text-orange-400'>(Rs.{product.originalPrice - product.currentPrice} OFF)</h1>
          </div>
          <div className='flex items-center py-2'>
            {[...Array(5)].map((_, index) => (
              <h1 key={index} className='text-md text-yellow-400'><AiFillStar /></h1>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Details;
