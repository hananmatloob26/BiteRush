
const categories = [
    {
        id: 1,
        name: 'Burgers',
        icon: '🍔',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop'
    },
    {
        id: 2,
        name: 'Pizza',
        icon: '🍕',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop'
    },
    {
        id: 3,
        name: 'Chicken',
        icon: '🍗',
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=200&h=200&fit=crop'
    },
    {
        id: 4,
        name: 'Pakistani',
        icon: '🍛',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&h=200&fit=crop'
    },
    {
        id: 5,
        name: 'Chinese',
        icon: '🥡',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&h=200&fit=crop'
    },
    {
        id: 6,
        name: 'Mexican',
        icon: '🌮',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=200&h=200&fit=crop'
    },
    {
        id: 7,
        name: 'Desserts',
        icon: '🍰',
        image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=200&h=200&fit=crop'
    },
    {
        id: 8,
        name: 'Coffee',
        icon: '☕',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=200&fit=crop'
    }
];


const restaurants = [
    {
        id: 1,
        name: 'Burger House',
        description: 'Premium handcrafted burgers made with 100% Angus beef and fresh ingredients. Experience the best burger in town.',
        cuisine: 'Fast Food',
        category: 'Burgers',
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop',
        logo: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=100&h=100&fit=crop',
        rating: 4.8,
        reviews: 342,
        deliveryTime: '25-35',
        deliveryFee: 2.99,
        priceRange: '$$',
        openingHours: '10:00 AM - 11:00 PM',
        menu: [1, 2, 3, 4, 5]
    },
    {
        id: 2,
        name: 'Pizza Point',
        description: 'Authentic Italian pizzas with wood-fired crust and premium toppings. Made fresh daily.',
        cuisine: 'Italian',
        category: 'Pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop',
        logo: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100&h=100&fit=crop',
        rating: 4.6,
        reviews: 289,
        deliveryTime: '30-40',
        deliveryFee: 3.49,
        priceRange: '$$',
        openingHours: '11:00 AM - 10:00 PM',
        menu: [6, 7, 8, 9, 10]
    },
    {
        id: 3,
        name: 'Karachi Bites',
        description: 'Authentic Pakistani cuisine with traditional recipes passed down through generations.',
        cuisine: 'Pakistani',
        category: 'Pakistani',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop',
        logo: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=100&h=100&fit=crop',
        rating: 4.7,
        reviews: 456,
        deliveryTime: '35-45',
        deliveryFee: 1.99,
        priceRange: '$$',
        openingHours: '11:00 AM - 11:30 PM',
        menu: [11, 12, 13, 14, 15]
    },
    {
        id: 4,
        name: 'Spice Garden',
        description: 'Exquisite Chinese cuisine with bold flavors and fresh ingredients. Taste the orient.',
        cuisine: 'Chinese',
        category: 'Chinese',
        image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=600&h=400&fit=crop',
        logo: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=100&h=100&fit=crop',
        rating: 4.5,
        reviews: 234,
        deliveryTime: '30-40',
        deliveryFee: 2.49,
        priceRange: '$$',
        openingHours: '11:00 AM - 10:00 PM',
        menu: [16, 17, 18, 19, 20]
    },
    {
        id: 5,
        name: 'Grill Nation',
        description: 'Premium grilled chicken and BBQ dishes. Marinated to perfection and cooked over open flame.',
        cuisine: 'BBQ',
        category: 'Chicken',
        image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&h=400&fit=crop',
        logo: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=100&h=100&fit=crop',
        rating: 4.6,
        reviews: 198,
        deliveryTime: '25-35',
        deliveryFee: 2.99,
        priceRange: '$$',
        openingHours: '12:00 PM - 11:00 PM',
        menu: [21, 22, 23, 24, 25]
    },
    {
        id: 6,
        name: 'Wok & Roll',
        description: 'Authentic Asian cuisine with a modern twist. Fresh ingredients, bold flavors.',
        cuisine: 'Chinese',
        category: 'Chinese',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&h=400&fit=crop',
        logo: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=100&h=100&fit=crop',
        rating: 4.4,
        reviews: 167,
        deliveryTime: '30-45',
        deliveryFee: 2.99,
        priceRange: '$$',
        openingHours: '11:00 AM - 10:30 PM',
        menu: [26, 27, 28, 29, 30]
    },
    {
        id: 7,
        name: 'Sweet Cravings',
        description: 'Decadent desserts and sweet treats. Indulge in our heavenly creations.',
        cuisine: 'Desserts',
        category: 'Desserts',
        image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=400&fit=crop',
        logo: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=100&h=100&fit=crop',
        rating: 4.9,
        reviews: 523,
        deliveryTime: '20-30',
        deliveryFee: 1.99,
        priceRange: '$$',
        openingHours: '10:00 AM - 10:00 PM',
        menu: [31, 32, 33, 34, 35]
    },
    {
        id: 8,
        name: 'The Coffee Lab',
        description: 'Premium coffee and artisan beverages. Expertly crafted by passionate baristas.',
        cuisine: 'Coffee',
        category: 'Coffee',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop',
        logo: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=100&h=100&fit=crop',
        rating: 4.7,
        reviews: 389,
        deliveryTime: '15-25',
        deliveryFee: 0.99,
        priceRange: '$',
        openingHours: '7:00 AM - 9:00 PM',
        menu: [36, 37, 38, 39, 40]
    },
    {
        id: 9,
        name: 'Taco Fiesta',
        description: 'Authentic Mexican street food with vibrant flavors and fresh ingredients.',
        cuisine: 'Mexican',
        category: 'Mexican',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop',
        logo: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=100&h=100&fit=crop',
        rating: 4.5,
        reviews: 245,
        deliveryTime: '25-35',
        deliveryFee: 2.49,
        priceRange: '$',
        openingHours: '11:00 AM - 10:00 PM',
        menu: [1, 6, 11, 16, 21]
    },
    {
        id: 10,
        name: 'Pasta Paradise',
        description: 'Fresh homemade pasta with authentic Italian sauces. A taste of Italy in every bite.',
        cuisine: 'Italian',
        category: 'Pizza',
        image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&h=400&fit=crop',
        logo: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=100&h=100&fit=crop',
        rating: 4.6,
        reviews: 178,
        deliveryTime: '30-40',
        deliveryFee: 3.49,
        priceRange: '$$$',
        openingHours: '11:30 AM - 10:00 PM',
        menu: [6, 7, 8, 9, 10]
    },
    {
        id: 11,
        name: 'Biryani House',
        description: 'Authentic biryani with aromatic spices and tender meat. A royal feast.',
        cuisine: 'Pakistani',
        category: 'Pakistani',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop',
        logo: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=100&h=100&fit=crop',
        rating: 4.8,
        reviews: 612,
        deliveryTime: '35-45',
        deliveryFee: 1.99,
        priceRange: '$$',
        openingHours: '11:00 AM - 11:00 PM',
        menu: [11, 12, 13, 14, 15]
    },
    {
        id: 12,
        name: 'Donut Delight',
        description: 'Freshly made donuts with creative flavors and colorful toppings.',
        cuisine: 'Desserts',
        category: 'Desserts',
        image: 'https://images.unsplash.com/photo-1552046122-03184de85e08?w=600&h=400&fit=crop',
        logo: 'https://images.unsplash.com/photo-1552046122-03184de85e08?w=100&h=100&fit=crop',
        rating: 4.4,
        reviews: 156,
        deliveryTime: '20-30',
        deliveryFee: 1.49,
        priceRange: '$',
        openingHours: '8:00 AM - 8:00 PM',
        menu: [31, 32, 33, 34, 35]
    }
];


const foodItems = [
    
    {
        id: 1,
        restaurantId: 1,
        name: 'Classic Cheeseburger',
        description: 'Juicy beef patty with melted cheddar cheese, fresh lettuce, tomato, and special sauce.',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
        price: 12.99,
        rating: 4.8,
        category: 'Burgers',
        ingredients: ['Beef patty', 'Cheddar cheese', 'Lettuce', 'Tomato', 'Special sauce', 'Brioche bun'],
        options: {
            size: [
                { name: 'Regular', price: 0 },
                { name: 'Large', price: 2 },
                { name: 'Extra Large', price: 4 }
            ],
            addOns: [
                { name: 'Extra Cheese', price: 1.5 },
                { name: 'Bacon', price: 2 },
                { name: 'Avocado', price: 2.5 },
                { name: 'Jalapeños', price: 0.5 }
            ]
        }
    },
    {
        id: 2,
        restaurantId: 1,
        name: 'Bacon Deluxe',
        description: 'Double beef patty with crispy bacon, caramelized onions, and BBQ sauce.',
        image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop',
        price: 15.99,
        rating: 4.9,
        category: 'Burgers',
        ingredients: ['Double beef patty', 'Bacon', 'Caramelized onions', 'BBQ sauce', 'Pickles', 'Sesame bun'],
        options: {
            size: [
                { name: 'Regular', price: 0 },
                { name: 'Large', price: 2.5 },
                { name: 'Extra Large', price: 5 }
            ],
            addOns: [
                { name: 'Extra Bacon', price: 2 },
                { name: 'Cheese', price: 1.5 },
                { name: 'Fried Egg', price: 1 }
            ]
        }
    },
    {
        id: 3,
        restaurantId: 1,
        name: 'Mushroom Swiss',
        description: 'Beef patty topped with sautéed mushrooms and melted Swiss cheese.',
        image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop',
        price: 14.49,
        rating: 4.7,
        category: 'Burgers',
        ingredients: ['Beef patty', 'Sautéed mushrooms', 'Swiss cheese', 'Garlic aioli', 'Brioche bun'],
        options: {
            size: [
                { name: 'Regular', price: 0 },
                { name: 'Large', price: 2 },
                { name: 'Extra Large', price: 4 }
            ],
            addOns: [
                { name: 'Extra Mushrooms', price: 1.5 },
                { name: 'Caramelized Onions', price: 1 }
            ]
        }
    },
    {
        id: 4,
        restaurantId: 1,
        name: 'Crispy Chicken Burger',
        description: 'Crispy fried chicken breast with coleslaw and honey mustard sauce.',
        image: 'https://images.unsplash.com/photo-1615557960916-5f4791effe9d?w=400&h=300&fit=crop',
        price: 11.99,
        rating: 4.6,
        category: 'Burgers',
        ingredients: ['Crispy chicken', 'Coleslaw', 'Honey mustard', 'Pickles', 'Potato bun'],
        options: {
            size: [
                { name: 'Regular', price: 0 },
                { name: 'Large', price: 2 },
                { name: 'Extra Large', price: 3.5 }
            ],
            addOns: [
                { name: 'Extra Sauce', price: 0.5 },
                { name: 'Cheese', price: 1 }
            ]
        }
    },
    {
        id: 5,
        restaurantId: 1,
        name: 'Veggie Burger',
        description: 'Plant-based patty with avocado, sprouts, and vegan mayo.',
        image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=300&fit=crop',
        price: 13.99,
        rating: 4.5,
        category: 'Burgers',
        ingredients: ['Veggie patty', 'Avocado', 'Sprouts', 'Vegan mayo', 'Tomato', 'Whole wheat bun'],
        options: {
            size: [
                { name: 'Regular', price: 0 },
                { name: 'Large', price: 2 },
                { name: 'Extra Large', price: 3.5 }
            ],
            addOns: [
                { name: 'Extra Avocado', price: 2 },
                { name: 'Vegan Cheese', price: 1.5 }
            ]
        }
    },
    
    {
        id: 6,
        restaurantId: 2,
        name: 'Margherita',
        description: 'Classic pizza with fresh mozzarella, tomatoes, and basil.',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
        price: 14.99,
        rating: 4.7,
        category: 'Pizza',
        ingredients: ['Mozzarella', 'Tomato sauce', 'Fresh basil', 'Olive oil'],
        options: {
            size: [
                { name: 'Medium (12")', price: 0 },
                { name: 'Large (14")', price: 4 },
                { name: 'Extra Large (16")', price: 7 }
            ],
            addOns: [
                { name: 'Extra Cheese', price: 2 },
                { name: 'Fresh Basil', price: 1 },
                { name: 'Garlic', price: 0.5 }
            ]
        }
    },
    {
        id: 7,
        restaurantId: 2,
        name: 'Pepperoni',
        description: 'Loaded with pepperoni and extra mozzarella cheese.',
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
        price: 16.99,
        rating: 4.8,
        category: 'Pizza',
        ingredients: ['Pepperoni', 'Mozzarella', 'Tomato sauce', 'Oregano'],
        options: {
            size: [
                { name: 'Medium (12")', price: 0 },
                { name: 'Large (14")', price: 5 },
                { name: 'Extra Large (16")', price: 8 }
            ],
            addOns: [
                { name: 'Extra Pepperoni', price: 2.5 },
                { name: 'Extra Cheese', price: 2 },
                { name: 'Mushrooms', price: 1.5 }
            ]
        }
    },
    {
        id: 8,
        restaurantId: 2,
        name: 'BBQ Chicken',
        description: 'Grilled chicken with BBQ sauce, red onions, and cilantro.',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
        price: 17.99,
        rating: 4.6,
        category: 'Pizza',
        ingredients: ['Grilled chicken', 'BBQ sauce', 'Red onions', 'Cilantro', 'Mozzarella'],
        options: {
            size: [
                { name: 'Medium (12")', price: 0 },
                { name: 'Large (14")', price: 5 },
                { name: 'Extra Large (16")', price: 8 }
            ],
            addOns: [
                { name: 'Extra Chicken', price: 3 },
                { name: 'Bacon', price: 2 },
                { name: 'Jalapeños', price: 1 }
            ]
        }
    },
    {
        id: 9,
        restaurantId: 2,
        name: 'Veggie Supreme',
        description: 'Bell peppers, mushrooms, olives, onions, and tomatoes.',
        image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop',
        price: 15.99,
        rating: 4.5,
        category: 'Pizza',
        ingredients: ['Bell peppers', 'Mushrooms', 'Olives', 'Onions', 'Tomatoes', 'Mozzarella'],
        options: {
            size: [
                { name: 'Medium (12")', price: 0 },
                { name: 'Large (14")', price: 4 },
                { name: 'Extra Large (16")', price: 7 }
            ],
            addOns: [
                { name: 'Extra Veggies', price: 2 },
                { name: 'Feta Cheese', price: 2 },
                { name: 'Spinach', price: 1 }
            ]
        }
    },
    {
        id: 10,
        restaurantId: 2,
        name: 'Meat Lovers',
        description: 'Pepperoni, sausage, bacon, ham, and ground beef.',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
        price: 19.99,
        rating: 4.9,
        category: 'Pizza',
        ingredients: ['Pepperoni', 'Sausage', 'Bacon', 'Ham', 'Ground beef', 'Mozzarella'],
        options: {
            size: [
                { name: 'Medium (12")', price: 0 },
                { name: 'Large (14")', price: 6 },
                { name: 'Extra Large (16")', price: 9 }
            ],
            addOns: [
                { name: 'Extra Meat', price: 4 },
                { name: 'Extra Cheese', price: 2 }
            ]
        }
    },

    {
        id: 11,
        restaurantId: 3,
        name: 'Chicken Biryani',
        description: 'Aromatic basmati rice with tender chicken and authentic spices.',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop',
        price: 14.99,
        rating: 4.9,
        category: 'Pakistani',
        ingredients: ['Basmati rice', 'Chicken', 'Saffron', 'Yogurt', 'Spices', 'Fried onions'],
        options: {
            size: [
                { name: 'Regular', price: 0 },
                { name: 'Large', price: 3 },
                { name: 'Family', price: 8 }
            ],
            addOns: [
                { name: 'Extra Chicken', price: 3 },
                { name: 'Raita', price: 1 },
                { name: 'Salan', price: 1.5 }
            ]
        }
    },
    {
        id: 12,
        restaurantId: 3,
        name: 'Beef Karahi',
        description: 'Tender beef cooked in traditional karahi with tomatoes and green chilies.',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
        price: 16.99,
        rating: 4.8,
        category: 'Pakistani',
        ingredients: ['Beef', 'Tomatoes', 'Green chilies', 'Ginger', 'Garlic', 'Karahi spices'],
        options: {
            size: [
                { name: 'Regular', price: 0 },
                { name: 'Large', price: 4 },
                { name: 'Family', price: 10 }
            ],
            addOns: [
                { name: 'Extra Meat', price: 4 },
                { name: 'Naan', price: 1 },
                { name: 'Roti', price: 0.5 }
            ]
        }
    },
    {
        id: 13,
        restaurantId: 3,
        name: 'Seekh Kebab',
        description: 'Spiced minced beef kebabs grilled to perfection.',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
        price: 12.99,
        rating: 4.7,
        category: 'Pakistani',
        ingredients: ['Minced beef', 'Onions', 'Coriander', 'Spices', 'Green chilies'],
        options: {
            size: [
                { name: '4 pieces', price: 0 },
                { name: '6 pieces', price: 3 },
                { name: '8 pieces', price: 5 }
            ],
            addOns: [
                { name: 'Extra Kebabs', price: 2 },
                { name: 'Chutney', price: 0.5 },
                { name: 'Naan', price: 1 }
            ]
        }
    },
    {
        id: 14,
        restaurantId: 3,
        name: 'Chicken Tikka',
        description: 'Marinated chicken pieces grilled in tandoor with aromatic spices.',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
        price: 13.99,
        rating: 4.8,
        category: 'Pakistani',
        ingredients: ['Chicken', 'Yogurt', 'Tikka spices', 'Lemon', 'Ginger garlic paste'],
        options: {
            size: [
                { name: 'Quarter', price: 0 },
                { name: 'Half', price: 4 },
                { name: 'Full', price: 7 }
            ],
            addOns: [
                { name: 'Extra Chicken', price: 4 },
                { name: 'Naan', price: 1 },
                { name: 'Mint Chutney', price: 0.5 }
            ]
        }
    },
    {
        id: 15,
        restaurantId: 3,
        name: 'Haleem',
        description: 'Slow-cooked wheat and lentil stew with tender beef and aromatic spices.',
        image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop',
        price: 11.99,
        rating: 4.6,
        category: 'Pakistani',
        ingredients: ['Wheat', 'Lentils', 'Beef', 'Spices', 'Garnish'],
        options: {
            size: [
                { name: 'Regular', price: 0 },
                { name: 'Large', price: 3 }
            ],
            addOns: [
                { name: 'Fried Onions', price: 1 },
                { name: 'Naan', price: 1 },
                { name: 'Lemon', price: 0.25 }
            ]
        }
    },
    
    {
        id: 16,
        restaurantId: 4,
        name: 'Kung Pao Chicken',
        description: 'Spicy stir-fried chicken with peanuts, vegetables, and chili peppers.',
        image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=400&h=300&fit=crop',
        price: 14.99,
        rating: 4.6,
        category: 'Chinese',
        ingredients: ['Chicken', 'Peanuts', 'Bell peppers', 'Chili peppers', 'Soy sauce', 'Ginger'],
        options: {
            size: [
                { name: 'Regular', price: 0 },
                { name: 'Large', price: 3 },
                { name: 'Family', price: 7 }
            ],
            addOns: [
                { name: 'Extra Chicken', price: 3 },
                { name: 'Extra Spicy', price: 0 },
                { name: 'Tofu', price: 2 }
            ]
        }
    },
    {
        id: 17,
        restaurantId: 4,
        name: 'Sweet & Sour Pork',
        description: 'Crispy pork in tangy sweet and sour sauce with pineapple and peppers.',
        image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&h=300&fit=crop',
        price: 13.99,
        rating: 4.5,
        category: 'Chinese',
        ingredients: ['Pork', 'Pineapple', 'Bell peppers', 'Sweet & sour sauce', 'Onions'],
        options: {
            size: [
                { name: 'Regular', price: 0 },
                { name: 'Large', price: 3 },
                { name: 'Family', price: 6 }
            ],
            addOns: [
                { name: 'Extra Pork', price: 3 },
                { name: 'Extra Pineapple', price: 1.5 },
                { name: 'Fried Rice', price: 2 }
            ]
        }
    },
    {
        id: 18,
        restaurantId: 4,
        name: 'Beef Chow Mein',
        description: 'Stir-fried noodles with beef, vegetables, and savory sauce.',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
        price: 12.99,
        rating: 4.7,
        category: 'Chinese',
        ingredients: ['Egg noodles', 'Beef', 'Bean sprouts', 'Bok choy', 'Soy sauce', 'Sesame oil'],
        options: {
            size: [
                { name: 'Regular', price: 0 },
                { name: 'Large', price: 3 },
                { name: 'Family', price: 6 }
            ],
            addOns: [
                { name: 'Extra Beef', price: 3 },
                { name: 'Extra Noodles', price: 1.5 },
                { name: 'Egg Roll', price: 2 }
            ]
        }
    },
    {
        id: 19,
        restaurantId: 4,
        name: 'Orange Chicken',
        description: 'Crispy chicken pieces in sweet orange sauce with sesame seeds.',
        image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&h=300&fit=crop',
        price: 13.49,
        rating: 4.8,
        category: 'Chinese',
        ingredients: ['Chicken', 'Orange sauce', 'Sesame seeds', 'Green onions', 'Ginger'],
        options: {
            size: [
                { name: 'Regular', price: 0 },
                { name: 'Large', price: 3 },
                { name: 'Family', price: 6 }
            ],
            addOns: [
                { name: 'Extra Chicken', price: 3 },
                { name: 'Steamed Rice', price: 1.5 },
                { name: 'Spring Rolls', price: 2 }
            ]
        }
    },
    {
        id: 20,
        restaurantId: 4,
        name: 'Vegetable Fried Rice',
        description: 'Wok-fried rice with mixed vegetables and eggs.',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop',
        price: 10.99,
        rating: 4.4,
        category: 'Chinese',
        ingredients: ['Rice', 'Mixed vegetables', 'Eggs', 'Soy sauce', 'Sesame oil'],
        options: {
            size: [
                { name: 'Regular', price: 0 },
                { name: 'Large', price: 2 },
                { name: 'Family', price: 5 }
            ],
            addOns: [
                { name: 'Extra Veggies', price: 1.5 },
                { name: 'Tofu', price: 2 },
                { name: 'Egg', price: 0.5 }
            ]
        }
    },
    
    {
        id: 21,
        restaurantId: 5,
        name: 'Grilled Chicken Half',
        description: 'Half chicken marinated and grilled to perfection with herbs.',
        image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop',
        price: 14.99,
        rating: 4.7,
        category: 'Chicken',
        ingredients: ['Chicken', 'Herbs', 'Spices', 'Olive oil', 'Garlic', 'Lemon'],
        options: {
            size: [
                { name: 'Quarter', price: 0 },
                { name: 'Half', price: 0 },
                { name: 'Full', price: 8 }
            ],
            addOns: [
                { name: 'Extra Sauce', price: 0.5 },
                { name: 'Garlic Bread', price: 2 },
                { name: 'Fries', price: 2.5 }
            ]
        }
    },
    {
        id: 22,
        restaurantId: 5,
        name: 'BBQ Ribs',
        description: 'Tender pork ribs glazed with smoky BBQ sauce.',
        image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=300&fit=crop',
        price: 18.99,
        rating: 4.8,
        category: 'Chicken',
        ingredients: ['Pork ribs', 'BBQ sauce', 'Spices', 'Brown sugar'],
        options: {
            size: [
                { name: 'Half Rack', price: 0 },
                { name: 'Full Rack', price: 8 }
            ],
            addOns: [
                { name: 'Extra Sauce', price: 1 },
                { name: 'Coleslaw', price: 2 },
                { name: 'Corn on the Cob', price: 2 }
            ]
        }
    },
    {
        id: 23,
        restaurantId: 5,
        name: 'Chicken Wings',
        description: 'Crispy chicken wings tossed in your choice of sauce.',
        image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop',
        price: 11.99,
        rating: 4.6,
        category: 'Chicken',
        ingredients: ['Chicken wings', 'Sauce', 'Seasoning'],
        options: {
            size: [
                { name: '6 pieces', price: 0 },
                { name: '12 pieces', price: 5 },
                { name: '18 pieces', price: 9 }
            ],
            addOns: [
                { name: 'Extra Sauce', price: 0.5 },
                { name: 'Ranch', price: 0.5 },
                { name: 'Blue Cheese', price: 0.5 }
            ]
        }
    },
    {
        id: 24,
        restaurantId: 5,
        name: 'Grilled Salmon',
        description: 'Fresh Atlantic salmon grilled with lemon and dill.',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
        price: 19.99,
        rating: 4.9,
        category: 'Chicken',
        ingredients: ['Salmon', 'Lemon', 'Dill', 'Olive oil', 'Garlic'],
        options: {
            size: [
                { name: '6 oz', price: 0 },
                { name: '8 oz', price: 4 },
                { name: '10 oz', price: 7 }
            ],
            addOns: [
                { name: 'Asparagus', price: 3 },
                { name: 'Rice Pilaf', price: 2 },
                { name: 'Garlic Butter', price: 1 }
            ]
        }
    },
    {
        id: 25,
        restaurantId: 5,
        name: 'Lamb Chops',
        description: 'Tender lamb chops marinated and grilled with rosemary.',
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
        price: 24.99,
        rating: 4.8,
        category: 'Chicken',
        ingredients: ['Lamb chops', 'Rosemary', 'Garlic', 'Olive oil', 'Black pepper'],
        options: {
            size: [
                { name: '4 chops', price: 0 },
                { name: '6 chops', price: 8 },
                { name: '8 chops', price: 14 }
            ],
            addOns: [
                { name: 'Mint Sauce', price: 1 },
                { name: 'Roasted Potatoes', price: 3 },
                { name: 'Grilled Vegetables', price: 3 }
            ]
        }
    },
    
    {
        id: 26,
        restaurantId: 6,
        name: 'Pad Thai',
        description: 'Classic Thai stir-fried noodles with shrimp, peanuts, and lime.',
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop',
        price: 13.99,
        rating: 4.7,
        category: 'Chinese',
        ingredients: ['Rice noodles', 'Shrimp', 'Peanuts', 'Bean sprouts', 'Eggs', 'Tamarind sauce'],
        options: {
            size: [
                { name: 'Regular', price: 0 },
                { name: 'Large', price: 3 },
                { name: 'Family', price: 7 }
            ],
            addOns: [
                { name: 'Extra Shrimp', price: 3 },
                { name: 'Tofu', price: 1.5 },
                { name: 'Extra Peanuts', price: 0.5 }
            ]
        }
    },
    {
        id: 27,
        restaurantId: 6,
        name: 'Tom Yum Soup',
        description: 'Spicy and sour Thai soup with shrimp and mushrooms.',
        image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b485c?w=400&h=300&fit=crop',
        price: 9.99,
        rating: 4.6,
        category: 'Chinese',
        ingredients: ['Shrimp', 'Mushrooms', 'Lemongrass', 'Chili', 'Lime', 'Coconut milk'],
        options: {
            size: [
                { name: 'Small', price: 0 },
                { name: 'Large', price: 2 }
            ],
            addOns: [
                { name: 'Extra Shrimp', price: 2 },
                { name: 'Extra Spicy', price: 0 },
                { name: 'Rice', price: 1 }
            ]
        }
    },
    {
        id: 28,
        restaurantId: 6,
        name: 'Spring Rolls',
        description: 'Crispy vegetable spring rolls with sweet chili dipping sauce.',
        image: 'https://images.unsplash.com/photo-1606532577678-49d4c8b08853?w=400&h=300&fit=crop',
        price: 7.99,
        rating: 4.5,
        category: 'Chinese',
        ingredients: ['Spring roll wrappers', 'Cabbage', 'Carrots', 'Glass noodles', 'Sweet chili sauce'],
        options: {
            size: [
                { name: '4 pieces', price: 0 },
                { name: '6 pieces', price: 2 },
                { name: '8 pieces', price: 4 }
            ],
            addOns: [
                { name: 'Extra Sauce', price: 0.5 },
                { name: 'Dipping Sauce', price: 0.5 }
            ]
        }
    },
    {
        id: 29,
        restaurantId: 6,
        name: 'Thai Green Curry',
        description: 'Spicy green curry with chicken, bamboo shoots, and basil.',
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop',
        price: 14.99,
        rating: 4.8,
        category: 'Chinese',
        ingredients: ['Chicken', 'Green curry paste', 'Coconut milk', 'Bamboo shoots', 'Thai basil'],
        options: {
            size: [
                { name: 'Regular', price: 0 },
                { name: 'Large', price: 4 },
                { name: 'Family', price: 8 }
            ],
            addOns: [
                { name: 'Extra Chicken', price: 3 },
                { name: 'Extra Vegetables', price: 1.5 },
                { name: 'Jasmine Rice', price: 1.5 }
            ]
        }
    },
    {
        id: 30,
        restaurantId: 6,
        name: 'Mango Sticky Rice',
        description: 'Sweet sticky rice with fresh mango and coconut cream.',
        image: 'https://images.unsplash.com/photo-1533021889977-409770d95a58?w=400&h=300&fit=crop',
        price: 8.99,
        rating: 4.9,
        category: 'Chinese',
        ingredients: ['Sticky rice', 'Mango', 'Coconut cream', 'Sesame seeds'],
        options: {
            size: [
                { name: 'Regular', price: 0 },
                { name: 'Large', price: 2 }
            ],
            addOns: [
                { name: 'Extra Mango', price: 1.5 },
                { name: 'Extra Coconut Cream', price: 0.5 }
            ]
        }
    },
   
    {
        id: 31,
        restaurantId: 7,
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center and vanilla ice cream.',
        image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop',
        price: 8.99,
        rating: 4.9,
        category: 'Desserts',
        ingredients: ['Chocolate', 'Butter', 'Eggs', 'Sugar', 'Vanilla ice cream'],
        options: {
            size: [
                { name: 'Single', price: 0 },
                { name: 'Double', price: 5 }
            ],
            addOns: [
                { name: 'Extra Ice Cream', price: 1.5 },
                { name: 'Chocolate Sauce', price: 0.5 },
                { name: 'Whipped Cream', price: 0.5 }
            ]
        }
    },
    {
        id: 32,
        restaurantId: 7,
        name: 'New York Cheesecake',
        description: 'Creamy classic cheesecake with graham cracker crust.',
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop',
        price: 7.99,
        rating: 4.8,
        category: 'Desserts',
        ingredients: ['Cream cheese', 'Graham crackers', 'Sugar', 'Eggs', 'Vanilla'],
        options: {
            size: [
                { name: 'Slice', price: 0 },
                { name: 'Whole', price: 25 }
            ],
            addOns: [
                { name: 'Fresh Berries', price: 2 },
                { name: 'Chocolate Sauce', price: 0.5 },
                { name: 'Whipped Cream', price: 0.5 }
            ]
        }
    },
    {
        id: 33,
        restaurantId: 7,
        name: 'Tiramisu',
        description: 'Classic Italian dessert with espresso-soaked ladyfingers and mascarpone.',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
        price: 8.49,
        rating: 4.7,
        category: 'Desserts',
        ingredients: ['Ladyfingers', 'Mascarpone', 'Espresso', 'Cocoa powder', 'Eggs'],
        options: {
            size: [
                { name: 'Slice', price: 0 },
                { name: 'Whole', price: 28 }
            ],
            addOns: [
                { name: 'Extra Cocoa', price: 0.25 },
                { name: 'Chocolate Shavings', price: 0.5 }
            ]
        }
    },
    {
        id: 34,
        restaurantId: 7,
        name: 'Ice Cream Sundae',
        description: 'Three scoops of ice cream with toppings and whipped cream.',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
        price: 6.99,
        rating: 4.6,
        category: 'Desserts',
        ingredients: ['Ice cream', 'Chocolate sauce', 'Whipped cream', 'Cherries', 'Nuts'],
        options: {
            size: [
                { name: '2 scoops', price: 0 },
                { name: '3 scoops', price: 0 },
                { name: '4 scoops', price: 2 }
            ],
            addOns: [
                { name: 'Extra Sauce', price: 0.5 },
                { name: 'Sprinkles', price: 0.25 },
                { name: 'Extra Whipped Cream', price: 0.5 }
            ]
        }
    },
    {
        id: 35,
        restaurantId: 7,
        name: 'Brownie Delight',
        description: 'Warm fudgy brownie with ice cream and hot fudge.',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
        price: 7.49,
        rating: 4.8,
        category: 'Desserts',
        ingredients: ['Brownie', 'Ice cream', 'Hot fudge', 'Whipped cream', 'Nuts'],
        options: {
            size: [
                { name: 'Regular', price: 0 },
                { name: 'Large', price: 2 }
            ],
            addOns: [
                { name: 'Extra Brownie', price: 1.5 },
                { name: 'Extra Ice Cream', price: 1 },
                { name: 'Caramel Sauce', price: 0.5 }
            ]
        }
    },
  
    {
        id: 36,
        restaurantId: 8,
        name: 'Cappuccino',
        description: 'Espresso with steamed milk and milk foam.',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
        price: 4.99,
        rating: 4.7,
        category: 'Coffee',
        ingredients: ['Espresso', 'Steamed milk', 'Milk foam'],
        options: {
            size: [
                { name: 'Small', price: 0 },
                { name: 'Medium', price: 0.5 },
                { name: 'Large', price: 1 }
            ],
            addOns: [
                { name: 'Extra Shot', price: 1 },
                { name: 'Vanilla Syrup', price: 0.5 },
                { name: 'Caramel Drizzle', price: 0.5 }
            ]
        }
    },
    {
        id: 37,
        restaurantId: 8,
        name: 'Caramel Macchiato',
        description: 'Vanilla syrup, steamed milk, espresso, and caramel drizzle.',
        image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=300&fit=crop',
        price: 5.49,
        rating: 4.8,
        category: 'Coffee',
        ingredients: ['Espresso', 'Vanilla syrup', 'Steamed milk', 'Caramel drizzle'],
        options: {
            size: [
                { name: 'Small', price: 0 },
                { name: 'Medium', price: 0.5 },
                { name: 'Large', price: 1 }
            ],
            addOns: [
                { name: 'Extra Shot', price: 1 },
                { name: 'Extra Caramel', price: 0.5 },
                { name: 'Whipped Cream', price: 0.5 }
            ]
        }
    },
    {
        id: 38,
        restaurantId: 8,
        name: 'Iced Latte',
        description: 'Chilled espresso with cold milk over ice.',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop',
        price: 4.49,
        rating: 4.6,
        category: 'Coffee',
        ingredients: ['Espresso', 'Cold milk', 'Ice'],
        options: {
            size: [
                { name: 'Small', price: 0 },
                { name: 'Medium', price: 0.5 },
                { name: 'Large', price: 1 }
            ],
            addOns: [
                { name: 'Extra Shot', price: 1 },
                { name: 'Flavor Syrup', price: 0.5 },
                { name: 'Extra Ice', price: 0 }
            ]
        }
    },
    {
        id: 39,
        restaurantId: 8,
        name: 'Matcha Latte',
        description: 'Japanese green tea with steamed milk.',
        image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=300&fit=crop',
        price: 5.99,
        rating: 4.7,
        category: 'Coffee',
        ingredients: ['Matcha powder', 'Steamed milk', 'Honey'],
        options: {
            size: [
                { name: 'Small', price: 0 },
                { name: 'Medium', price: 0.5 },
                { name: 'Large', price: 1 }
            ],
            addOns: [
                { name: 'Extra Matcha', price: 1 },
                { name: 'Vanilla', price: 0.5 },
                { name: 'Oat Milk', price: 0.75 }
            ]
        }
    },
    {
        id: 40,
        restaurantId: 8,
        name: 'Cold Brew',
        description: 'Smooth cold-brewed coffee steeped for 20 hours.',
        image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=300&fit=crop',
        price: 4.49,
        rating: 4.8,
        category: 'Coffee',
        ingredients: ['Cold brew coffee', 'Ice'],
        options: {
            size: [
                { name: 'Small', price: 0 },
                { name: 'Medium', price: 0.5 },
                { name: 'Large', price: 1 }
            ],
            addOns: [
                { name: 'Extra Shot', price: 1 },
                { name: 'Cream', price: 0.25 },
                { name: 'Simple Syrup', price: 0.25 }
            ]
        }
    }
];


const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        rating: 5,
        review: 'BiteRush has completely changed how I order food. The delivery is always on time and the food arrives fresh and hot. Highly recommend!',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
        id: 2,
        name: 'Michael Chen',
        rating: 5,
        review: 'The variety of restaurants is amazing. I love being able to discover new places and the tracking feature is super convenient.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        rating: 4,
        review: 'Great app with excellent customer service. Had a small issue with my order once and they resolved it immediately.',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    {
        id: 4,
        name: 'David Kim',
        rating: 5,
        review: 'The best food delivery service I\'ve used. The app is easy to use and the restaurants offer great deals.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    },
    {
        id: 5,
        name: 'Jessica Taylor',
        rating: 5,
        review: 'I order from BiteRush at least twice a week. The food quality is consistent and the delivery drivers are always friendly.',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop'
    }
];


const demoUser = {
    id: 1,
    name: 'Demo User',
    email: 'demo@biterush.com',
    password: 'demo123'
};


const coupons = [
    {
        code: 'WELCOME10',
        type: 'percentage',
        value: 10,
        description: '10% off your first order'
    },
    {
        code: 'SAVE20',
        type: 'percentage',
        value: 20,
        description: '20% off your order'
    },
    {
        code: 'BITE50',
        type: 'fixed',
        value: 5,
        description: '$5 off your order'
    }
];


if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        categories,
        restaurants,
        foodItems,
        testimonials,
        demoUser,
        coupons
    };
}
