import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header'
import Products from './Components/products/products'
import Footer from './Components/Footer/Footer'
import { CartProvider } from './Components/Context/CartStoreContext';
import Checkout from './Components/Checkout/Checkout';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId); 
  };
 
  return (
    <CartProvider>
    <Router>
      <div>
        <Header onCategorySelect={handleCategorySelect} />
        <Routes>
          <Route path="/" element={<><Products selectedCategory={selectedCategory} /><Footer /></>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  </CartProvider>
  );
};

export default App
