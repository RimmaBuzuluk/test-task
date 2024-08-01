import classNames from 'classnames';
import { UserItem } from '../UserItem/UserItem';

export const UserTable = ({ users, handleSort, sortConfig }) => {
  return (
    <table
      data-cy="ProductTable"
      className="table is-striped is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th onClick={() => handleSort('productId')}>
            <span className="is-flex is-flex-wrap-nowrap">
              ID
              <a href="#/">
                <span className="icon">
                  <i
                    data-cy="SortIcon"
                    className={classNames('fas', {
                      'fa-sort-up':
                        sortConfig.key === 'productId' &&
                        sortConfig.direction === 'asc',
                      'fa-sort-down':
                        sortConfig.key === 'productId' &&
                        sortConfig.direction === 'desc',
                      'fa-sort': sortConfig.key !== 'productId',
                    })}
                  />
                </span>
              </a>
            </span>
          </th>

          <th onClick={() => handleSort('productName')}>
            <span className="is-flex is-flex-wrap-nowrap">
              Product
              <a href="#/">
                <span className="icon">
                  <i
                    data-cy="SortIcon"
                    className={classNames('fas', {
                      'fa-sort-up':
                        sortConfig.key === 'productName' &&
                        sortConfig.direction === 'asc',
                      'fa-sort-down':
                        sortConfig.key === 'productName' &&
                        sortConfig.direction === 'desc',
                      'fa-sort': sortConfig.key !== 'productName',
                    })}
                  />
                </span>
              </a>
            </span>
          </th>

          <th onClick={() => handleSort('categoryName')}>
            <span className="is-flex is-flex-wrap-nowrap">
              Category
              <a href="#/">
                <span className="icon">
                  <i
                    data-cy="SortIcon"
                    className={classNames('fas', {
                      'fa-sort-up':
                        sortConfig.key === 'categoryName' &&
                        sortConfig.direction === 'asc',
                      'fa-sort-down':
                        sortConfig.key === 'categoryName' &&
                        sortConfig.direction === 'desc',
                      'fa-sort': sortConfig.key !== 'categoryName',
                    })}
                  />
                </span>
              </a>
            </span>
          </th>

          <th onClick={() => handleSort('userName')}>
            <span className="is-flex is-flex-wrap-nowrap">
              User
              <a href="#/">
                <span className="icon">
                  <i
                    data-cy="SortIcon"
                    className={classNames('fas', {
                      'fa-sort-up':
                        sortConfig.key === 'userName' &&
                        sortConfig.direction === 'asc',
                      'fa-sort-down':
                        sortConfig.key === 'userName' &&
                        sortConfig.direction === 'desc',
                      'fa-sort': sortConfig.key !== 'userName',
                    })}
                  />
                </span>
              </a>
            </span>
          </th>
        </tr>
      </thead>

      <tbody>
        {users.map(user => (
          <UserItem key={user.productId} user={user} />
        ))}
      </tbody>
    </table>
  );
};
