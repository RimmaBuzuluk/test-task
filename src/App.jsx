/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import './App.scss';
import { UserTable } from './components/UserTable/UserTable';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';
import { UserFilterBlock } from './components/UserFilter/UserFilter';

const getCombinedData = (users, categories, products) => {
  return products.map(product => {
    const category = categories.find(
      categoryItem => categoryItem.id === product.categoryId,
    );
    const user = users.find(userItem => userItem.id === category.ownerId);

    return {
      productId: product.id,
      productName: product.name,
      categoryIcon: category.icon,
      categoryName: category.title,
      userId: user.id,
      userName: user.name,
      userSex: user.sex,
    };
  });
};

export const App = () => {
  const userInformation = getCombinedData(
    usersFromServer,
    categoriesFromServer,
    productsFromServer,
  );
  const [selectedFilterUser, setSelectedFilterUser] = useState('');

  const filteredProducts = selectedFilterUser
    ? userInformation.filter(product => product.userId === selectedFilterUser)
    : userInformation;

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <UserFilterBlock
            users={usersFromServer}
            selectedFilterUser={selectedFilterUser}
            setSelectedFilterUser={setSelectedFilterUser}
          />
        </div>

        <div className="box table-container">
          <p data-cy="NoMatchingMessage">
            No products matching selected criteria
          </p>

          <UserTable users={filteredProducts} />
        </div>
      </div>
    </div>
  );
};
