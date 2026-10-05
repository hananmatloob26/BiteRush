
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
   
    initializeDemoUser();
    
   
    updateCartCount();
    
    
    updateAuthState();
    
    
    initializeMobileMenu();
    
    
    const currentPage = getCurrentPage();
    initializePage(currentPage);
}


function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    return filename.replace('.html', '') || 'index';
}


function initializePage(page) {
    switch(page) {
        case 'index':
            if (typeof initHomePage === 'function') initHomePage();
            break;
        case 'restaurants':
            if (typeof initRestaurantsPage === 'function') initRestaurantsPage();
            break;
        case 'restaurant':
            if (typeof initRestaurantPage === 'function') initRestaurantPage();
            break;
        case 'food-details':
            if (typeof initFoodDetailsPage === 'function') initFoodDetailsPage();
            break;
        case 'cart':
            if (typeof initCartPage === 'function') initCartPage();
            break;
        case 'checkout':
            if (typeof initCheckoutPage === 'function') initCheckoutPage();
            break;
        case 'orders':
            if (typeof initOrdersPage === 'function') initOrdersPage();
            break;
        case 'login':
            if (typeof initLoginPage === 'function') initLoginPage();
            break;
        case 'register':
            if (typeof initRegisterPage === 'function') initRegisterPage();
            break;
    }
}



function getFromLocalStorage(key, defaultValue = null) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return defaultValue;
    }
}

function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        return false;
    }
}

function removeFromLocalStorage(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error('Error removing from localStorage:', error);
        return false;
    }
}



function initializeDemoUser() {
    const users = getFromLocalStorage('biterush_users', []);
    const demoExists = users.some(user => user.email === demoUser.email);
    
    if (!demoExists) {
        users.push(demoUser);
        saveToLocalStorage('biterush_users', users);
    }
}



function getCart() {
    return getFromLocalStorage('biterush_cart', []);
}

function saveCart(cart) {
    saveToLocalStorage('biterush_cart', cart);
    updateCartCount();
}

function addToCart(item) {
    const cart = getCart();
    
    
    const existingItemIndex = cart.findIndex(cartItem => 
        cartItem.id === item.id && 
        JSON.stringify(cartItem.selectedOptions) === JSON.stringify(item.selectedOptions)
    );
    
    if (existingItemIndex > -1) {
        
        cart[existingItemIndex].quantity += item.quantity;
    } else {
        
        cart.push(item);
    }
    
    saveCart(cart);
    showToast('Added to cart successfully!', 'success');
}

function removeFromCart(itemId, selectedOptions = null) {
    let cart = getCart();
    
    if (selectedOptions) {
        cart = cart.filter(item => 
            !(item.id === itemId && JSON.stringify(item.selectedOptions) === JSON.stringify(selectedOptions))
        );
    } else {
        cart = cart.filter(item => item.id !== itemId);
    }
    
    saveCart(cart);
    showToast('Item removed from cart', 'success');
}

function updateCartQuantity(itemId, quantity, selectedOptions = null) {
    const cart = getCart();
    
    let itemIndex;
    if (selectedOptions) {
        itemIndex = cart.findIndex(item => 
            item.id === itemId && JSON.stringify(item.selectedOptions) === JSON.stringify(selectedOptions)
        );
    } else {
        itemIndex = cart.findIndex(item => item.id === itemId);
    }
    
    if (itemIndex > -1) {
        if (quantity <= 0) {
            removeFromCart(itemId, selectedOptions);
            return;
        }
        cart[itemIndex].quantity = quantity;
        saveCart(cart);
    }
}

function getCartCount() {
    const cart = getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
}

function calculateCartTotal() {
    const cart = getCart();
    const subtotal = cart.reduce((total, item) => total + (item.finalPrice * item.quantity), 0);
    return {
        subtotal: subtotal,
        itemCount: getCartCount()
    };
}

function clearCart() {
    saveCart([]);
}

function updateCartCount() {
    const cartCount = getCartCount();
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(element => {
        element.textContent = cartCount;
        element.style.display = cartCount > 0 ? 'inline' : 'none';
    });
}



function getOrders() {
    return getFromLocalStorage('biterush_orders', []);
}

function saveOrder(order) {
    const orders = getOrders();
    orders.unshift(order);
    saveToLocalStorage('biterush_orders', orders);
}

function getOrderById(orderId) {
    const orders = getOrders();
    return orders.find(order => order.id === orderId);
}

function updateOrderStatus(orderId, status) {
    const orders = getOrders();
    const orderIndex = orders.findIndex(order => order.id === orderId);
    
    if (orderIndex > -1) {
        orders[orderIndex].status = status;
        saveToLocalStorage('biterush_orders', orders);
    }
}

function generateOrderId() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 100000);
    return `BR-${new Date().getFullYear()}-${random}`;
}



function getCurrentUser() {
    return getFromLocalStorage('biterush_current_user', null);
}

function login(email, password) {
    const users = getFromLocalStorage('biterush_users', []);
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        saveToLocalStorage('biterush_current_user', user);
        return { success: true, user };
    } else {
        return { success: false, message: 'Invalid email or password' };
    }
}

function register(name, email, password) {
    const users = getFromLocalStorage('biterush_users', []);
    
   
    if (users.some(u => u.email === email)) {
        return { success: false, message: 'Email already registered' };
    }
    
    const newUser = {
        id: users.length + 1,
        name: name,
        email: email,
        password: password
    };
    
    users.push(newUser);
    saveToLocalStorage('biterush_users', users);
    
    
    saveToLocalStorage('biterush_current_user', newUser);
    
    return { success: true, user: newUser };
}

function logout() {
    removeFromLocalStorage('biterush_current_user');
    updateAuthState();
    window.location.href = 'login.html';
}

function isLoggedIn() {
    return getCurrentUser() !== null;
}

function updateAuthState() {
    const user = getCurrentUser();
    const authLinks = document.querySelectorAll('.auth-links');
    const userLinks = document.querySelectorAll('.user-links');
    
    authLinks.forEach(link => {
        link.style.display = user ? 'none' : 'flex';
    });
    
    userLinks.forEach(link => {
        link.style.display = user ? 'flex' : 'none';
    });
    
   
    const userNameElements = document.querySelectorAll('.user-name');
    userNameElements.forEach(element => {
        element.textContent = user ? user.name : '';
    });
}


function getFavorites() {
    return getFromLocalStorage('biterush_favorites', []);
}

function saveFavorites(favorites) {
    saveToLocalStorage('biterush_favorites', favorites);
}

function isFavorite(restaurantId) {
    const favorites = getFavorites();
    return favorites.includes(restaurantId);
}

function toggleFavorite(restaurantId) {
    const favorites = getFavorites();
    const index = favorites.indexOf(restaurantId);
    
    if (index > -1) {
        favorites.splice(index, 1);
        showToast('Removed from favorites', 'success');
    } else {
        favorites.push(restaurantId);
        showToast('Added to favorites', 'success');
    }
    
    saveFavorites(favorites);
    return favorites.includes(restaurantId);
}


function validateCoupon(code) {
    const coupon = coupons.find(c => c.code.toUpperCase() === code.toUpperCase());
    
    if (!coupon) {
        return { valid: false, message: 'Invalid coupon code' };
    }
    
    return { valid: true, coupon };
}

function applyCoupon(code, subtotal) {
    const validation = validateCoupon(code);
    
    if (!validation.valid) {
        return validation;
    }
    
    const coupon = validation.coupon;
    let discount = 0;
    
    if (coupon.type === 'percentage') {
        discount = subtotal * (coupon.value / 100);
    } else if (coupon.type === 'fixed') {
        discount = coupon.value;
    }
    
    return {
        valid: true,
        coupon: coupon,
        discount: discount
    };
}



function showToast(message, type = 'success') {
    
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
 
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
 
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

function showLoading(element) {
    if (element) {
        element.innerHTML = '<div class="spinner"></div>';
    }
}

function hideLoading(element, content) {
    if (element) {
        element.innerHTML = content;
    }
}

function formatPrice(price) {
    return '$' + price.toFixed(2);
}

function formatRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    
    if (hasHalfStar) {
        stars += '½';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }
    
    return stars;
}



function initializeMobileMenu() {
    const toggle = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        });
        
      
        document.addEventListener('click', function(e) {
            if (!menu.contains(e.target) && !toggle.contains(e.target)) {
                menu.classList.remove('active');
                toggle.classList.remove('active');
            }
        });
        
        
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                menu.classList.remove('active');
                toggle.classList.remove('active');
            });
        });
    }
}



function navigateTo(page) {
    window.location.href = page + '.html';
}



function simulateOrderProgress(orderId) {
    const statuses = ['Order Placed', 'Confirmed', 'Preparing', 'Out for Delivery', 'Delivered'];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
        currentIndex++;
        
        if (currentIndex < statuses.length) {
            updateOrderStatus(orderId, statuses[currentIndex]);
            
           
            if (getCurrentPage() === 'orders') {
                renderOrders();
            }
        } else {
            clearInterval(interval);
        }
    }, 30000); 
}


function startOrderSimulation() {
    const orders = getOrders();
    orders.forEach(order => {
        if (order.status !== 'Delivered') {
            simulateOrderProgress(order.id);
        }
    });
}



function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}



function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

function validateRequired(value) {
    return value && value.trim() !== '';
}



function reorderItems(orderItems) {
    const cart = getCart();
    
    orderItems.forEach(item => {
        const cartItem = {
            id: item.id,
            name: item.name,
            restaurantId: item.restaurantId,
            restaurantName: item.restaurantName,
            image: item.image,
            price: item.price,
            finalPrice: item.finalPrice,
            quantity: item.quantity,
            selectedOptions: item.selectedOptions
        };
        
        addToCart(cartItem);
    });
    
    navigateTo('cart');
}
