import React from 'react';
import './GetStarted.css';

function GetStarted() {
    const categories = [
        {
            title: 'Chelsea boots',
            description: 'close-fitting ankle boots feature signature elasticated side panels for easy on-and-off wear.',
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
            description: 'Stylist boots for the true boots lovers.',
            image: '/images/img8.jpeg'
        },
        {
            title: 'Lady Sandals',
            description: 'Esthetic  Scandals with Brown shaded color',
            image: '/images/img9.jpeg'
        },
        
    ];

    return (
        <div className="get-started">
            <h1>Discover Our Collection</h1>
            <p className="intro">Find your perfect pair from our diverse range of styles</p>

            <div className="category-grid"> 
                {categories.map((category, index) => (
                    <div key={index} className="category-card">
                        <img src={category.image} alt={category.title} className="category-image" />
                        <div className="category-info">
                            <h3>{category.title}</h3>
                            <p>{category.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GetStarted;