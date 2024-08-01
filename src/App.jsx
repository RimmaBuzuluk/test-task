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
  const [query, setQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

  const filterByQuery = (data, queryItem) => {
    if (!queryItem) {
      return data;
    }

    return data.filter(item =>
      item.productName.toLowerCase().includes(queryItem.toLowerCase()),
    );
  };

  const filteredProducts = filterByQuery(
    selectedFilterUser
      ? userInformation.filter(product => product.userId === selectedFilterUser)
      : userInformation,
    query,
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortConfig.key === 'productId') {
      return sortConfig.direction === 'ascending'
        ? a.productId - b.productId
        : b.productId - a.productId;
    }

    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }

    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }

    return 0;
  });

  const handleSort = key => {
    let direction = 'asc';

    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    } else if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = '';
      key = '';
    }

    setSortConfig({ key, direction });
  };

  console.log('app', sortConfig);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <UserFilterBlock
            users={usersFromServer}
            selectedFilterUser={selectedFilterUser}
            setSelectedFilterUser={setSelectedFilterUser}
            query={query}
            setQuery={setQuery}
            filteredProducts={sortedProducts}
          />
        </div>

        <div className="box table-container">
          {sortedProducts.length === 0 && (
            <p data-cy="NoMatchingMessage">No results</p>
          )}

          <UserTable
            users={sortedProducts}
            handleSort={handleSort}
            sortConfig={sortConfig}
          />
        </div>
      </div>
    </div>
  );
};
