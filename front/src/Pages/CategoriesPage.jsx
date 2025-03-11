import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryList from '../components/CategoryList';
import CategoryForm from '../components/CategoryForm';
import Navbar from '../components/Navbar';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/categories/')
      .then(response => setCategories(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
    setShowForm(false);
  };

  return (
    <div>
      <Navbar />
      <h1>Gestion des Catégories</h1>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Annuler' : 'Ajouter une catégorie'}
      </button>
      {showForm && <CategoryForm onAddCategory={handleAddCategory} />}
      <CategoryList categories={categories} />
    </div>
  );
};

export default CategoriesPage;