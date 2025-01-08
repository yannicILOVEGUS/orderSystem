import { useState } from 'react'
import Header from './Components/Header/Header'
import Products from './Components/products/products'
import Footer from './Components/Footer/Footer'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId); 
  };

  return (
    <div>
      <Header onCategorySelect={handleCategorySelect} />
      <Products selectedCategory={selectedCategory} />
      <Footer/>
    </div>
  );
};

export default App
