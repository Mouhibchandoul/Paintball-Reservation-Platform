import React from 'react';

const ProductList = ({ produits }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Référence</th>
          <th>Prix</th>
          <th>Quantité</th>
          <th>Catégorie</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {produits.map(produit => (
          <tr key={produit.id}>
            <td>{produit.nom}</td>
            <td>{produit.reference}</td>
            <td>{produit.prix} €</td>
            <td>{produit.quantite}</td>
            <td>{produit.categorie}</td>
            <td>
              <button>Modifier</button>
              <button>Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;