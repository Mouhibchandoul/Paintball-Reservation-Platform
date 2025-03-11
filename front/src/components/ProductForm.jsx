import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ onAddProduct }) => {
  const [nom, setNom] = useState('');
  const [reference, setReference] = useState('');
  const [prix, setPrix] = useState('');
  const [quantite, setQuantite] = useState('');
  const [categorie, setCategorie] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { nom, reference, prix, quantite, categorie };
    axios.post('http://127.0.0.1:8000/api/produits/', newProduct)
      .then(response => onAddProduct(response.data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
      <input type="text" placeholder="Référence" value={reference} onChange={(e) => setReference(e.target.value)} required />
      <input type="number" placeholder="Prix" value={prix} onChange={(e) => setPrix(e.target.value)} required />
      <input type="number" placeholder="Quantité" value={quantite} onChange={(e) => setQuantite(e.target.value)} required />
      <input type="text" placeholder="Catégorie" value={categorie} onChange={(e) => setCategorie(e.target.value)} required />
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default ProductForm;