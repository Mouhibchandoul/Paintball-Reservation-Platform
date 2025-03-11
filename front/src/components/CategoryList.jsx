import React from 'react';


const CategoryList = ({ categories }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {categories.map(categorie => (
          <tr key={categorie.id}>
            <td>{categorie.nom}</td>
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

export default CategoryList;