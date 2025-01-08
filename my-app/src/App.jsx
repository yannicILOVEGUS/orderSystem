import { useState } from 'react'
import Header from './Components/Header/Header'
import Products from './Components/products/products'
import Footer from './Components/Footer/Footer'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Funktion, um die ausgewählte Kategorie zu setzen
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId); // Setzt die ausgewählte Kategorie
  };

  return (
    <div>
      {/* Header-Komponente mit den Kategorien und der Auswahlfunktion */}
      <Header onCategorySelect={handleCategorySelect} />
      
      {/* Products-Komponente mit den gefilterten Produkten basierend auf der ausgewählten Kategorie */}
      <Products selectedCategory={selectedCategory} />
    </div>
  );
};

export default App
