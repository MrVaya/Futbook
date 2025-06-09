import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
// import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../assets/css/style.css';
import '../assets/css/responsive.css';

// Import all images
import hubaJacket from '../assets/images/image/71c6gbTo6PL._AC_SL1500_.jpg';
import burberryBlueJacket from '../assets/images/image/258_de35f13639-rolf-smoothblue.jpg';
import levisJacket from '../assets/images/image/214884d772878b6cc854f09b1be83e0b.jpg_720x720q80.jpg';
import blackJacket from '../assets/images/image/male brown jacket.jpg';
import hubaTshirt from '../assets/images/image/HUBA BLACK Tshirt.avif';
import hubaRedJacket from '../assets/images/image/Huba red jacket.avif';
import classicDenimJacket from '../assets/images/image/20250123_monocle_ecom_arpenteu-67eacdb6a66c8.jpg';
import sportsHoodie from '../assets/images/image/images (3).jpeg';
import casualBlazer from '../assets/images/image/images (4).jpeg';
import winterCoat from '../assets/images/image/Chihuahua-sitting-outdoors-in-the-snow-in-a-pink-winter-coat.jpg';

// Girls section images
import burberryPinkJacket from '../assets/images/image/female jacket pink.webp';
import burberryBlueJacketGirls from '../assets/images/image/female jacket blue1.jpg';
import burberryGrayJacket from '../assets/images/image/female jacket gray 1.jpg';
import aslBrownJacket from '../assets/images/image/female jacket 3.jpg';
import elegantBlazer from '../assets/images/image/Female jacket 1.jpg';
import summerDress from '../assets/images/image/girl-white-dress-classic-clothing-5k-tx-1920x1080.jpg';
import casualSweater from '../assets/images/image/Female jacket 12.jpg';
import formalCoat from '../assets/images/image/female coat 1.jpg';
import winterJacket from '../assets/images/image/girl-pose-jacket-with-trousers-oh-1920x1080.jpg';
import eveningGown from '../assets/images/image/girl-with-white-dress-cz-1920x1080.jpg';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
  variant: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  variant: string;
  quantity: number;
}

const Home = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/Asset/image/placeholder.jpg",
      title: "Women",
      subtitle: "52% Discount For This Season"
    },
    {
      image: "/Asset/image/placeholder.jpg",
      title: "Men",
      subtitle: "40% Discount For This Season"
    }
  ];

  const boysProducts = [
    { id: 1, name: "HUBA JACKET", price: 2000, image: hubaJacket, variant: "Variant" },
    { id: 2, name: "BURBERRY BLUE JACKET", price: 3500, image: burberryBlueJacket, variant: "Variant" },
    { id: 3, name: "LEVIS JACKET", price: 3000, image: levisJacket, variant: "Variant" },
    { id: 4, name: "BLACK JACKET", price: 3000, image: blackJacket, variant: "Variant" },
    { id: 5, name: "HUBA T-SHIRT", price: 1800, image: hubaTshirt, variant: "Variant" },
    { id: 6, name: "HUBA RED JACKET", price: 2550, image: hubaRedJacket, variant: "Variant" },
    { id: 11, name: "CLASSIC DENIM JACKET", price: 2800, image: classicDenimJacket, variant: "Variant" },
    { id: 12, name: "SPORTS HOODIE", price: 2200, image: sportsHoodie, variant: "Variant" },
    { id: 13, name: "CASUAL BLAZER", price: 4200, image: casualBlazer, variant: "Variant" },
    { id: 14, name: "WINTER COAT", price: 3800, image: winterCoat, variant: "Variant" }
  ];

  const girlsProducts = [
    { id: 7, name: "BURBERRY PINK JACKET", price: 5500, image: burberryPinkJacket, variant: "Variant" },
    { id: 8, name: "BURBERRY BLUE JACKET", price: 5500, image: burberryBlueJacketGirls, variant: "Variant" },
    { id: 9, name: "BURBERRY GRAY JACKET", price: 4500, image: burberryGrayJacket, variant: "Variant" },
    { id: 10, name: "ASL BROWN JACKET", price: 4500, image: aslBrownJacket, variant: "Variant" },
    { id: 15, name: "ELEGANT BLAZER", price: 4800, image: elegantBlazer, variant: "Variant" },
    { id: 16, name: "SUMMER DRESS", price: 3200, image: summerDress, variant: "Variant" },
    { id: 17, name: "CASUAL SWEATER", price: 2800, image: casualSweater, variant: "Variant" },
    { id: 18, name: "FORMAL COAT", price: 5200, image: formalCoat, variant: "Variant" },
    { id: 19, name: "WINTER JACKET", price: 4200, image: winterJacket, variant: "Variant" },
    { id: 20, name: "EVENING GOWN", price: 5800, image: eveningGown, variant: "Variant" }
  ];

  const updateCartCount = () => {
    const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalItems);
  };

  const addToCart = (product: Product) => {
    let cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  };

  useEffect(() => {
    updateCartCount();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="p-4 border rounded-lg shadow-sm bg-white flex flex-col justify-between">
      <div className="h-[200px] w-full mb-6 rounded-md overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h6 className="text-lg font-semibold text-center">{product.name}</h6>
      <p className="text-sm text-gray-500 text-center">{product.variant}</p>
      <p className="text-lg font-bold mt-2 text-center">Rs.{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white py-2 px-4 rounded transition"
      >
        Add to cart
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow p-4 fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="https://via.placeholder.com/100x50" alt="Logo" className="h-10" />
            <span className="text-xl font-bold text-gray-800 hidden sm:inline">Your Store</span>
          </div>

          {/* Right Section: Navigation Links and Cart Icon */}
          <div className="hidden md:flex items-center ml-auto">
            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <a className="text-gray-800 hover:text-red-600 font-medium" href="#">Home</a>
              <a className="text-gray-800 hover:text-red-600 font-medium" href="#products">Products</a>
              <a className="text-gray-800 hover:text-red-600 font-medium" href="#">About</a>
              <a className="text-gray-800 hover:text-red-600 font-medium" href="#">Contact</a>
            </div>

            {/* Cart Icon */}
            <div className="relative ml-8">
              <ShoppingCart className="w-6 h-6 text-gray-800" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      

      {/* Hero Section with Slider */}
      <section className="hero-section">
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <button>Our Products</button>
              </div>
            </div>
          ))}
          <div className="slider-controls">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Products</h2>
          <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <h3 className="text-2xl font-bold mb-4">Boys Section</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-32">
            {boysProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-16">Girls Section</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {girlsProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section text-center py-20 bg-white">
        <h1 className="welcome-title text-5xl font-bold mb-4">Welcome to Your Store</h1>
        <p className="welcome-description text-lg text-gray-700 mb-8">
          Discover amazing products and exclusive deals. Start building your amazing project here!
        </p>
        <button 
          className="shop-now-btn bg-red-600 text-white px-8 py-3 rounded-md uppercase font-medium hover:bg-red-700 transition"
          aria-label="Shop Now Button"
        >
          Shop Now!
        </button>
      </section>

      {/* Footer */}
      <footer className="main-footer bg-gray-100 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-col">
            <img src="https://via.placeholder.com/100x50" alt="Logo" className="footer-logo mb-4" />
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quidem eum est provident, saepe expedita, ea debitis aliquam consequatur cupiditate iure nulla eveniet, alias enim asperiores consectetur maxime. Provident, asperiores.
            </p>
            <div className="social-icons flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-gray-800"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-gray-800"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-gray-800"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          <div className="footer-col">
            <h5 className="text-xl font-bold mb-4">Explore</h5>
            <ul className="footer-links space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Shop All</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Category</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About Company</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="text-xl font-bold mb-4">Support</h5>
            <ul className="footer-links space-y-2">
              <li><span className="text-gray-600">Contact: +977 9846983690</span></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Payment Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Returns &amp; Exchange</a></li>
            </ul>
          </div>
        </div>
        {/* Copyright Section */} 
        <div className="copyright-section text-center text-gray-600 mt-8 pt-4 border-t border-gray-300">
          <p>© 2025 Your Store. All rights reserved. | Powered by Nirvayya</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;