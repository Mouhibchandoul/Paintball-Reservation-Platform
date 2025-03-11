import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import Navbar from '../components/Navbar';


const HomePage = () => {
  const [produits, setProduits] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/produits/')
      .then(response => setProduits(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddProduct = (newProduct) => {
    setProduits([...produits, newProduct]);
    setShowForm(false);
  };

  return (
    <div>
      <Navbar />
      <h1>Gestion de Stock - Parfumerie</h1>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Annuler' : 'Ajouter un produit'}
      </button>
      {showForm && <ProductForm onAddProduct={handleAddProduct} />}
      <ProductList produits={produits} />
    </div>
  );
};

export default HomePage;