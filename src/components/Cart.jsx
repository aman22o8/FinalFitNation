import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

const Cart = () => {
    
    const [cart_products, setCartProducts] = useState([
        //fetch from database
        {
            id: "1",
            title: "Product 1",
            originalPrice: "100",
            currentPrice: "80",
            description: "Product 1 description",
            image: "",
            category: "equipment",
            rating: "4.5",
            quantity:"1",
        },
        {
            id: "2",
            title: "Product 2",
            originalPrice: "120",
            currentPrice: "100",
            description: "Product 2 description",
            image: "",
            category: "equipment",
            rating: "4.2",
            quantity:"1",
        },
    ]);

    const [subtotal, setSubtotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [total, setTotal] = useState(0);

    // Calculate subtotal, discount, and total
    useEffect(() => {
        const subTotal = cart_products.reduce((acc, product) => acc + product.originalPrice * product.quantity, 0);
        setSubtotal(subTotal);
        setDiscount(subTotal - cart_products.reduce((acc, product) => acc + product.currentPrice * product.quantity, 0));
        setTotal(subTotal - (subTotal - cart_products.reduce((acc, product) => acc + product.currentPrice * product.quantity, 0)));
    }, [cart_products]);

    return (
        <div className='py-20 bg-[#F8F8F3]'>
            <div className='px-16 py-4 flex flex-col text-lg'>
                <div className='py-4 flex flex-row'>
                    <Link to='/shop'>
                        <h1 className='text-gray-500'>Shop /</h1>
                    </Link>
                    <h1 className='px-1 font-semibold'> Cart</h1>
                </div>
                <div className='flex flex-row items-center py-5'>
                    <span className='bg-orange-600 w-3 h-6 mr-3'></span>
                    <h1 className='text-xl font-semibold text-orange-600 '>Your Added Products</h1>
                </div>
                <div className='flex flex-row border justify-between border-gray-200 shadow-md p-3'>
                    <span className='w-1/2'><h1>Product</h1></span>
                    <div className='flex flex-row w-1/2'> 
                        <span className='w-1/3'>
                            <h1 className='text-md'>Price</h1>
                        </span>
                        <span className='w-1/3'>
                            <h1 className='text-md'>Quantity</h1>
                        </span>
                        <span className='w-1/3'>
                            <h1 className='text-md'>Subtotal</h1>
                        </span>
                    </div>
                </div>
                <div className='flex flex-col pt-10 gap-10'>
                    {cart_products.map((product, index) => (
                        <ProductCard key={index} product={product} setCartProducts={setCartProducts} cart_products={cart_products} />
                    ))}
                </div>
                <div className='py-12'>
                <Link to="/shop" className='p-2 w-40 text-md text-white flex justify-center bg-orange-600 hover:bg-orange-700 shadow-md rounded-md'>
                    <h1>Return To Shop</h1>
                </Link>
                </div>
                <div className='flex justify-center'>
                <div className='flex flex-col w-80 border-2 border-orange-600 p-5'>
                    <h1 className='font-bold'>Cart Total</h1>
                    <hr className='py-2'/>
                    <span className='flex flex-row justify-between font-semibold'>
                        <h1>Subtotal:</h1>
                        <h1>Rs.{subtotal}</h1>
                    </span>
                    <span className='flex flex-row justify-between py-2 font-semibold'>
                        <h1>Discount:</h1>
                        <h1>Rs.{discount}</h1>
                    </span>
                    <hr className='py-2'/>
                    <span className='flex flex-row justify-between font-semibold'>
                        <h1>Total:</h1>
                        <h1>Rs.{total}</h1>
                    </span>
                    <span className='flex justify-center pt-7'>
                    <button className='p-2 text-md text-white bg-orange-600 hover:bg-orange-700 shadow-md rounded-md'>
                        Proceed to checkout
                    </button>
                    </span>
                </div>
                </div>
            </div>
        </div>
    );
};

const ProductCard = ({ product, setCartProducts, cart_products }) => {
    const [quantity, setQuantity] = useState(product.quantity || 1);

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
        setCartProducts(cart_products.map(item => item.id === product.id ? { ...item, quantity: newQuantity } : item));
    };

    return (
        <div className='flex flex-row border justify-between border-gray-200 shadow-md p-3'>
            <div className='flex flex-row items-center gap-3 w-1/3'>
                <img src={product.image} alt="Product Photo" className='w-10 h-10 border border-gray-300' />
                <h1 className='font-bold'>{product.title}</h1>
            </div>
            <div className='flex flex-row w-1/2'>
                <span className='w-1/3'>
                    <h1 className='text-md'>Rs.{product.currentPrice}</h1>
                </span>
                <span className='w-1/3'>
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="w-16 px-2 py-1 border border-gray-300 rounded"
                    />
                </span>
                <span className='w-1/3'>
                    <h1 className='text-md'>Rs.{product.currentPrice * quantity}</h1>
                </span>
            </div>
        </div>
    );
};

export default Cart;
