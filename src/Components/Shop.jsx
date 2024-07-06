import React from "react";
import './shop.css';
import { useCart } from './CartContext';

function Shop() {
    const { addToCart } = useCart();
    const categories = [
        {
            title: 'Chelsea boots',
            description: 'Close-fitting ankle boots feature signature elasticated side panels for easy on-and-off wear.',
            image: '/images/img1.jpeg'
        },
        {
            title: 'Casual',
            description: 'Stylish and comfortable shoes for everyday wear.',
            image: '/images/img2.jpeg'
        },
        {
            title: 'Leather',
            description: 'Versatile shoes for various sports and activities.',
            image: '/images/img3.jpeg'
        },
        {
            title: 'Formal',
            description: 'Elegant shoes for professional and formal occasions.',
            image: '/images/img4.jpeg'
        },
        {
            title: 'Outdoor',
            description: 'Durable shoes for hiking and outdoor adventures.',
            image: '/images/img5.jpeg'
        },
        {
            title: 'Limited Edition',
            description: 'Exclusive designs for the true shoe enthusiast.',
            image: '/images/img6.jpeg'
        },
        {
            title: 'Casual Limited Edition',
            description: 'Exclusive designs for the true shoe enthusiast.',
            image: '/images/img7.jpeg'
        },
        {
            title: 'Leather Boots',
            description: 'Stylish boots for the true boots lovers.',
            image: '/images/img8.jpeg'
        },
        {
            title: 'Lady Sandals',
            description: 'Esthetic Sandals with Brown shaded color',
            image: '/images/img9.jpeg'
        },
    ];

    const handleAddToCart = (category) => {
        addToCart(category);
        
    };

    return (
        <div className="shop-container-custom">
            <h1 className="intro">Get Shopping</h1>
            <p className="shop-intro-custom">Kickin' Shoes Where Style Meets Comfort</p>
            
            <div className="category-grid-custom">
                {categories.map((category, index) => (
                    <div key={index} className="category-card-custom">
                        <img src={category.image} alt={category.title} className="category-image-custom" />
                        <div className="category-info-custom">
                            <h3>{category.title}</h3>
                            <p>{category.description}</p>
                            <button 
                                className="add-to-cart-btn-custom" 
                                onClick={() => handleAddToCart(category)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shop;