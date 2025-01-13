import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Products from './Components/products/products';
import Footer from './Components/Footer/Footer';
import { CartProvider } from './Components/Context/CartStoreContext';
import Checkout from './Components/Checkout/Checkout';
import OrderSummary from './Components/Checkout/OrderSummary';
import { PaymentProvider } from './Components/Context/PaymentContext';
import Categories from './Components/Categories/Categories';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId); // Speichert die ausgewählte Kategorie
  };

  const resetCategory = () => {
    setSelectedCategory(null);
  };
  return (
    <Router>
      <CartProvider>
        <PaymentProvider>
          <div>
          <Header onResetCategory={resetCategory} />
            <Routes>
              <Route path="/" element={
                  <>
                    {!selectedCategory && (
                      <>
                      <Categories onCategorySelect={handleCategorySelect} />
                      <Footer/>
                      </>
                    )}
                    {selectedCategory && (
                      <>
                        <Products selectedCategory={selectedCategory} />
                        <Footer />
                      </>
                    )}
                  </>
                }
              />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-summary" element={<OrderSummary />} />
            </Routes>
          </div>
        </PaymentProvider>
      </CartProvider>
    </Router>
  );
};

export default App;
