import React, { useState } from 'react';
import axios from 'axios';

const CategoryForm = ({ onAddCategory }) => {
  const [nom, setNom] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = { nom };
    axios.post('http://127.0.0.1:8000/api/categories/', newCategory)
      .then(response => onAddCategory(response.data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom de la catégorie"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        required
      />
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default CategoryForm;